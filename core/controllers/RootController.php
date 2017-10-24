<?php
        use fguillot\picodb;

class RootController extends Controller {

    public function __construct($Core,$args){
        CoreLoader::SetCore($Core);
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
        
       /* if($this->templates == null){
            $this->templates = new League\Plates\Engine('./views'); }*/
     // +r($this->Core->config->ShCMS->DbHost);

      /*  $db = new fguillot\picodb\Database([
        'driver' => $this->Core->config->ShCMS->DbType,
        'hostname' => $this->Core->config->ShCMS->DbHost,
        'username' => $this->Core->config->ShCMS->DbUser,
        'password' => $this->Core->config->ShCMS->DbPass,
        'database' => 'PS_UserData',
    ]);*/
                            
   // r($db->table('Users_Master')->asc('UserUID')->findAll());
    
       // Render a template
        //$this->DB = new oDatabase($this->Core->config, 'PS_UserData', 'Users_Master' );
        //+r($this->DB->g('select')->s('table',  "Users_Master"));
        +r("Starting model");
        $test = new UsersMasterModel(2);
       //r($test);
       echo $this->Get('templates')->render('profile', ['name' => 'TEST']);

        //$this->Render("index");
          // instantiate the loader
    }







    public function actionTest(){
        r("Action test!!");
    }

}?>