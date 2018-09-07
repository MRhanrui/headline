<?php
include '../core/db.php';

class manage extends db
{
    const PER_PAGE = 10;

    public function news()
    {
        //接收页数
        if (isset($_GET['page'])) {
        $page = $_GET['page'];
    } else {
        $page = 1;
    }
//总条数
        $num = $this->pdo
            ->query('select count(*) as total from news ')
            ->fetch()['total'];
//总页数
        $page_total = ceil($num / $this::PER_PAGE);

        $rows = $this->pdo
            ->query(
                'select * from news  limit '.$this::PER_PAGE.' offset ' . ($page - 1) * $this::PER_PAGE
            )
            ->fetchAll();
        include '../view/admin/manage.html';
    }
}