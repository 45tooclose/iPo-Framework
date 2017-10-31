
<?php 

print_r(get_declared_classes());


//Include the child class using autoloader
MyHookClass::Init();

//$child = GetChilds('HookableClass');
$child = 'MyHookClass';

$childs = array($child);


//Load the parent class
$test_instance = new HookableClass(5);
//Set child array
$test_instance->SetChilds($childs);
//The function that we want to hook
$test_instance->Addition(1,5,'test');


Class Core {

}

Class HookableClass extends Core {

	public $id;	
	public $childs;

	public function __construct($id){
		$this->id = $id;
	}
	
	//simply add _hookable to allow it to be hooked
	public function Addition_hook($mytest){
       		return $mytest + 1;
	}



}

class MyHookClass extends HookableClass  {

	public function __construct($args = null){
		
	}

	public function Addition_Hook($mytest){
        echo($mytest);
		$mytest = $mytest + 2;
		 parent::Addition($mytest);
	}

	public static function Init($args = null){

	}
}