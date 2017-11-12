<?php
namespace Core\Modules\MemberArea;
use Core;

class LoginController extends Core\Controller {

    public function __construct($Core, $args = null){
        Core\CoreLoader::SetCore($Core);
        $this->Core = $Core;
        
        +r($args);

        print_r($_POST);

        parent::__construct();
    

    }

   

}


?>