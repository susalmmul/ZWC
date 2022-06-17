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
                $j = 0; 
                $data[$i][$j] = array(
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
                $j++;
            };
        };
        
        mysqli_close($conn);
        echo json_encode($data);
    };
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>