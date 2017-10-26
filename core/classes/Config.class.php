<?php

namespace Core;

class Config {

    public $Data;

    public function __construct($ConfFile){
        $file_path = './core/config/'.$ConfFile.'.'.Env.'.ini';
        if(file_exists($file_path)){
            try{
                $config_array = parse_ini_file($file_path);
                $this->Data = (object) $config_array;                
                r("[CONFIG] Successfully loaded : ".$file_path." : ");
                return($this->Data);
            }catch(Exception $ex){
                r("[CONFIG] Error while loading ".$file_path." : ".$ex);
            }finally{

            }
        }else{
            !r("[CONFIG] File : ".$file_path." not found"); 
            return false;           
        }
    }
} 
?>