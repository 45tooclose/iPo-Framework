<?php

class RootController extends Controller {

    public function __construct($Core,$args){
        $this->Core = $Core;

        r("Starting RootController with:");
        r($args);

        $action = ((strlen($args[0]) > 0) ? $args[0] : "Index");

        r($action);

        $actionname = "action".$action;

        if(method_exists($this,$actionname)){
            $this->$actionname();
        }else{
            $this->actionIndex();
        }
    }

    public function actionIndex(){

        // Create new Plates instance
        

        // Render a template
        $this->DB = new Database($this->Core->config, 'PS_UserData', 'Users_Master' );
        +r($this->DB->g('select')->s('table',  "Users_Master"));
        echo $this->Get('templates')->render('profile', ['name' => 'TEST']);

        //$this->Render("index");
          // instantiate the loader
     
    }

    public function actionTest(){
        r("Action test!!");
    }

}?>