<?php

use League\Plates;

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
        $templates = new League\Plates\Engine('./views');

        // Render a template
        echo $templates->render('profile', ['name' => 'Jonathan']);

        $this->Render("index");
          // instantiate the loader
     
    }

    public function actionTest(){
        r("Action test!!");
    }

}?>