<?php
session_start();
require '../config.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["status" => "unauthorized"]);
    exit;
}

$user_id = $_SESSION['user_id'];

$stmt = $pdo->prepare("SELECT SUM(duration) AS total_seconds FROM activities WHERE user_id = ?");
$stmt->execute([$user_id]);
$data = $stmt->fetch();
$total = (int) $data['total_seconds'];

function berechneLevel($sekunden) {
    $level = 0;
    $erforderlich = 0;
    while (true) {
        $level++;
        $erforderlich += $level * 3600;
        if ($sekunden < $erforderlich) {
            return $level;
        }
    }
}

$level = berechneLevel($total);

echo json_encode([
    "status" => "success",
    "total_seconds" => $total,
    "level" => $level
]);
?>