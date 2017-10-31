
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

	public function SetChilds($childs){
		
		$this->childs[get_called_class()] = $childs;
	}

 	public function __call($function, $args) {

			$oj_name = explode('_hookable',$function);
			$naked_function_name = $oj_name[0];
			$hook_function_name = $naked_function_name."_hook";
			$hookable_function_name = $naked_function_name."_hookable";

			//$child = new MyHookClass();
			$hook_found = false;
			foreach($this->childs[get_called_class()] as $child){
				$child_instance = new $child();
				if(method_exists($child_instance, $hook_function_name )){
					
									echo($hook_function_name . ":<br>");
									
									echo($child_instance->$hook_function_name(implode(",",$args)));					
					$hook_found = true;
				}	
			}
				if(!$hook_found){
					if(method_exists($this, $hookable_function_name ) ){
						echo($hookable_function_name . ":<br>");
						
						echo($this->$hookable_function_name(implode(",",$args)));
					   }else{
						echo("Method : ".$function." not exists in ".__CLASS__);
					 }
				}

            //$args = implode(', ', $args);

            //print "Call to $function() with args '$args' failed!\n";
        }
}

Class HookableClass extends Core {

	public $id;	
	public $childs;

	public function __construct($id){
		$this->id = $id;
	}
	
	//simply add _hookable to allow it to be hooked
	public function Addition_hookable($mytest){
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