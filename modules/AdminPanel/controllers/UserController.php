<?php

namespace Core\Modules\AdminPanel;
use Core; 

class UserController extends Core\Controller {

    public function __construct($Core, $args = null){
        +r($args);

        
        parent::__construct();
        /*Core\CoreLoader::SetCore($Core);
        $this->Core = $Core;*/

    }

   

}?>