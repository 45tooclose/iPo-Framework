<?php 
/*
*   Exemple of Database driver, this one is using mssql
*   And few of hisq specific features such as SELECT TOP X * ... 
*   Instead of MySQL SELECT * .... LIMIT X
*/
class mssqlDatabase extends Database {

    static public function Get($key) {
        $ret = null;
        switch ($key){
            case "DSN" : 
                $ret = "sqlsrv:Server={DB_IP},1433;Database={DB_NAME}";
                break;
        }
        return $ret;
    }

    static public function ColToFull($col, $table, $dbname){
        return "[".$dbname."].[dbo].[".$table."]".$col;
    }

    static public function TblToFull($table, $dbname){
        return "[".$dbname."].[dbo].[".$table."]";
    }

    static public function Select($fromtbl, $dbanme, $cols = null, $limit = null, $where = 1, $jointables = null){
            if($limit != null){ //If somthing as limit, we set it
                $limit = "TOP ".$limit." ";
            }else{
                $limit = "";
            }
            if($cols == null){ //If no col to select, we selec all cols
                $what = "*";
            }elseif(gettype($cols) == "string"){ //If cols is string, we select a single col
                $what = mssqlDatabase::ColToFull($cols, $fromtbl, $dbname);  
            }else{//if it is array, we select all cols in given array
                foreach($cols as $col){
                    $col = mssqlDatabase::ColToFull($cols, $fromtbl, $dbname);  
                }
                $what = implode($cols,",");
            }

            if($where != 1){
                foreach($where as $key => $val){

                }
            }
            if($where = 1){
                $where = "1=1";
            }else{
                foreach($where as $condition){
                    $condition = explode($condition, ' ');
                }
            }

            $query = "SELECT ".$limit.$what." FROM ".mssqlDatabase::TblToFull($fromtbl, $dbanme) . " WHERE ".$where;
            return ($query);
    }
}

?>