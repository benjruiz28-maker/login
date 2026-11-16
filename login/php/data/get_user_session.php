<?php

$response = array();

session_start();
if(isset($_SESSION["id"])) {
    $response["success"] = true;
    $response["id"] = $_SESSION["id"];
    $response["user"] = $_SESSION["user"];
    $response["first_name"] = $_SESSION["first_name"];
    $response["last_name"] = $_SESSION["last_name"];
}else{
    $response["success"] = false;
}

echo json_encode($response);

?>