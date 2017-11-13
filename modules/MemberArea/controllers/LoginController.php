<?php
namespace Core\Modules\MemberArea;
use Core;

class LoginController extends Core\Controller {

    public function __construct($Core, $args = null){
        Core\CoreLoader::SetCore($Core);
        $this->Core = $Core;    
      //  +r($args);
        $usermgr = new UserMgr($_POST["Username"],$_POST["Password"]);
        parent::__construct();
        $page_to_render = 'login';
        $msg = '';
        
        switch($usermgr->chk()){
            case 1 : 
                //$page_to_render = 'profile';
                $msg = 'You successfully logged in. Welcome in Shaiya Europe :)';
                $usermgr->login($_POST["Username"]);
                
                //success
                break;
            case 0 :
                $msg = 'You entered a wrong password';  
                //wrong password
                break;
            default : 
                //Unknow user
                $msg = 'Unknow user or email';       
                break;
        }
        if(isset($_POST["Json"])){
            echo json_encode($usermgr->chk());
        }else{
            echo $this->Get('templates')->render('layouts/main', ['page' => $page_to_render, 'message' => $msg]);            
        }     
           
    }
}


?>