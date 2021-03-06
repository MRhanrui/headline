<?php
include '../core/db.php';

class page extends db
{
    const PER_PAGE = 8;
//    首页
    public function index()
    {

        header("Content-Type: text/html; charset=UTF-8");
        if (isset($_GET['cid'])) {
            $cid = $_GET['cid'];
        } else {
            $cid = 1;
        }
        $category = $this->pdo
            ->query("select * from category where defult = '1' ")
            ->fetchAll();

        $news = $this->pdo
            ->query(
                'select * from news where cid= ' . $cid .' limit '.$this::PER_PAGE
            )
            ->fetchAll();

        include '../view/index/index.html';
    }

//    分类页
    public function channels()
    {
        $remove = $this->pdo
            ->query("select * from category where defult = '1' ")
            ->fetchAll();
        $add = $this->pdo
            ->query("select * from category where defult = '0' ")
            ->fetchAll();
        include '../view/index/channels.html';
    }

//    分类页ajax
    public function channelsList(){
        $stmt = $this->pdo->prepare('update category set defult = ? where id = ?');
        $stmt->bindValue(1, $_GET['v']);
        $stmt->bindValue(2, $_GET['id']);
        echo $stmt->execute();
    }

//搜索页
    public function search()
    {
        if(isset($_POST['s'])){
            $keyword = $_POST['s'];
            $result = $this->pdo
                ->query('select * from news where title like "%'.$keyword.'%" limit '.$this::PER_PAGE)
                ->fetchAll();
        }else{
            $result = [];
            $keyword = '';
        }

        include '../view/index/search.html';
    }
//搜索页ajax
    public function searchList(){
        header("Content-Type: text/html; charset=UTF-8");

        if(isset($_POST['key'])){
            $keyword = $_POST['key'];
        }else{
            $keyword = '';
        }
        if(isset($_GET['key'])){
            $key= $_GET['key'];
        }else{
            $key = '';
        }
        if(isset($_GET['page'])){
            $page = $_GET['page'];
        }else{
            $page = 1;
        }
        $results = $this->pdo
            ->query('select * from news where title like "%'.$key.'%" limit '.$this::PER_PAGE.' offset '.($page-1)*$this::PER_PAGE)
            ->fetchAll();
        echo json_encode($results);
    }

//    首页刷新ajax
    public function indexList(){

        //接收页数
        if (isset($_GET['cid'])) {
            $cid = $_GET['cid'];
        } else {
            $cid = 1;
        }
        if (isset($_GET['d'])) {
            $page = $_GET['d'];
        } else {
            $page = 1;
        }
        $results = $this->pdo
            ->query('select * from news where cid=  ' . $cid . ' limit '.$this::PER_PAGE.' offset '.($page)*$this::PER_PAGE)
            ->fetchAll();
        echo json_encode($results);
    }
}