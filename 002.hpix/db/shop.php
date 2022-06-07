<?php

    include 'db_conn.php';

    $cate = $_GET['__cate'];

    if($cate == 999) {
        $sql="select * from product_su";
    }
    else {
        $sql="select * from product_su where cate=$cate"; 
    }

    // $data['sql'] = $sql;
    // $data['cate'] = $cate;

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
