<?php
class Core {

    public $config;

    static public function print_var_name($var) {
        foreach($GLOBALS as $var_name => $value) {
            if ($value === $var) {
                return $var_name;
            }
        }
    
        return false;
    }
    static public function Init(){
        $config = new Config();
        $core = new self($config);
    }

    public function __constuct($conf){
    }
}

?>