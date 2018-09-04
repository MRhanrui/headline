<?php
include '../core/db.php';

class manage extends db{
public  function news(){
$stmt = $this->pdo->query('select * from news');
$rows = $stmt->fetchAll();
include '../view/admin/manage.html';
}
}