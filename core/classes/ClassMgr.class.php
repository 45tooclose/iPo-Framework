<?php 
namespace Core;

class ClassMgr extends Core {
    
    public $cachefile = "./core/tmp/ClassMgr.cache.json";
    public $reload = false;

    public $ParentChilds    =   array();
    
    /*
    *   Ajoute les info dans l'array et lance la recherche
    *   @return true
    */
    public function __construct(){
        $this->SetChild($this);
        
        $do_cache_file_exists = (file_exists($this->cachefile) ? true : false);
        if(!$do_cache_file_exists || $this->reload){
        //    !r($this->getDirContents('./'));
            $php_files_array = $this->getDirContents('./');

            foreach($php_files_array as $filepath){
                $file_data = array_slice(file($filepath), 0, 20);
                foreach($file_data as $key => $line){
                    if (preg_match("/\bextends\b/i", $line)) {
                        $line = explode('class ',$line);
                        $line = explode('Class ',implode(' ',$line));                        
                        $line = explode('{',implode(' ',$line));
                        $line = explode('final ',implode(' ',$line));     
                        $classes = explode('extends',implode(' ',$line));
                        $content = explode(' ',trim($classes[1]))[0];

                        if(!isset($this->ParentChilds[$content])){
                            $this->ParentChilds[$content] = array();
                        }
                            if(!in_array($classes[0],$this->ParentChilds[$content])){
                                array_push($this->ParentChilds[$content],  $classes[0]);                            
                            }
                        
                    } 
                }              
            }
            $myfile = fopen($this->cachefile,"w") or !r("Unable to open : ".$this->cachefile);
            fwrite($myfile, json_encode($this->ParentChilds));
            fclose($myfile);  
        }  
        else{   
            $this->ParentChilds = (json_decode(file_get_contents($this->cachefile),true));
        }
    }

    public function GetAllClasses(){
        return $this->ParentChilds;
    }

    public function ParentToChilds($parent){
        $classname = "";
        if(gettype($parent) == "object"){
            $classname = get_class($parent);
        }elseif(gettype($classname) == "string"){
            $classname = $parent;
        }else{
            !r("wrong or null object type");
        }
       // +r($classname );


                 //   +r($classname);
                $array = explode(trim("\ "),$classname);
                $array2 = array_reverse($array);
                foreach($array2 as $key => $name){
                    if(isset($this->ParentChilds[$name])){
                        return $this->ParentChilds[$name];
                    }
                }


        
    }

    public function ParentToChild($parent){
        $classname = "";
        if(gettype($parent) == "object"){
            $classname = get_class($parent);
        }elseif(gettype($classname) == "string"){
            $classname = $parent;
        }else{
            !r("wrong or null object type");
        }
      //  +r($classname );
        
        $output_array = array();
        $potential_class = explode(trim("\ "),$classname);
        foreach($potential_class as $key => $class){
           if(isset($this->childs[$class])){
              array_push($output_array, $this->childs[$class]);
           }
        }

        return $output_array;

        
    }

    public function getDirContents($dir, &$results = array()){
        $files = scandir($dir);
    
        foreach($files as $key => $value){
            $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
            if(!is_dir($path)) {
                $extension = explode('.',$path);
                $extension = $extension[count($extension) - 1];
                if($extension == "php"){
                    $results[] = $path;                    
                }
            } else if($value != "." && $value != "..") {
                $this->getDirContents($path, $results);
                $extension = explode('.',$path);
                $extension = $extension[count($extension) - 1];
                if($extension == "php"){
                    $results[] = $path;                    
                }
            }
        }
    
        return $results;
    }
}