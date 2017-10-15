<?php
/*
* Autoloader
*
*/
spl_autoload_register(
        function ($class) {
            echo("Loading :".$class);
        $pieces = preg_split('/(?=[A-Z])/',$class);
        switch($pieces[count($pieces) - 1]){
            //If classename like UsersMasterModel
            //-> we include models/UsersMasterModel.php
            case 'Model' :
                $path = 'models/' . $class . '.php';        
                break;
            //If classename like UsersMasterController
            //-> we include controllers/UsersMasterController.php
            case 'Controller' :
                $path = 'controllers/' . $class . '.php';
                break;
            //Else, we include classes/$class.php
            default :
                $path = 'classes/' . $class . '.class.php';
                break;
        }
        include $path;
    }
);


?>