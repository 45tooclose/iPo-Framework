<?php
/*
*   PDO Wrapper providing cross-database egnines compatibilites
*   And serialisation support
*/
class oDatabase {
    public $AllowedMethods = ["update","select","delete","insert"];

    public $Conf;
    public $DatabaseName;
    public $Table;
    public $dsn;
    public $IsFirstInit;
    public $DatabaseDriverClass;
    public $CurrentAction;
    public $CurrentTables;

    public function __construct($Conf,$DatabaseName, $Table = null){
        $this->Conf = $Conf;
        $this->DatabaseName = $DatabaseName;
        $this->DatabaseDriverClass = $this->Conf->ShCMS->DbType ."Database";

        if(class_exists($this->DatabaseDriverClass)){
            r("[Database] Drivers found : ".$this->DatabaseDriverClass);
        }else{
            !r("[Database] Unable to find database driver : ".$this->DatabaseDriverClass.". Search and create : ./core/classes/".$this->DatabaseDriverClass.".class.php");
        }

        $this->dsn = $this->DriverGet('DSN');
        $this->dsn = str_replace('{DB_IP}', $this->Conf->ShCMS->DbHost,  $this->dsn);
        $this->dsn = str_replace('{DB_NAME}', $this->DatabaseName,  $this->dsn);
        

        if($this->Table != null){
            $this->Table = $Table;
        }
        try {
            $this->PDO = new PDO($this->dsn,$this->Conf->ShCMS->DbUser,$this->Conf->ShCMS->DbPass);
            $this->IsFirstInit = true;            
        }
        catch(Exception $ex){
            $pdo_error = $ex;
        }finally{
            if(gettype($this->PDO) != "object"){
                !r("[Database] Unable to connect to the database ! \n ".$pdo_error);
            }else{
                r("[Database] Connexion Success");
            }
        }        
    }

    public function DriverGet($key){
        
        $ret = $this->DatabaseDriverClass."::Get";
        return ($ret("$key"));
    }

    public function DriverSelect($fromtbl, $dbanme, $cols = null, $limit = null, $where = 1, $jointables = null){
        $ret = $this->DatabaseDriverClass."::Select";
        $query = ($ret($fromtbl, $dbanme, $cols, $limit, $where, $jointables));
         $res = $this->PDO->prepare($query);
         //+r($res);
         $res->execute();
         $output = array();
         foreach($res->fetch(PDO::FETCH_BOTH) as $key => $val){
            $output[$key] = $val; 
        }
        return $output;
    }

    public function __sleep(){
        $this->PDO = null;
    }

    public function __wakeup(){
        $this->PDO = new PDO($this->dsn,$this->Conf->ShCMS->DbUser,$this->Conf->ShCMS->DbPass);        
    }

    public function g($key){
        if($this->IsFirstInit == true && in_array($key, $this->AllowedMethods)){            
            $this->CurrentAction = $key;
            $this->IsFirstInit = false;
        }
        return $this; 
    }

    public function s($key, $val){
        if($key == "table"){
            $this->CurrentTables = $val;     
        }elseif($key == "tables"){
            $this->CurrentTables = explode($val,",");
        }
        if(in_array($this->CurrentAction, $this->AllowedMethods) && $this->CurrentTables != null){

            $func = "Driver".ucfirst($this->CurrentAction);
            
            return($this->$func($this->CurrentTables, $this->DatabaseName));     
        }
        return true;   
    }
}

?>