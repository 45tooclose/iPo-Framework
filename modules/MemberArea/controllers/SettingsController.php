<?php
namespace Core\Modules\MemberArea;
use Core;

class SettingsController extends Core\Controller {

    public function __construct($Core, $args = null){
        Core\CoreLoader::SetCore($Core);
        $this->Core = $Core;    
    
           
    }
}


?>
