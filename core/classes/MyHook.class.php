<?php 

namespace Core;

Class MyHook extends Core {

    public function __construct(){
        $this->SetChild($this);
    }

    public static function OnHookInit(){
        return new self();
    }
    
    public function Addition_hook($int,$int2){
        //Call the original function, and add 5
        $res = call_user_func_array(array('parent', 'Addition_hookable'), func_get_args());
        return $res + 5;
        
    }

}

?>