<?php
namespace Core\Modules\MemberArea;
use Core;
use Core\Modules\iPoUtils;
class ProfileController extends Core\Controller {

    public function __construct($Core, $args = null){
        Core\CoreLoader::SetCore($Core);
        parent::__construct();
        
        if(!UserMgr::IsLoggedIn()){
            $utls =  new iPoUtils\UrlMgr();
            $utls->SetUrl(iPoUtils\UrlMgr::GetUrl('login'))
                 ->SetGet(array("msg" => "pls login"))               
                 ->GenerateHeader();
        }else{
            echo $this->Get('templates')->render('layouts/main', ['page' => 'profile', 'message' => 'tee']);                        
        }
    }        
}



?>
