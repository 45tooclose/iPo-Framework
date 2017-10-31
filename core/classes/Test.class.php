<?php 

namespace Core;

class Test extends AssetMgr {
    static public function load_hook($filename){
        //!r("HOOKED");
        $res = call_user_func_array(array('parent', 'load_hookable'), func_get_args());
        return $res ;//. ".cache";
    }
}

?>