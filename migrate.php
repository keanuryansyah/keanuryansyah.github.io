<?php 

if($_SERVER["REQUEST_METHOD"] === "POST") {

    $data = json_decode(file_get_contents("php://input"), true);

    $username = $data["username"];
    $password = $data["password"];

    if($username == "keanu" && $password == "keanu123") {
        $resp = ["bool" => true];
    } else {
        $resp = ["bool" => false];
    }

}

echo(json_encode($resp));

?>