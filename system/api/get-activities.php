<?php
session_start();
require '../config.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["status" => "unauthorized"]);
    exit;
}

$user_id = $_SESSION['user_id'];

$stmt = $pdo->prepare("SELECT id, date, type, duration FROM activities WHERE user_id = ? ORDER BY date DESC");
$stmt->execute([$user_id]);
$activities = $stmt->fetchAll(PDO::FETCH_ASSOC);

$response = [];
foreach ($activities as $activity) {
    $date = $activity['date'];
    if (!isset($response[$date])) {
        $response[$date] = [];
    }
    $response[$date][] = [
        "id" => $activity['id'],
        "type" => $activity['type'],
        "duration" => $activity['duration']
    ];
}

header('Content-Type: application/json');
echo json_encode([
    "status" => "success",
    "data" => $response
]);
?>
