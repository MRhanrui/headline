<?php

if(isset($_GET['c'])){
    $class_name = $_GET['c'];
}else{
    $class_name = 'news';
}

include '../controller/admin/' .  $class_name . '.php';

if(isset($_GET['m'])){
    $method_name = $_GET['m'];
}else{
    $method_name = 'view';
}
$o = new $class_name();
$o->$method_name();