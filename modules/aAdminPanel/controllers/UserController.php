<?php

namespace Core\Modules\AdminPanel;
use Core; 

class UserController extends Core\Controller {

    public function __construct($Core, $args = null){
        parent::__construct();
        CoreLoader::SetCore($Core);
        $this->Core = $Core;

     
    }

   

}?>