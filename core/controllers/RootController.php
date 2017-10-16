<?php
class RootController extends Controller {

    public function __construct($Core,$args){
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
        $this->Render("main","index");
    }

    public function actionTest(){
        r("Action test!!");
    }


}

?>