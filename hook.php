
<?php 


MyHookClass::Init();
$test_instance = new HookableClass(5);

Class HookableClass {

	public $id;	

	public function __construct($id){
		$this->id = $id;
		echo $this->Addition($mytest);
	}

	public function Addition_hookable($mytest){
       		return $mytest + 1;
	}


 	public function __call($function, $args) {

	    $oj_name = explode('_hook',$function);
            $obj_hook = $oj_name[0]."_hook";

            $child = new MyHookClass();

	        if(method_exists($child, $obj_hook )){
                echo($obj_hook);
                echo("<br>");
                echo($args);
            	$child->$obj_hook($args);
       	    }elseif(method_exists($this, $oj_name )){
            	$this->$oj_name($args);
       	    }else{
		        echo("Method : ".$function." not exists in ".__CLASS__);
	     }

            //$args = implode(', ', $args);

            //print "Call to $function() with args '$args' failed!\n";
        }


}

class MyHookClass extends HookableClass  {

	public function Addition_Hook($mytest){
        echo($mytest);
		$mytest = $mytest + 2;
		 parent::Addition($mytest);
	}

	public static function Init($args = null){

	}
}