<?php
namespace Core\Modules\AdminPanel;
use Core;

class AdminController extends Core\Controller {

    public function __construct($Core, $args = null){
        Core\CoreLoader::SetCore($Core);
        $this->Core = $Core;    
        parent::__construct();

        echo $this->Get('templates')->render('layouts/admin/main');
        

    }

   

}


?>