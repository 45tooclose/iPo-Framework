<?php
namespace Core\Modules\MemberArea;
use Core;

class MainController extends Core\Controller {

    public function __construct($Core, $args = null){
        Core\CoreLoader::SetCore($Core);
        $this->Core = $Core; 
        
$is_array = is_array($args);

        if($args == null || $is_array){
                $this->RenderMenu();
        }
    
           
    }

    public function RenderMenu(){

        $tpl = $this->Get('templates');
        r($rpl);

    }
}


?>
