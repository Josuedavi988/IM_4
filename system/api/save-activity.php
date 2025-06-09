<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('session.gc_maxlifetime', 3600); // Session haltbar machen

session_start();
require '../config.php';

// Optional: Logge User Session für Debug
// file_put_contents("debug_log.txt", print_r($_SESSION, true), FILE_APPEND);

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(["status" => "unauthorized"]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user_id = $_SESSION['user_id'];
    $sport = trim($_POST['sport'] ?? '');
    $duration = (int) ($_POST['duration'] ?? 0);
    $date = $_POST['date'] ?? date("Y-m-d");

    // Mindestdauer prüfen, damit keine 0-Sekunden Aktivitäten entstehen
    if ($duration < 1 || empty($sport)) {
        echo json_encode(["status" => "error", "message" => "Ungültige Eingabe"]);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO activities (user_id, type, duration, date) VALUES (?, ?, ?, ?)");
    $success = $stmt->execute([$user_id, $sport, $duration, $date]);

    if ($success) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Speichern fehlgeschlagen.",
            "sql_error" => $stmt->errorInfo()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Nur POST erlaubt."]);
}
?>
