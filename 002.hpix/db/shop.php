<?php
    error_reporting(E_ALL);
    ini_set('display_errors', '1');

    include 'db_conn.php';

    $cate = $_GET['__cate'];

    if($cate == 999) {

        $data = array(
            array(),
            array(),
            array(),
            array(),
            array(),
        );
        for ($i=0; $i<5; $i++){
            $sql="select * from product_su where cate=$i";
            
            $result = mysqli_query($conn, $sql);

            while($row = mysqli_fetch_array($result)) { 
                $arr[] = array(
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
            };
            $data[$i] = $arr;
            unset($arr);
        };
        
        mysqli_close($conn);
        echo json_encode($data);
    }
    else {
        $sql="select * from product_su where cate=$cate"; 
        
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
    };

?>
