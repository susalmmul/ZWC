<?php

    include 'db_conn.php';

    $page_type = $_GET['page_type'];
    $cate = $_GET['__cate'];

    if($page_type == "shop") {
        $sql="select cate, item_no,src,brand,title,o_price, designer from product_su where cate=$cate"; 
    }
    else if($page_type == "deal") {
        $item_no = $_GET['item_no'];

        $sql="select cate, item_no,src,brand,title,o_price, designer from product_su where cate=$cate and item_no=$item_no"; 
    }

    // *로 고치기

    $result = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_array($result)) {
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
    }

    mysqli_close($conn);
    echo json_encode($data);
?>

