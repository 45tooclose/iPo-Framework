<?php 
class Model {
        
    public $id;
    public $dbname;
    public $joints;
    public $conf;
    public $table;

    public function construct(){
        
    }

    public function __get($key){
        //READ
        return $this->$key;
    }

    public function __set($key, $val){
        $this->$key = $val;
    }

    public function save(){
        //UPDATE
        if(isset($this->id)){

        }else{
        //INSERT
        }
    }

    public function delete(){
        //DELETE
    }

}

?>