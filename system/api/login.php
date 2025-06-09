<?php
session_start();
require_once "../config.php"; // Pfad ggf. anpassen

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

try {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id']; // ✅ Session speichern
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Login fehlgeschlagen."]);
    }
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Serverfehler"]);
}
