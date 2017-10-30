<?php

namespace PackageLoader;

class PackageLoader
{
    public $path;
    public $dir;
    public  $bclassname;
    public  $success;
    public $ModStatus = array();

    public function getComposerFile()
    {
        if(file_exists($this->dir."/composer.json")){
            return json_decode(file_get_contents($this->dir."/composer.json"), 1);            
        }else{
            +r("Unable to load json: ".$this->dir."/composer.json");
        }
    }

    public function load($dir)
    {
        $this->dir = $dir;
        $composer = $this->getComposerFile();
        if(isset($composer['autoload']['psr-4'])){
            $this->loadPSR4($composer['autoload']['psr-4']);
        }else{
            //+r("There is no psr-4 composer argument in ".$dir);
        }
        if(isset($composer['autoload']['psr-0'])){
            $this->loadPSR0($composer['autoload']['psr-0']);
        }else{
            //+r("There is no psr-0 composer argument in ".$dir);
        }
    }

    public function loadPSR4($namespaces)
    {
        $this->loadPSR($namespaces, true);
    }

    public function loadPSR0($namespaces)
    {
        $this->loadPSR($namespaces, false);
    }

    public function loadPSR($namespaces, $psr4)
    {
        $dir = $this->dir;
        // Foreach namespace specified in the composer, load the given classes
        if(gettype($namespaces) != "array"){
            +r($namespaces . "should be an array");
            return;
        }
        foreach ($namespaces as $namespace => $classpaths) {
            if (!is_array($classpaths)) {
                $classpaths = array($classpaths);
            }
            spl_autoload_register(function ($classname) use ($namespace, $classpaths, $dir, $psr4) {
               $this->bclassname = $classname;
               $this->success = false;
                // Check if the namespace matches the class we are looking for
                if (preg_match("#^".preg_quote($namespace)."#", $classname)) {
                    // Remove the namespace from the file path since it's psr4
                    if ($psr4) {
                        $classname = str_replace($namespace, "", $classname);
                    }
                    $filename = preg_replace("#\\\\#", "/", $classname).".php";
                    //$this->path = "unkow";
                    $this->path = $classname;
                    foreach ($classpaths as $classpath) {
                        $fullpath = $this->dir."/".$classpath."/$filename";
                        $this->path = $fullpath;
                        if (file_exists($fullpath)) {
                            if(include_once $fullpath){
                                $this->success = true;
                            }
                        }
                    }
                }
                if($this->success == true){
                   if(!isset($this->ModStatus[$this->path]) || (isset($this->ModStatus[$this->path]) && $this->ModStatus[$this->path] != "success")){

                   
                        $this->ModStatus[$this->path] = "success";
                       // r("[PSR Loader] Successfully loaded  -> " . $this->path."");                        
                   }
                }
            });
        }
    }
}
