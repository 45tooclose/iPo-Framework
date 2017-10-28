<?php 
namespace Core;

class AssetMgr {
    static public function load($filename){
        $core = CoreLoader::GetCore();
        $view_name = './views/assets/'.$filename;
        if(file_exists($view_name)){
            return '/views/assets/'.$filename;
        }

        $theme_name = './themes/'.$core->config->ShCMS->MainTheme."/assets/".$filename;
        if(file_exists($theme_name)){
            return '/themes/'.$core->config->ShCMS->MainTheme.'/assets/'.$filename;
        }

        $other_themes = scandir("./themes/");
        foreach($other_themes as $floder){
            $tmp_name = "./themes/".$floder."/assets/".$filename;
            if(file_exists($tmp_name)){
                return "/themes/".$floder."/assets/".$filename;
            }    
        }
    }
}

?>