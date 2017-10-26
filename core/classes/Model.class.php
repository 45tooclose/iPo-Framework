<?php 
namespace Core;
use fguillot\picodb;

class Model {
        
    public $id          = 0;
    public $data_rows   = array();
    public $data_cells  = array();
    public $db          = null;
    public $Core        = null;

    public function __construct($selectedid = 0){
        $this->Core = CoreLoader::GetCore();
        r("MODEL  : ".$selectedid);


        $this->db = new oDatabase($this->DatabaseName);
        $this->db = $this->db->get();


        if($selectedid != 0){
                $this->id = $selectedid;
                   // r($this->id);
                $this->data_rows = $this->db->table($this->TableName)->eq($this->IndexColName, $this->id)->asc('UserUID')->findAll();
                foreach($this->data_rows[0] as $key => $val){
                    $this->data_cells[$key] = $val;
                }
               /* foreach($this->data_rows as $key => $val){
                    $this->$key = $val;
                }*/
        }

        return $this;
    }


    public function __get($key){
        //READ
        if(isset($this->$key)){
            return $this->$key;
        }else{
            return $this->data_cells[$key];            
        }
    }

    public function __set($key, $val){
        if(isset($this->$key)){
            $this->$key = $val;
        }else{
            $this->data_cells[$key] = $val;
        }
    }


    public function data(){
        return $this->data_cells;
    }
    public function save(){
        //UPDATE
        //$db->table('mytable')->eq('id', 1)->save(['column1' => 'hey']);
        if($this->id != 0){
            foreach( $this->data_cells as $key => $val){
                $this->db->table($this->TableName)->eq($this->IndexColName, $this->id)->save([$key => $val]);
                
            }

        }else{
        //
            unset($this->data_cells[$this->IndexColName]);
            $this->db->table($this->TableName)->eq($this->IndexColName, $this->id)->insert($this->data_cells);
        
        }
    }

    public function delete(){
        //DELETE
        $this->db->table($this->TableName)->eq($this->IndexColName, $this->id)->remove();
        
    }

}

?>