<?php
session_start();
require '../config.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["status" => "unauthorized"]);
    exit;
}

$user_id = $_SESSION['user_id'];

try {
    // User aus der Datenbank löschen
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$user_id]);

    // Session zerstören
    session_destroy();

    echo json_encode(["status" => "success", "message" => "Benutzer gelöscht"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Fehler beim Löschen"]);
}
?>
