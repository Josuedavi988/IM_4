<?php
session_start();
require '../config.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["status" => "unauthorized"]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user_id = $_SESSION['user_id'];
    $sport = $_POST['sport'] ?? '';
    $duration = (int) ($_POST['duration'] ?? 0);
    $date = $_POST['date'] ?? date("Y-m-d");

    $stmt = $pdo->prepare("INSERT INTO activities (user_id, sport, duration, date) VALUES (?, ?, ?, ?)");
    $success = $stmt->execute([$user_id, $sport, $duration, $date]);

    if ($success) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Speichern fehlgeschlagen."]);
    }
}
?>