<?php

    include 'db_conn.php';

    $title = $_GET['_title'];

    $sql="select * from product_su where title=\"$title\""; 

    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    // while($row = mysqli_fetch_array($result)) {
        $data[] = array(
            "seqno"=> $row['seqno'],
            "cate"=> $row["cate"],
            "item_no"=> $row["item_no"],
            "src"=> $row["src"],
            "deal_src"=> $row["deal_src"],
            "brand"=> $row["brand"],
            "title"=> $row["title"],
            "o_price"=> $row["o_price"],
            "s_price"=> $row["s_price"],
            "designer"=> $row["designer"],
            "country"=> $row["country"],
            "material"=> $row["material"],
            "sql"=>$sql

        );
    // }