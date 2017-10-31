<?php 

namespace Core;

Class EmptyRenderer  extends Core {
    public function render($arg = null){
        !r("No templates output beacuase of DisplayAll settings");
    }
}