<?php
/*
*   Core Option
*/

//DEV : true // PROD : false
define('IsDBG',   true);  //Will display the entire debuging outputs            
#define('IsDBG',   false);  //Will not display debugging outputs


//DEV : false or true // PROD : false
#define('DisplayAll',    false);     //Will not render the page, it will dump all the variables before exit
define('DisplayAll',    true);      ///Will render the page



/*
*   Loading external libs
*/
include("./core/libs/php-ref-master/ref.php");
/*
*  Registering Autoloader
*/
include("./core/autoloader.inc.php");
/*
*   ShCMS Entry Point
*/
Core::Init();
?>