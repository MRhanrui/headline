<?php
include '../core/db.php';
class wechat extends db{
    public function feed(){
        $feed = $this->pdo
            ->query("select * from feed")
            ->fetchAll();
        echo json_encode($feed);
    }
}