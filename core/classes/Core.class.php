<?php
/*
*   Class Core
*   
*   This class loads configs, ClassMgr jsons, 
*   Parse URL to the CONTROLLER with given ,
*   args using RouteMGr
*/

namespace Core;

use \ReflectionMethod;
use nikic\FastRoute;


class Core {

    public $config = array();
    public $ClassMgr = null;
    public $childs;
    public $current_child = null;
    public $reloadjsoncache = true;
    public $routes_controllers = array();

    static public function Init(){

       $core_instance = new self();
       $classmgr_instance = new ClassMgr();
       $classes_array = array();

       //Class MGR Loading
       foreach($classmgr_instance->GetAllClasses() as $key => $val){
            if(!in_array($key,$classes_array)){
                array_push($classes_array, $key);
            }
            foreach($val as $subkey => $subval){
                if(!in_array($subval,$classes_array)){
                    array_push($classes_array, $subval);
                }
            }
       }

       //Running OnInit in modules classes
       foreach($classes_array as $key => $val){

            foreach(scandir('./modules') as $k => $v){
                if($v != "." && $v != ".."){
                    $file_path = './modules/'.$v.'/classes/'.implode('',explode(' ',$val)).".class.php";
                    if(file_exists($file_path)){
                        //if(class_exists("Modules\\".$v."\\".$val)){
                        $class_name = "Core\\Modules\\".$v."\\".trim($val);
                        if(class_exists($class_name)){
                            if(is_callable([$class_name, 'OnInit'])){
                                r("OnInit() loaded in : " . "Core\\Modules\\".$v."\\".trim($val));
                                $function_to_launch = $class_name."::OnInit";
                                $function_to_launch($core_instance);
                            }
                        }
                    }
                }
            }
            
       }       

       //Adding Routes to the array $core_instance->routes_controllers

       foreach(scandir('./modules') as $k => $v){
        $route_file = './modules/'.$v.'/router.json';
        if(file_exists($route_file)){
            $routes_array = (array) json_decode(file_get_contents($route_file));

            $core_instance->routes_controllers = array_merge($routes_array, $core_instance->routes_controllers);

            }
       }

       $router = new RoutMgr();      
       foreach($core_instance->routes_controllers as $key => $val){

            $router->map( 'GET|POST', $key, $val);
       }
       $match = $router->match();
        // call closure or throw 404 status

       if(class_exists($match['target'])){
           $controller_instance = new $match['target']($core_instance, $match['params']);
       } else {
            // no route was matched
            ~r("404 ERROR");
        }
            



    
      // $core_instance->Render();
       +r($core_instance->Addition(6,6));
    }


    public function SetChild($child_instance){           
        $this->current_child = $child_instance;        
        
    }
    
    public function __construct(){  
        
        $this->CnfLoad();  
        //r($this->config);
    }

    public function Addition_hookable($int,$int2){
        return $int + $int2;
    }

    public static function __callStatic($function, $args)
    {        
            $ClassMgr = new ClassMgr();        
            $childs = array();
        
            $hooks = 0;

            $oj_name = explode('_hook',$function);
            $naked_function_name = $oj_name[0];
            $hook_function_name = $naked_function_name."_hook";
            $hookable_function_name = $naked_function_name."_hookable";
            
            $childs[get_called_class()] = $ClassMgr->ParentToChilds(get_called_class());
            foreach($childs[get_called_class()] as $child){
                    if(!stristr($child,"\\")){
                        $child = trim(("Core\\").$child);
                    }
                    $child = implode('',explode(' ',$child));
                    //+r($child);                    
                    if(class_exists($child)){
                        $methods = get_class_methods($child);
                        if(in_array($hook_function_name, $methods)){
                            $hooks++;                             
                           // !r($function. " hooked using : ".$child);
                            $tm2 = $child."::".$hook_function_name;
                            if($function == $naked_function_name){
                                return forward_static_call(array($child, $hook_function_name), $args);
                            }           
                        }
                    }
            }
            
            $slf = get_called_class();
            if($hooks == 0 && $function == $naked_function_name){
               // print_r($args);
                //r(($args[count($args) - 1]));
           
                return forward_static_call(array(get_called_class(), $hookable_function_name), $args);
            } 
            return true;
    }
 	public function __call($function, $args) {
        
            if(null == ($this->ClassMgr)){
                $this->ClassMgr = new ClassMgr();        
                
            }
                $hooks = 0;

                $oj_name = explode('_hook',$function);
                $naked_function_name = $oj_name[0];
                $hook_function_name = $naked_function_name."_hook";
                $hookable_function_name = $naked_function_name."_hookable";

                $this->childs[get_called_class()] = $this->ClassMgr->ParentToChilds(get_called_class());
                
                
                foreach($this->childs[get_called_class()] as $child){
                        if(!stristr($child,"\\")){
                            $child = trim(("Core\\").$child);
                        }
                        $child = implode('',explode(' ',$child));
                        //+r($child);                        
                        if(class_exists($child)){
                            $methods = get_class_methods($child);
                            if(in_array('OnHookInit',$methods) && in_array($hook_function_name, $methods)){
                                $tm = $child."::OnHookInit";
                                $this->SetChild($tm());   
                                $hooks++;                             
                                !r($function. " hooked using : ".$child);
                                if($function == $naked_function_name){
                                    return call_user_func_array(array($this->current_child, $hook_function_name), $args);
                                }           
                            }
                        }
                }
                if($hooks == 0 && ($function == $naked_function_name)){
                    
                    return call_user_func_array(array($this, $hookable_function_name), $args);                    
                }

            }


            //$args = implode(', ', $args);

            //print "Call to $function() with args '$args' failed!\n";
       

    public function CnfLoad($cnfname = "ShCMS"){
            $this->config = (array) $this->config;
            $this->config[$cnfname] = (new Config($cnfname))->Data;
            $this->config = (object)  $this->config;
    }

    
}

?>