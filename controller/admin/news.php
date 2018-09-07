<?php
include '../core/db.php';

class news extends db {
    public function delete(){
        $count  =  $this->pdo->exec("delete from  news where id =".$_GET['id']);
        echo $count;
    }
    public function insert(){
        $stmt = $this->pdo->prepare("insert into news(title,cid,dsc,image,url,time,content)values(?,'1',?,?,?,?,?)");
        $stmt->bindValue(1,'');
        $stmt->bindValue(2,'');
        $stmt->bindValue(3, '');
        $stmt->bindValue(4, '');
        $stmt->bindValue(5, '');
        $stmt->bindValue(6, '');
        echo $stmt->execute();
    }
//    改哪个字段
//改哪个id
//改成什么
    public function update(){
        sleep(2);
        $k= $_GET['k'];
        $stmt = $this->pdo->prepare('update news set '.$k.' = ? where id = ?');
        $stmt->bindValue(1, $_GET['v']);
        $stmt->bindValue(2, $_GET['id']);
        echo $stmt->execute();
    }
    public function view(){
        include '../view/admin/index.html';
    }
}