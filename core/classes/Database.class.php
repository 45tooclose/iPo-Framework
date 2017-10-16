<?php

class Database {

    public $Conf;
    public $DatabaseName;
    public $Table;
    public $PDO;
    public $PaternModel;
    public $GENERATED_SQL;

    public function __construct($Conf,$DatabaseName, $Table = null){
        $this->Conf = $Conf;
        $this->DatabaseName = $DatabaseName;
        if($Table != null){
            $this->Table = $Table;
        }
        $this->PaternModel = ucfirst($this->Conf->ShCMS->DbType);   
        $dsn = ($this->PaternModel)."DSN"    ;
        $dsn = $this->Conf->DbPatterns->$dsn;

        $dsn = str_replace('{SERVERIP}',$this->Conf->ShCMS->DbHost,$dsn);
        $default_port = ($this->PaternModel)."PORT_DEFAULT";
        if(!isset($this->Conf->DhCMS->DbPort)){
            $dsn = str_replace('{SERVERPORT}',$this->Conf->DbPatterns->$default_port,$dsn);
        }else{
            $dsn = str_replace('{SERVERPORT}',$this->Conf->ShCMS->DbPort,$dsn);            
        }
        $dsn = str_replace('{DBNAME}',$DatabaseName,$dsn);    

        +r("[DB] Trying connecting to : ".$dsn);        
        $pdo_error = "";
        try {
        $this->PDO = new PDO($dsn,$this->Conf->ShCMS->DbUser,$this->Conf->ShCMS->DbPass);
        }
        catch(Exception $ex){
            $pdo_error = $ex;
        }finally{
            if(gettype($this->PDO) != "object"){
                !r("[DB] Unable to connect to the database ! \n ".$pdo_error);
            }else{
                r("[DB] Connexion Success");
            }
        }
        
    }
    public function __sleep(){
        $this->PDO = null;
    }

    public function __get($key){
        if($key == "run"){
            $this->GENERATED_SQL = str_replace('[LIMIT]','', $this->GENERATED_SQL);    
            $this->GENERATED_SQL = str_replace('[JOIN]','', $this->GENERATED_SQL);    
            $this->GENERATED_SQL = str_replace('[WHERE]','', $this->GENERATED_SQL);    
            $this->GENERATED_SQL = str_replace('[ORDER]','', $this->GENERATED_SQL);    
            
            $pdo = $this->PDO->prepare($this->GENERATED_SQL);
            $pdo;
            $pdo->execute();
            return $pdo->fetch(PDO::FETCH_BOTH);
        }
    }

    public function get($Table = null){
        if($Table != null){
            $this->Table = $Table;
        }

        if(gettype($this->Table) != "string"){
            !r("You must provide Table argumentin constructor or in get");
        }else{

            $paternWhere = ($this->PaternModel)."Where"    ;
            $paternQuery = $this->Conf->DbPatterns->$paternWhere;

            $this->GENERATED_SQL = $paternQuery;
            $paternSELECT = ($this->PaternModel)."SELECT"    ;
            $parternSELECT = $this->Conf->DbPatterns->$paternSELECT." ";         
            $this->GENERATED_SQL = str_replace('[SELECT]',$parternSELECT, $this->GENERATED_SQL);    
   


            }
        return $this;
    }

    public function cols($columns = null){
        $paternFROMTABLE = ($this->PaternModel)."FROMTABLE"    ;
        $paternFROMTABLE = $this->Conf->DbPatterns->$paternFROMTABLE." ";         
        $this->GENERATED_SQL = str_replace('[FROMTABLE]',$paternFROMTABLE, $this->GENERATED_SQL);
        $this->GENERATED_SQL = str_replace('{DB_NAME}',$this->DatabaseName, $this->GENERATED_SQL);
        $this->GENERATED_SQL = str_replace('{FROM_TABLE}',$this->Table, $this->GENERATED_SQL);

        if($columns != null){
        foreach($columns as $key => $col){
            $paternWHAT = ($this->PaternModel)."WHAT"    ;
            $paternWHAT = $this->Conf->DbPatterns->$paternWHAT." ";         
            $this->GENERATED_SQL = str_replace('[WHAT]',$paternWHAT, $this->GENERATED_SQL);
            $this->GENERATED_SQL = str_replace('{DB_NAME}',$this->DatabaseName, $this->GENERATED_SQL);
            $this->GENERATED_SQL = str_replace('{FROM_TABLE}',$this->Table, $this->GENERATED_SQL);
            $this->GENERATED_SQL = str_replace('{what}',$col, $this->GENERATED_SQL);    
        }    
    }else{
        $paternWHAT = ($this->PaternModel)."WHAT"    ;
        $paternWHAT = $this->Conf->DbPatterns->$paternWHAT." ";         
        $this->GENERATED_SQL = str_replace('[WHAT]',$paternWHAT, $this->GENERATED_SQL);
        $this->GENERATED_SQL = str_replace('{DB_NAME}',$this->DatabaseName, $this->GENERATED_SQL);
        $this->GENERATED_SQL = str_replace('{FROM_TABLE}',$this->Table, $this->GENERATED_SQL);
        $this->GENERATED_SQL = str_replace('[{what}]','*', $this->GENERATED_SQL);    
    }  

        r($this->GENERATED_SQL);
        return $this;   
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