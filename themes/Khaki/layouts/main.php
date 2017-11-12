<?php 
    $data = array();
    if(!isset($page)){
        $page = "page_main";
    }
    if(!isset($message)){
        $message = '';
    }
    $data['page'] = $page;  
    $data['message'] = $message;

?>
<!DOCTYPE html>
<html lang="en">
    <!-- head -->
    <?php $this->insert('elements/header_main') ?>
    <!-- /head -->
    <body> 
    
    <?php $this->insert('elements/headernav_main') ?>

    <?php $this->insert('pages/'.$page, ['data' => $data]) ?>


    <!-- footer -->
    <?php $this->insert('elements/footer_main') ?>
    <!-- /footer -->
    </body> 
</html>