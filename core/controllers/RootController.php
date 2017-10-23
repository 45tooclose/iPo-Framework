<?php
        use fguillot\picodb;

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
        
       /* if($this->templates == null){
            $this->templates = new League\Plates\Engine('./views'); }*/
      +r($this->Core->config->ShCMS->DbHost);

       /*     $db = new fguillot\picodb\Database(
        fguillot\picodb\UrlParser::getInstance()
        ->getSettings($this->Core->config->ShCMS->DbType.'://'.$this->Core->config->ShCMS->DbUser.':'.$this->Core->config->ShCMS->DbPass.'@'.$this->Core->config->ShCMS->DbHost.':'.$this->Core->config->ShCMS->DbPort.'./PS_UserData')
                                          );
*/
       // Render a template
        $this->DB = new oDatabase($this->Core->config, 'PS_UserData', 'Users_Master' );
        +r($this->DB->g('select')->s('table',  "Users_Master"));
        
        echo $this->Get('templates')->render('profile', ['name' => 'TEST']);

        //$this->Render("index");
          // instantiate the loader
    }







    public function actionTest(){
        r("Action test!!");
    }

}?>