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

// Get form data from $_POST
$data = $_POST;

if (empty($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit();
}

// Email configuration
$adminEmail = 'applications@zeroaitech.tech';
$applicantEmail = $data['email'] ?? '';
$applicantName = $data['fullName'] ?? 'Applicant';

// Handle file attachments
$attachments = [];

// Process passport photo
if (isset($_FILES['passportPhoto']) && $_FILES['passportPhoto']['error'] === UPLOAD_ERR_OK) {
    $attachments[] = [
        'path' => $_FILES['passportPhoto']['tmp_name'],
        'name' => $_FILES['passportPhoto']['name'],
        'type' => $_FILES['passportPhoto']['type']
    ];
}

// Process certificates (multiple files)
if (isset($_FILES['certificates'])) {
    $certFiles = $_FILES['certificates'];
    if (is_array($certFiles['tmp_name'])) {
        for ($i = 0; $i < count($certFiles['tmp_name']); $i++) {
            if ($certFiles['error'][$i] === UPLOAD_ERR_OK) {
                $attachments[] = [
                    'path' => $certFiles['tmp_name'][$i],
                    'name' => $certFiles['name'][$i],
                    'type' => $certFiles['type'][$i]
                ];
            }
        }
    } elseif ($certFiles['error'] === UPLOAD_ERR_OK) {
        $attachments[] = [
            'path' => $certFiles['tmp_name'],
            'name' => $certFiles['name'],
            'type' => $certFiles['type']
        ];
    }
}

// Create beautifully formatted email for admin
$adminSubject = '🎓 New CT University Application - ' . $applicantName;
$adminMessage = "
<html>
<head>
<style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-center; }
    .content { padding: 30px; background: #f9fafb; }
    .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .section-title { color: #1e3a8a; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
    .field { margin: 10px 0; }
    .field-label { font-weight: bold; color: #4b5563; display: inline-block; min-width: 180px; }
    .field-value { color: #111827; }
    .highlight { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
    .attachments { background: #dbeafe; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
</style>
</head>
<body>
<div class='header'>
    <h1>🎓 New Student Application</h1>
    <p>CT University Recruitment Portal</p>
</div>
<div class='content'>
    <div class='highlight'>
        <strong>⚡ Action Required:</strong> Please process this application and send offer letter within 30 minutes.
    </div>
    
    <div class='attachments'>
        <strong>📎 Attachments:</strong> " . count($attachments) . " file(s) attached to this email
        <ul>
";

foreach ($attachments as $attachment) {
    $adminMessage .= "            <li>" . htmlspecialchars($attachment['name']) . "</li>\n";
}

$adminMessage .= "
        </ul>
    </div>
    
    <div class='section'>
        <div class='section-title'>👤 Personal Information</div>
        <div class='field'><span class='field-label'>Full Name:</span> <span class='field-value'>{$data['fullName']}</span></div>
        <div class='field'><span class='field-label'>Date of Birth:</span> <span class='field-value'>{$data['dob']}</span></div>
        <div class='field'><span class='field-label'>Gender:</span> <span class='field-value'>{$data['gender']}</span></div>
        <div class='field'><span class='field-label'>Nationality:</span> <span class='field-value'>{$data['nationality']}</span></div>
        <div class='field'><span class='field-label'>Passport Number:</span> <span class='field-value'>{$data['passportNo']}</span></div>
    </div>
    
    <div class='section'>
        <div class='section-title'>📞 Contact Information</div>
        <div class='field'><span class='field-label'>Email:</span> <span class='field-value'>{$data['email']}</span></div>
        <div class='field'><span class='field-label'>Mobile:</span> <span class='field-value'>{$data['mobile']}</span></div>
        <div class='field'><span class='field-label'>WhatsApp:</span> <span class='field-value'>{$data['whatsapp']}</span></div>
    </div>
    
    <div class='section'>
        <div class='section-title'>🎓 Educational Background</div>
        <div class='field'><span class='field-label'>Qualification Level:</span> <span class='field-value'>{$data['qualificationLevel']}</span></div>
        <div class='field'><span class='field-label'>Year of Completion:</span> <span class='field-value'>{$data['yearOfCompletion']}</span></div>
    </div>
    
    <div class='section'>
        <div class='section-title'>🏫 Programme Selection</div>
        <div class='field'><span class='field-label'>Category:</span> <span class='field-value'>{$data['category']}</span></div>
        <div class='field'><span class='field-label'>Programme:</span> <span class='field-value'>{$data['programme']}</span></div>
    </div>
    
    <div class='section'>
        <div class='section-title'>🏝️ Welcome Package</div>
        <div class='field'><span class='field-label'>Selected Tour:</span> <span class='field-value'>{$data['welcomeTour']}</span></div>
        <div class='field'><span class='field-label'>Accommodation:</span> <span class='field-value'>{$data['accommodation']}</span></div>
    </div>
</div>
<div class='footer'>
    <p>This application was submitted via CT University Recruitment Portal</p>
    <p>Powered by ZeroAI Technologies</p>
</div>
</body>
</html>
";

// Create beautiful confirmation email for applicant
$applicantSubject = '🎉 Application Received - CT University';
$applicantMessage = "
<html>
<head>
<style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-center; }
    .content { padding: 30px; background: #f9fafb; }
    .success-box { background: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; }
    .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .next-steps { background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .step { margin: 15px 0; padding-left: 30px; position: relative; }
    .step:before { content: '✓'; position: absolute; left: 0; color: #10b981; font-weight: bold; font-size: 20px; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
    .btn { display: inline-block; background: #f59e0b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; }
</style>
</head>
<body>
<div class='header'>
    <h1>🎓 Welcome to CT University!</h1>
    <p>Your Application Has Been Received</p>
</div>
<div class='content'>
    <div class='success-box'>
        <h2 style='margin-top:0; color: #10b981;'>✅ Application Successfully Submitted!</h2>
        <p><strong>Dear {$applicantName},</strong></p>
        <p>Thank you for applying to CT University through ZeroAI Technologies. We have successfully received your application with all attachments.</p>
    </div>
    
    <div class='info-box'>
        <h3 style='color: #1e3a8a;'>📄 Application Summary</h3>
        <p><strong>Programme:</strong> {$data['programme']}</p>
        <p><strong>Welcome Tour:</strong> {$data['welcomeTour']}</p>
        <p><strong>Accommodation:</strong> {$data['accommodation']}</p>
        <p><strong>Documents Received:</strong> " . count($attachments) . " file(s)</p>
    </div>
    
    <div class='next-steps'>
        <h3 style='color: #1e3a8a;'>🚀 What Happens Next?</h3>
        <div class='step'>You will receive your <strong>Offer Letter within 30 minutes</strong> via email</div>
        <div class='step'>Our team will contact you on WhatsApp (<strong>{$data['whatsapp']}</strong>) to guide you through the next steps</div>
        <div class='step'>We'll assist you with visa application, flight booking, and accommodation setup</div>
        <div class='step'>Get ready for your <strong>FREE 3-day {$data['welcomeTour']}</strong>!</div>
    </div>
    
    <div style='text-align: center; margin: 30px 0;'>
        <p><strong>📞 Need Immediate Assistance?</strong></p>
        <p>WhatsApp: +260 97 7712411</p>
        <p>Email: lottiemukuka@zeroaitech.tech</p>
        <a href='https://wa.me/260977712411' class='btn'>Contact Us on WhatsApp</a>
    </div>
</div>
<div class='footer'>
    <p><strong>ZeroAI Technologies</strong></p>
    <p>Your trusted partner for studying in India</p>
    <p>CT University Recruitment Portal</p>
</div>
</body>
</html>
";

// Function to send email with attachments
function sendEmailWithAttachments($to, $subject, $htmlMessage, $attachments = []) {
    $separator = md5(time());
    
    $headers = "From: CT University Portal <noreply@zeroaitech.tech>\r\n";
    $headers .= "Reply-To: lottiemukuka@zeroaitech.tech\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"\r\n";
    
    $body = "--" . $separator . "\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $htmlMessage . "\r\n";
    
    // Add attachments
    foreach ($attachments as $attachment) {
        if (file_exists($attachment['path'])) {
            $file_content = chunk_split(base64_encode(file_get_contents($attachment['path'])));
            
            $body .= "--" . $separator . "\r\n";
            $body .= "Content-Type: " . $attachment['type'] . "; name=\"" . $attachment['name'] . "\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n";
            $body .= "Content-Disposition: attachment; filename=\"" . $attachment['name'] . "\"\r\n\r\n";
            $body .= $file_content . "\r\n";
        }
    }
    
    $body .= "--" . $separator . "--";
    
    return mail($to, $subject, $body, $headers);
}

// Send email to admin with attachments
$adminSent = sendEmailWithAttachments($adminEmail, $adminSubject, $adminMessage, $attachments);

// Send confirmation email to applicant (no attachments)
$applicantSent = sendEmailWithAttachments($applicantEmail, $applicantSubject, $applicantMessage, []);

if ($adminSent && $applicantSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully! Check your email for confirmation.'
    ]);
} else {
    // Log error but still return success to user
    error_log('Failed to send application emails');
    echo json_encode([
        'success' => true,
        'message' => 'Application received! You will be contacted shortly.'
    ]);
}
?>