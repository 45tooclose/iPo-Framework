# iPo-Framework
iPo Framework - Standalone MVC PHP Framework that supports easy-to-use ORM Database Model (using picodb), Templates (using plates), a nice Hook System, a powerful router &amp; autoloader, friendly ini config files, themes, and module. iPo Framework is compatible with php 5.4 &amp; + and every SQL Engine.

## Core Architecture


### iPo.php, the launcher

Firstlmy, you can find the core settings here :

```php

//ENABLE DEBUG OUTPUTS -- FOR DEVLOPEMENT
define('IsDBG', true); 

//WILL DISPLAY ON-PAGE DEBUG OUTPUTS
define('OnPageDBG', true); 

//Will render the page 
define('DisplayAll',  true);

//Define the environement mode used by the core to load right parameters
define('Env',     'dev');

```
Then, the core will be loaded using the Core::Init_hookable static function.

### Config

Config file are stored in core/config and are in ini format. Don't forget to put your database credits if you want to use the Model system.

If you for exemple you defined the Env option to 'dev', you'll have to edit *.dev.ini files.
And if you changed it to 'prod', you'll have to edit *.prod.ini files. If you are making a module, please make it creating your config file in this floder, so config will always stay clean with ALL the config in it.

### TMP Files
Caches and tamporary files are stored in json format in core\tmp you can clean this foder sometimes

### Adding custom packages

There is 3 ways to install extisting PHP packages, as there is 3 kinf od packages.

#### NAKED LIBS
The first one is the naked php libs, that you can use by using a single include();

```php
include("./core-libs/composer-file-loader-master/PackageLoader.php"); //HERE
```
#### COMPOSER PACKAGES
You can load composer packages, without installing composer thank to composer-file-loader lib, you will be able to use them simply by pasting the package floder in the core\vendor directory. I am using this way for 2 packages : Plates that I use for the template system, and PicoDB, for the database access.

```php
include("./core-libs/composer-file-loader-master/PackageLoader.php"); //HERE
```

#### CORE MODULES

Core modules are standalone packages that you can share with every i-po frameork baased website. Core modules can contains everything, from a simply PHP library for developper, to an advanced paiment gate that uses custom viws, web assets (png, css, js), cstom controllers, classes and models.

Once you downloaded a core module, all you have to do is to paste it in core\modules floder.


## Models // Basic CRUD

Models are ORM based. All you have to do to create a model, is to design it in your SQL engine. There is tons of well made tools for each SQL Engine that provide a graphical way to design your database tables.

For SQL Server, I suggest you to use SQL Server Management Studio. For MySQL, feel free to use Mysql Workbench.

Once your table is made, all you have to do to create your mdoel, is to create a file in core\models ore in core\modules\yourmodule\models

for core\models will have to look like :


```php
<?php

namespace Core;

//class model name have to finish by ***Model
class MymodelnameModel extends Model {
    public $IndexColName    =   "RowID";  //This should be a collumn with autoincrement
    public $TableName       =   "MyTable";  //The table name that I told yiou to create above
    public $DatabaseName    =   "MyDatabase"; //Your database name

    }
    
}
```
and if you are making a module, the file will have to look like :
```php
<?php

namespace Core\Modules\MyModuleName;
use Core;

//class model name have to finish by ***Model
class MymodelnameModel extends Core\Model {
    public $IndexColName    =   "RowID";  //This should be a collumn with autoincrement
    public $TableName       =   "MyTable";  //The table name that I told yiou to create above
    public $DatabaseName    =   "MyDatabase"; //Your database name
    
}
```
Then, you'll be able to get all rows of your model by using (in your controllers or classes):

```php
<?php

$model_instance = new MymodelnameModel();
$model_rows = $model_instance->data();

foreach($model_rows as $no => $data_array){
  //You can easily loop all your model
}
?>
```

Selecting a model by its ID : 
```php
<?php

$model_instance = new MymodelnameModel($id);
}
?>
```
Changing Model value and save it : 
```php
<?php

$model_instance->Username = "Sarah"; 
$model_instance->save();

//Will set the set the Username to sarah of the table MyTable by using its $id
}
?>
```
Deleting a model : 
```php
<?php

$model_instance->delete();

//Will remove the row by using its $id
}
?>
```
creating a model :
```php
<?php

$model_instance = new MymodelnameModel(0); //Put 0 for creating a new one
$model_instance->Username = "Jean";
$model_instance->save();

//will insert a new row in MyTable with UserName = Jean, and a new generated RowID.
}
?>
```

## Routes and Controllers

Firstly, you'll have to create a controller file.
As for Model :
for core\Controllers will have to look like :

```php
<?php

namespace Core;

//class name of your controller have to finish by ***Controller
class MyController extends Controller {
    public function __construct($Core, $args){
            parrent::__construct();
            CoreLoader::SetCore($Core);
            $this->Core = $Core;
            
            //Render a template using plates :
            echo $this->Get('templates')->render('layouts/main', ['name' => 'Jean']);
            
            //Will render the mainp.php template
            //in views/layouts/main.php if you created this template in root
            //in themes/YourThemeName/layouts/main.php if you are making a theme
            //in modules/yourmodulename/views/layouts/main.php if you need a view in your module
    }
        
}
```
and if you are making a module, the file will have to look like :
```php
<?php

namespace Core\Modules\MyModuleName;

//class name of your controller have to finish by ***Controller
class MycontrollernameController extends Core\Controller {
    public function __construct($Core, $args){
            parrent::__construct();
            CoreLoader::SetCore($Core);
            $this->Core = $Core;
            
            //Render a template using plates :
            echo $this->Get('templates')->render('layouts/main', ['name' => 'Jean']);
            
            //Will render the mainp.php template
            //in views/layouts/main.php if you created this template in root
            //in themes/YourThemeName/layouts/main.php if you are making a theme
            //in modules/yourmodulename/views/layouts/main.php if you need a view in your module
            
    }
        
}
```

Well you have your controller, your model, but we didn't match that to a url.

Simply open router.json file, in ./router.json or ./modules/yourmodulename/router.json
and add 

```json
{
    ...
    "/":    "Core\\MycontrollernameController"
}

```

or this if you are making a module :

```json
{
    ...
    "/user/[i:id]/":    "Core\\Modules\\yourmodulename\\MycontrollernameController"
}

```


## Views

### Views files

Views can be stored in :
"
- in views/layouts/main.php if you created this template in root
- in themes/YourThemeName/layouts/main.php if you are making a theme
- in modules/yourmodulename/views/layouts/main.php if you need a view in your module
"

By default the right order is :
1) 1stly the framwork try to find it in ./views
2) then it try in ./themes/anythemename/views
3) and then in ./modules/anymodule/modules

You can use in your views all Plates from The PHP League functions : 
http://platesphp.com

## Assets 

You have to load asset in your template by usign this function :
```php
<html>
    ....
    <img src="<?=Core\AssetMgr::load('mylogo.png')?>" width="281">
    ...
 </html>
 ```
 
 Using Core\AssetMgr::load(), the framework will load the asset with the same logic as for views.
By default the right order for mylogo.png is :
1) 1stly the framwork try to find it in ./views/assets/mylogo.png
2) then it try in ./themes/anythemename/views/assets/mylogo.png
3) and then in ./modules/anymodule/modules/assets/mylogo.png


## Classes
As for Model and Controllers :
for core\Classes the file will have to be named core\Classes\YouClassName.class.php :

```php
<?php

namespace Core;

class YouClassName extends Core {
   //You are free to do what you want here
        
}
```
and if you are making a module, the file will have to look like :
```php
<?php

namespace Core\Module\mymodule;

class YouClassName extends Core\Core {
   //You are free to do what you want here
   ...
   
   
   //This function will be called before that the page rtender, you can modify the core instance and what you want here
   public static function OnInit($instanceofcore){
   
   }
        
}
```


This is also were you can write hooks.

## Modules Architecture

Modules architecture is the same as the core one, excpect for config, tmp, vendor and libs floder. But Controllers, Models, Classes, routes, views and asset system are the same. See core/modules/AdminPanel for an empty exemple. 

## Advanced Database Usage

We are using PicoDb for your database operations. You can use models for basic CRUD, but feel free to use the picodb query system.

U'll have to put use fguillot\picotdb; at the begging of your file. 

To create a new picodb instance, use $db = new Core\oDatabase('databasename');
then do what you want with $db, see https://github.com/php-libs/picoDb


## Hook System

Each function with the suffix "_hookable" can be hooked. No matter if it is a core classe, a  model, or a  controller or a module one.
Here is how to write an hookable function :
 :
```php
<?php
//extends Core, Model or Cotnroller
class MyHookableClassName extends SomeWhatAcordingTheDoc {

    public function Addition_hookable($int,$int2){
        return $int + $int2;
    }
 ```
 
 Then to be hooked, you can create a class that extends MyClassName.You can also create this class in modules/yourmodulename/Classes floder.
 
 ```php
<?php
//extends Core, Model or Cotnroller
class MyHookClass extends MyHookableClassName {

    public function __construct(){
        $this->SetChild($this);
    }
    
    public static function OnHookInit($arg1 = null, $arg2 = null, $arg3 = null){
        return new self(func_get_args());
    }

    public function Addition_hook($int,$int2){
        $res = call_user_func_array(array('parent','Addition_hookable'), func_get_args());
        return $int + 5;
    }
 ```
 

Without the hook, the result of MyHookableClassName->Addition(6,6) was 12.
Now with the hook, the same function will return 17.
You can hook each ipo-based classes, there is no limit. You can hook from core a module, or you can hook the core from a module. Using that, modules will be very easily updated.
