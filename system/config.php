<?php
// config.php
$host = 'un0kfk.myd.infomaniak.com';
$db   = 'un0kfk_im4cv';  // Change to your DB name
$user = 'un0kfk_im4';   // Change to your DB user
$pass = 'IM4_Passwort!';       // Change to your DB pass if needed

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass);
    // Optional: Set error mode
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    echo "Database connection error: " . $e->getMessage();
    exit;
}
?>