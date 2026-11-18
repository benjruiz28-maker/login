<?php

mysqli_report(MYSQLI_REPORT_OFF);

include_once "../core/connections.php";

session_start();

$response = array();

if(!isset($_SESSION["id"])) {
   $response["success"] = 0;
   $response["message"] = "Not logged in";
   echo json_encode($response);
   exit();
}

$fn = mysqli_real_escape_string($conn, $_POST["f_name"]);
$ln = mysqli_real_escape_string($conn, $_POST["l_name"]);
$id_user = (int) $_SESSION["id"];

$sql = "UPDATE user SET
 first_name = '$fn',
 last_name = '$ln'
 WHERE user_id = $id_user ";

if(mysqli_query($conn, $sql)) {
   $_SESSION["f_name"] = $_POST["f_name"];
   $_SESSION["l_name"] = $_POST["l_name"];
   $_SESSION["first_name"] = $_POST["f_name"];
   $_SESSION["last_name"] = $_POST["l_name"];
   $response["success"] = 1;
}
else {
   $response["success"] = 0;
   $response["message"] = mysqli_error($conn);
}

echo json_encode($response);

?>