<?php 

namespace Core;


class CoreLoader {
    public static function SetCore($core){
        $GLOBALS["Core"] = $core;
    }
    public static function GetCore(){
        return $GLOBALS["Core"];
    }
}

?>