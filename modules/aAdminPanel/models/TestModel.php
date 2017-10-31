<?php
namespace Core\Modules\aAdminPanel;
use Core; 

class TestModel extends Core\Model {
    public $test = "a";
    public function __construct($str){
        $this->test = $str;
      //  r($this->test);
    }

}


?>