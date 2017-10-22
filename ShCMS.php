<?php
/*
*   Core Option
*/
//StartTime for page loading mesures
define('StartTime',     microtime(true));


//DEV : true // PROD : false
define('IsDBG',         true);  //Will display the entire debuging outputs            
#define('IsDBG',   false);      //Will not display debugging outputs

//DEV : false or true // PROD : false
#define('DisplayAll',    false);     //Will not render the page, it will dump all the variables before exit
define('DisplayAll',    true);       //Will render the page

//Define environement mode : dev, prepod or prod
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
$loader = new PackageLoader\PackageLoader();
$loader->load(__DIR__."/core/vendor/plates");



r("[CORE] ShCMS Start".TimeE());

/*
*  Registering Autoloader
*/
include("./core/autoloader.inc.php");

/*
*   ShCMS Entry Point
*/
try {
Core::Init();
}
catch(Exception $ex){
    !r("ShCMS internal error: ");
    !r($ex);
}
~r('[CORE] ShCMS End'.TimeE());
?>
