<?php
include '../core/db.php';

class page extends db
{
    const PER_PAGE = 4;
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
                'select * from news where cid= ' . $cid
            )
            ->fetchAll();
        include '../view/index/index.html';
    }

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

    public function search()
    {
//        if(isset($_GET['s'])){
//            $keyword = $_GET['s'];
//        }else{
//            $keyword = ' ';
//        }
//        if(isset($_GET['page'])){
//            $page = $_GET['page'];
//        }else{
//            $page = 1;
//        }
//        $results = $this->pdo
//            ->query('select * from news where title like "%'.$keyword.'%" limit '.$this::PER_PAGE.' offset '.($page-1)*$this::PER_PAGE)
//            ->fetchAll();
        include '../view/index/search.html';
    }

    public function searchList(){
        header("Content-Type: text/html; charset=UTF-8");

        if(isset($_GET['s'])){
            $keyword = $_GET['s'];
        }else{
            $keyword = '';
        }
        if(isset($_GET['page'])){
            $page = $_GET['page'];
        }else{
            $page = 1;
        }
        $results = $this->pdo
            ->query('select * from news where title like "%'.$keyword.'%" limit '.$this::PER_PAGE.' offset '.($page-1)*$this::PER_PAGE)
            ->fetchAll();
        echo json_encode($results,true);
    }
}