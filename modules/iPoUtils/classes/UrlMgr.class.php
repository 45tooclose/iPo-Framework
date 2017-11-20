<?php 

namespace Core\Modules\iPoUtils;

use Core;
/*
*   HeaderMgr
*   Able to send custom or post to URL
*   Also Able to get ret data
*/
class UrlMgr extends Core\Core {


    public $url;
    public $header;
    public $post_data;
    public $get_data;

    public static function GetUrl($page = null){
        $core = Core\CoreLoader::GetCore();
        $http = "http";
        if( isset($_SERVER["HTTPS"]) || ($core->config->ShCMS->ForceHttps == "1")){
            $http = "https";
        }
        $ret = "";
        if($page != null){
            $ret = $ret  . "/" . $page;
        }
        return $http."://".$_SERVER["SERVER_NAME"].$ret;
    }
    
    public static function OnInit($core){
        if($core->config->ShCMS->ForceHttps == "1"){
            header("Location: https://".$_SERVER["name"].$_SERVER["REQUEST_URI"]);
        }
     }

    public function SetHeader($header){
        $this->header = $header;
        return $this;
    }

    public function SetUrl($url){
        $this->url = $url;
        return $this;
    }

    public function SetGet($data_array){
        $this->get_data = $data_array;
        return $this;
    }

    public function GenerateHeader(){
        $GET_DATA = http_build_query($this->get_data);
        $context_options = "Location: ".$this->url."?".$GET_DATA; 
        $this->SetHeader($context_options);
        $this->url = $this->url."?".$GET_DATA;
        header($context_options);
    }

}

?>