<?php



namespace Core;
use League\Plates;

class Controller  extends Core{

        public $templates = null;
        public $themes_array = array();
        public $Core = null;
        public function __construct(){
            if($this->templates == null){
                $this->templates = new Plates\Engine('./views');
                foreach(scandir('./themes/') as $flodername){
                    if(!in_array($flodername,[".",".."])){
                        $theme_floder = './themes/'.$flodername;
                        //+r("added : ".$theme_floder);
                        $this->templates->addFolder($flodername, $theme_floder, true);
                    }
                }
                $this->templates->loadExtension(new Plates\Extension\Asset('./views/assets/', true));
                $this->templates->loadExtension(new Plates\Extension\URI(
                    $this->get__PATH_INFO($_SERVER['REQUEST_URI'])
                    ));
               /* $this->templates->addFolder('theme1', '/path/to/theme/1', true);
                $this->templates->addFolder('theme2', '/path/to/theme/2', true);*/
            } 
        }
        public function Get_hookable($key){
            if($key == "templates" && DisplayAll == false){
                return new EmptyRenderer();
            }
            if(OnPageDBG == true){
                $GLOBALS["IsDbg"] = true;
            }else{
                $GLOBALS["IsDbg"] = false;
            }
            return $this->$key;
        }

        public function Set_hookable($key, $val){
            $this->$key = $val;
        }

        public function get__PATH_INFO_hookable($path){
            $path_elements = explode("/", $path);
            $tempPI = "";
            if (isset($path_elements[2])){
                for ($i = 2 ;$i < count($path_elements); $i++ )
                    $tempPI .= "/".$path_elements[$i];
            }
            return $tempPI;
        }
}

?>