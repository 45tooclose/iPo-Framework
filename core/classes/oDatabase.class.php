<?php
/*
*   PDO Wrapper providing cross-database egnines compatibilites
*   And serialisation support
*/
class oDatabase {
    public $db;
    public $Core;
    public $dbname;
    public function __construct($databasename){
        $this->dbname = $databasename;
        $this->Core = CoreLoader::GetCore();
        $this->db = new fguillot\picodb\Database([
            'driver' => $this->Core->config->ShCMS->DbType,
            'hostname' => $this->Core->config->ShCMS->DbHost,
            'username' => $this->Core->config->ShCMS->DbUser,
            'password' => $this->Core->config->ShCMS->DbPass,
            'database' => $this->dbname,
        ]);
    }

    public function get(){
        return $this->db;        
    }

    public function __destruct(){
        $this->db = null;
    }

    public function __sleep(){
        $this->db = null;
    }

    public function __wakeup(){
        $this->db = new fguillot\picodb\Database([
            'driver' => $this->Core->config->ShCMS->DbType,
            'hostname' => $this->Core->config->ShCMS->DbHost,
            'username' => $this->Core->config->ShCMS->DbUser,
            'password' => $this->Core->config->ShCMS->DbPass,
            'database' => $this->dbname,
        ]);
    }


}

?>