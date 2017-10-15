<?php
class Core {

    public $config;

    static public function Dbg($string, string $varname = "",bool $die = false){
        echo("<br>Type: ".gettype($string)." ".$vaarname."<br>");
        highlight_string("<?php\n\$DbgOut =\n" . var_export($string, true) . ";\n?>");
        echo("<br>");        
        if($die)
        {
            exit();
        }
    }

    static public function print_var_name($var) {
        foreach($GLOBALS as $var_name => $value) {
            if ($value === $var) {
                return $var_name;
            }
        }
    
        return false;
    }
    static public function Init(){
        Core::Dbg($_GET);
        $config = new Config();
        $core = new self($config);
    }

    public function __constuct($conf){
    }
}

?>