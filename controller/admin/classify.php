<?php
include '../core/db.php';

class classify extends db{
    public  function main(){
        $stmt = $this->pdo->query('select * from category');
        $rows = $stmt->fetchAll();
        include '../view/admin/classify.html';
    }
}