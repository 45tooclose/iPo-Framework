<?php
/*
*   Class Core
*
*/
class Core {

    public $config = array();

    public function __construct(){
        $this->CnfLoad();    
        $this->CnfLoad("DbPatterns");
        
        r($this->config);
        $this->UrlToController();   
    }

    public function CnfLoad($cnfname = "ShCMS"){
            $this->config = (array) $this->config;
            $this->config[$cnfname] = (new Config($cnfname))->Data;
            $this->config = (object)  $this->config;
    }

    /*
    *   Si $Slug = site.com/ OR site.com            => if exists MainController->action('Index') runing it
    *   Sinon si site.com/aaaa OR site.com/aaaa     => if exists MainController->action('aaaa') runing it
    *   Sinon si aaaaController existe              => if exists aaaaController->action('Index') runing it
    */
    public function UrlToController(){

        $DataBase = new Database($this->config,"PS_UserData");
        r($DataBase
            ->get(["Users_Master"])
            ->cols(["UserUID","UserID"])
          //  ->join();
          //  ->where(["PK","=","1"])
            ->run);

        $Model = new Model();
        $Model->test = "test";
        $Model->save();

        r($Model);

        /*

        $DataBase
            ->set()->cols()->vals()->run; 
            //WIll use [PK] in(return ID by bellow)



        */

        $Slug = explode('/',$_GET["path"]);
        if(strlen(trim($Slug[0])) == 0){
            r("Index!");
        }elseif(strlen(trim($Slug[1])) == 0){ 
            +r("Page?");
        }else{

        }
    }

    static public function Init(){
        new self();
    }
}

?>