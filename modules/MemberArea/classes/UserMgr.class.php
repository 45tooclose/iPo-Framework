<?php 

namespace Core\Modules\MemberArea;

use Core;

class UserMgr extends Core\Core {

    public $picodb;
    public $acc_exists;
    public $pw_valid;

    //Construit un utilisateur à partir de sont email et password optionel
    public function __construct($username_or_email, $password = null){
        $database = new \Core\oDatabase("PS_UserData");
        $this->picodb = $database->db;

        $res = $this->picodb->table('Users_Master')
        ->beginOr()
        ->eq('UserID', $username_or_email)
        ->eq('Email', $username_or_email)
        ->closeOr()
        ->findAll();

        if (isset($res[0])){
            $this->acc_exists = true;
        }

        $res = $this->picodb->table('Users_Master')
        ->beginOr()
        ->eq('UserID', $username_or_email)
        ->eq('Email', $username_or_email)
        ->closeOr()
        ->eq('Pw', $password)
        ->findAll();

        if (isset($res[0])){
            $this->pw_valid = true;
        }

    }

    public function chk(){
        if($this->acc_exists && $this->pw_valid){
            return true;
        }elseif($acc_exists){
            return 0;
        }else{
            return -1;
        }
    }

}



?>