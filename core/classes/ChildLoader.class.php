<?php 
namespace Core;
class ChildLoader extends Core {   
    public $DefaultFloder = [];
    
    /*
    *   Ajoute les info dans l'array et lance la recherche
    *   @return true
    */
    public function __construct($string){
        
    }

    public function GetFloders(){

    }

    public function SearchInFloder(){

                $MyFile = file($f);  // place the file in an array
                $nb = count($MyFile);    // count the number of lines or values
                $nb_voulu = 10 ; //
                $nb_start = $nb - nb_voulu - 1; // -1 parce que la première entrée est 0 (et non 1)
                
                $turn_while = 1;
                while ($turn_while <= $nb_voulu) {
                    if (strpos($MyFile[$nb_start], 'extends') !== false) {
                        echo 'true';
                    }
                }

    }

    /*
    *   @return Array des classes ayant un parent
    */
    public function get(){

    }
}