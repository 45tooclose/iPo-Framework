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

### Adding custom packahes

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


### Models // Basic CRUD

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





### Controllers

### Views

### Classes

##€ tmp

## Modules Architecture


## Use ORM Database access as Models


## Basic Database Access


## Using Model ORM System


## Hook System


### Publics methods hooks


### Staitcs methods hooks


## About Themes & Views
