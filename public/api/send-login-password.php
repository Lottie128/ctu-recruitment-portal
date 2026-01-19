<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email and password required']);
    exit();
}

if ($email !== 'lottiemukuka@zeroaitech.tech') {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Unauthorized email']);
    exit();
}

// Email configuration
$to = $email;
$subject = 'Your Admin Login Password - CT University Portal';
$message = "
Your one-time login password for the CT University Admin Dashboard:

Password: {$password}

This password is valid for this login session only.
Do not share this password with anyone.

If you did not request this password, please ignore this email.

---
CT University Recruitment Portal
Powered by ZeroAI Technologies
";

$headers = "From: CT University Admin <noreply@ctuniversity.zeroaitech.tech>\r\n";
$headers .= "Reply-To: lottiemukuka@zeroaitech.tech\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $message, $headers)) {
    echo json_encode([
        'success' => true,
        'message' => 'Password sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again.'
    ]);
}
?>