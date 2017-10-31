<?php
/*
* Autoloader for Classes / Models / Controllers for Core, and Modules
*
*/
spl_autoload_register(
        function ($class) {

            $tmp_class = $class;
            $tmp_namespace = explode("\\",$tmp_class);
            $module_name = 'core';
     
            if(count($tmp_namespace) > 1 &&  $tmp_namespace[0] != "Core" && $tmp_namespace[0]!= "Modules"){
                return false;
            }
            if((isset($tmp_namespace[0]) && isset($tmp_namespace[1]) &&  $tmp_namespace[0] == "Core")){
                $tmp_class = $tmp_namespace[1];
            }
            if((isset($tmp_namespace[0]) && $tmp_namespace[0] == "Modules" )||(isset($tmp_namespace[1]) && $tmp_namespace[1] == "Modules") ){                
                if($tmp_namespace[0] == "Modules"){
                    $module_name = "modules/".$tmp_namespace[1];   
                    $tmp_class = $tmp_namespace[2];
                    
                }elseif($tmp_namespace[1] == "Modules"){
                    $module_name = "modules/".$tmp_namespace[2]; 
                    $tmp_class = $tmp_namespace[3];
                    
                }
            }
           // r($tmp_class);
            
           // +r($class);
                 $pieces = preg_split('/(?=[A-Z])/',$tmp_class);
        switch($pieces[count($pieces) - 1]){
            //If classename like UsersMasterModel
            //-> we include models/UsersMasterModel.php
            case 'Model' :
                $path = './'.$module_name.'/models/' . $tmp_class . '.php';     
                break;
            //If classename like UsersMasterController
            //-> we include controllers/UsersMasterController.php
            case 'Controller' :
                $path = './'.$module_name.'/controllers/' . $tmp_class . '.php';
                break;
            //Else, we include classes/$tmp_class.php
            default :                
                $path = './'.$module_name.'/classes/' . $tmp_class . '.class.php';
                break;
        }
        if($tmp_class == "Model" || $tmp_class == "Controller"){
            $path = './'.$module_name.'/classes/' . $tmp_class . '.class.php';        
        }
        try{
            if (!class_exists($class)) {

                 if(include($path)){
                    if (class_exists($class)):
                     //   r("[Core Loader] Success fully loaded : ".$tmp_class);
                     else:
    
                        +r("[Core Loader] 0 : Error while loading : ".$tmp_class." in : ".$class);
                     endif;
                 }else{
                    +r("[Core Loader] 4: Error while loading : ".$tmp_class);                                                        
                 }
                 
            }else{
                +r("[Core Loader] 1: Class :".$tmp_class." already exists!");
            }
        }
        catch(Exception $ex)
        {
            +r("[Core Loader] 2: Error while loading : ".$tmp_class." Error :".$ex);                                    
        }
        finally{            
        }
    });