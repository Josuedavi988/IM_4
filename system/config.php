<?php
$host = 'un0kfk.myd.infomaniak.com';
$db   = 'un0kfk_im4cv';
$user = 'un0kfk_im4';
$pass = 'IM4_Passwort!';

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database connection error"]);
    exit;
}
?>
