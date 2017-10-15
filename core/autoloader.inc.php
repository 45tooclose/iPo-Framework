<?php

//Class Autoloader
spl_autoload_register(function ($class) {


    //Core Class
    //Model
    //Controller

    $pieces = preg_split('/(?=[A-Z])/',$class);
    echo($pieces[count($pieces) - 1]);
    include 'classes/' . $class . '.class.php';
});


?>