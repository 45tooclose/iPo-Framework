<?php

namespace Core;
use fguillot\picodb;
class RootController extends Controller {


    public function __construct($Core,$args){
        parent::__construct();
        CoreLoader::SetCore($Core);
        $this->Core = $Core;

       // r("Starting RootController with:");
       // r($args);
        if(isset($args[0])){
        $action = ((strlen($args[0]) > 0) ? $args[0] : "Index");
        }else{
            $action = "Index";
        }
       // r($action);

        $actionname = "action".$action;

        if(method_exists($this,$actionname)){
            $this->$actionname();
        }else{
            $this->actionIndex();
        }
    }

    public function actionIndex_hookable(){

     //   +r("Starting model");
      //  $test = new UsersMasterModel(2);
      //  r($test);


      //  $testmodel2 = new Modules\AdminPanel\TestModel('c');

        //$this->Pw = "654";
        //$test->save();
        echo $this->Get('templates')->render('layouts/main', ['name' => 'TEST']);
        //$this->Render("index");
          // instantiate the loader
    }

    public function actionTest_hookable(){
        r("Action test!!");
    }

}?>