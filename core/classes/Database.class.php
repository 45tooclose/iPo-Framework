<?php

class Database {

    public $Conf;
    public $DatabaseName;
    public $Table;
    public function __construct($Conf,$DatabaseName, $Table = null){
        $this->Conf = $Conf;
        $this->DatabaseName = $DatabaseName;
        if($Table != null){
            $this->Table = $Table;
        }
    }

    public function get($Table = null){
        if($Table != null){
            $this->Table = $Table;
        }

        if(gettype($this->Table) != "string"){
            !r("You must provide Table argumentin constructor or in get");
        }else{
            return $this;
            }
    }

    public function where($string){
        
    }
    /*
    * $db->get('Users_Master')
        ->where();
    *
    */
}

?>