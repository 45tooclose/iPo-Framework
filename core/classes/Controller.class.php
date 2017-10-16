<?php

class Controller {

    public function Render($staticname, $layout = "main"){
        
        include("./views/default/layouts/".$layout.".tpl.php");
    }

}

?>