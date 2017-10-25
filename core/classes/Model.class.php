<?php 

use fguillot\picodb;
class Model {
        
    public $id;
    public $data_rows;
    public $db;
    

    public function __construct($selectedid){
        $this->Core = CoreLoader::GetCore();
        r("MODEL  : ".$selectedid);
            $this->id = $selectedid;
            $this->db = new fguillot\picodb\Database([
                'driver' => $this->Core->config->ShCMS->DbType,
                'hostname' => $this->Core->config->ShCMS->DbHost,
                'username' => $this->Core->config->ShCMS->DbUser,
                'password' => $this->Core->config->ShCMS->DbPass,
                'database' => $this->DatabaseName,
            ]);
               // r($this->id);
            $this->data_rows = $this->db->table('Users_Master')->eq($this->IndexColName, $this->id)->asc('UserUID')->findAll();
            foreach($this->data_rows[0] as $key => $val){
                $this->$key = $val;
            }
            r($this->UserUID);
           /* foreach($this->data_rows as $key => $val){
                $this->$key = $val;
            }*/
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