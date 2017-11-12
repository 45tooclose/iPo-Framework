<?php
namespace Core\Modules\MemberArea;
use Core;

class LoginController extends Core\Controller {

    public function __construct($Core, $args = null){
        Core\CoreLoader::SetCore($Core);
        $this->Core = $Core;
        
        +r($args);

        print_r($_POST);


        $usermgr = new UserMgr($_POST["Username"],$_POST["Password"]);
        +r($usermgr->chk());

        parent::__construct();
    


        echo $this->Get('templates')->render('layouts/login', ['name' => 'TEST']);
        

    }

   

}


?>