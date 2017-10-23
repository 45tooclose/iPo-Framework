<?php
/*
* Autoloader for Classes / Models / Controllers
*
*/
spl_autoload_register(
        function ($class) {
            if(count(explode(trim('\ '),$class)) > 1){
                return;
            }

        $pieces = preg_split('/(?=[A-Z])/',$class);
        switch($pieces[count($pieces) - 1]){
            //If classename like UsersMasterModel
            //-> we include models/UsersMasterModel.php
            case 'Model' :
                $path = './core/models/' . $class . '.php';        
                break;
            //If classename like UsersMasterController
            //-> we include controllers/UsersMasterController.php
            case 'Controller' :
                $path = './core/controllers/' . $class . '.php';
                break;
            //Else, we include classes/$class.php
            default :
                $path = './core/classes/' . $class . '.class.php';
                break;
        }
        if($class == "Model" || $class == "Controller"){
            $path = './core/classes/' . $class . '.class.php';            
        }
        try{
            if (!class_exists($class)) {
                 include($path);
                 if (class_exists($class)):
                    r("[Core Loader] Success fully loaded : ".$class);
                 else:

                    +r("[Core Loader] Error while loading : ".$class." in : ".$path);
                 endif;
                 
            }else{
                +r("[Core Loader] Class :".$class." already exists!");
            }
        }
        catch(Exception $ex)
        {
            +r("[Core Loader] Error while loading : ".$class." Error :".$ex);                                    
        }
        finally{            
        }
    });