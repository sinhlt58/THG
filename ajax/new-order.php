<?php

include('../config/connection.php');

//Them order vao co so du lieu.
$valueTable = $_POST['valueTable'];
$totalPrice = $_POST['totalPrice'];
$restaurantId = $_POST['restaurantId'];
$listItemId = $_POST['listItemId'];
$listItemAmount = $_POST['listItemAmount'];

//insert vao bang orders.
$query1 = "INSERT INTO orders (restaurant_id, table_order, total_price) VALUES ($restaurantId, $valueTable, $totalPrice)";
$result1 = mysqli_query($dbc, $query1);

$lastOrderId = mysqli_insert_id($dbc);

//insert vao bang food_orders.
foreach($listItemId as $key => $itemId){
    $query2 = "INSERT INTO food_orders (food_id, order_id, amount) VALUES ($itemId, $lastOrderId, $listItemAmount[$key])";
    $result2 = mysqli_query($dbc, $query2);

}


?>