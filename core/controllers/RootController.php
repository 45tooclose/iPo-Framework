<?php

namespace Core;
use fguillot\picodb;
use AdminPanel;
class RootController extends Controller {

    public function __construct($Core,$args){
        parent::__construct();
        CoreLoader::SetCore($Core);
        $this->Core = $Core;

       // r("Starting RootController with:");
       // r($args);

        $action = ((strlen($args[0]) > 0) ? $args[0] : "Index");

       // r($action);

        $actionname = "action".$action;

        if(method_exists($this,$actionname)){
            $this->$actionname();
        }else{
            $this->actionIndex();
        }
    }

    public function actionIndex(){

     //   +r("Starting model");
      //  $test = new UsersMasterModel(2);
      //  r($test);


      //  $testmodel2 = new Modules\AdminPanel\TestModel('c');

        
        $test->Pw = "654";
        //$test->save();
        echo $this->Get('templates')->render('layouts/main', ['name' => 'TEST']);
        //$this->Render("index");
          // instantiate the loader
    }

    public function actionTest(){
        r("Action test!!");
    }

}?>