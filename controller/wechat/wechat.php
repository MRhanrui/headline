<?php
include '../core/db.php';
class wechat extends db{
    public function feed(){
        $feed = $this->pdo
            ->query("select * from feed")
            ->fetchAll();
        echo json_encode($feed);
    }
    public function insert(){
        $stmt = $this->pdo->prepare("insert into feed(name,avatar,content,time,address,images)values(?,?,?,?,?,?)");
        $stmt->bindValue(1,$_GET['name']);
        $stmt->bindValue(2,$_GET['avatar']);
        $stmt->bindValue(3, $_GET['content']);
        $stmt->bindValue(4,'8:00');
        $stmt->bindValue(5, '太原.学府街');
        $stmt->bindValue(6, 'http://img06.tooopen.com/images/20180831/tooopen_sl_131625162567285.jpg;http://img06.tooopen.com/images/20180824/tooopen_sl_165037503750657.jpg');
        echo $stmt->execute();
    }
}