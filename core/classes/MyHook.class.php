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
        $res = parent::Addition_hookable($int, $int2) + 5;
        return $res;
    }

}

?>