<?php 
/**
* Core\AssetMgr is a simple class to load assets
*
* Core\AssetMgr is a class that has no real actual code, but merely
* exists to help provide people with an understanding as to how the
* various PHPDoc tags are used.
*
* Example usage:
* if (Example_Class::example()) {
*    print "I am an example.";
* }
*
* @package  I-Po Framework - Core
* @author   FAUSSURIER Marc <faussurier.marc@icloud.com>
* @version  $Revision: 1.3 $
* @access   public
* @see      http://shaiya.eur
*/
namespace Core;

class AssetMgr extends Core{
    static public function load_hookable($filename){
        if(gettype($filename) == "array"){
            $filename = $filename[0];
        }
        $core = CoreLoader::GetCore();
        $view_name = './views/assets/'.$filename;
        if(file_exists($view_name)){
            return '/views/assets/'.$filename;
        }

        $theme_name = './themes/'.$core->config->ShCMS->MainTheme."/assets/".$filename;
        if(file_exists($theme_name)){
            return '/themes/'.$core->config->ShCMS->MainTheme.'/assets/'.$filename;
        }

        
        foreach(scandir('./modules/') as $module){
            if(!in_array($module,[".",".."])){
                $module_path = './modules/'.$module;
                $theme_floder = $module_path."/views/assets";
                $file_path = $theme_floder."/".$filename;
                if(is_dir($theme_floder) && file_exists($file_path)){
                    return $file_path;
                }
            }
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