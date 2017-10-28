<?php
/*
*   Core Options
*/

//Errors reporting
error_reporting(E_ALL);
ini_set("display_errors", 1);

//StartTime for page loading mesures
define('StartTime',     microtime(true));


//DEV : true // PROD : false
define('IsDBG',         false);  //Will display the entire debuging outputs            
#define('IsDBG',   false);      //Will not display debugging outputs

define('OnPageDBG',     false);  //Will display on-page errors

//DEV : false or true // PROD : false
#define('DisplayAll',    false);     //Will not render the page, it will dump all the variables before exit
define('DisplayAll',    true);       //Will render the page

//Define environement mode : dev, prepod or prod (you can create custom environement by changing env in core/config/conf.env.ini filenames)
define('Env',           'dev');

function TimeE(){
    return  " (" . (microtime(true) - StartTime) . " seconds elapsed)";
}

/*
*   Loading external libs
*/
include("./core/libs/php-ref-master/ref.php");
//include("./core/libs/Medoo-master/src/Medoo.php");
include("./core/libs/plates-master/src/Engine.php");
include("./core/libs/composer-file-loader-master/PackageLoader.php");

// You load your packages
/*
$loader = new PackageLoader\PackageLoader();
$loader->load(__DIR__."/core/vendor/plates");
$loader->load(__DIR__."/core/vendor/picodb");
*/

include("./core/autoloader.inc.php");


foreach(scandir(__DIR__."/core/vendor/") as $fle){
    if( $fle != "." && $fle != ".."){
        $loader = new PackageLoader\PackageLoader();
        $loader->load(__DIR__."/core/vendor/".$fle);
    }
}



r("[CORE] ShCMS Start - ENV MODE : ".Env ." ".TimeE());

/*
*  Registering Autoloader
*/

/*
*   ShCMS Entry Point
*/
try {
    Core\Core::Init();
}
catch(Exception $ex){
    !r("ShCMS internal error: ");
    !r($ex);
}
/*
*   ShCMS Ending Point
*/
+r('[CORE] ShCMS End'.TimeE());

?>
