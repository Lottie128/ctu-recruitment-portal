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

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit();
}

// Extract application data
$fullName = $input['fullName'] ?? '';
$email = $input['email'] ?? '';
$mobile = $input['mobile'] ?? '';
$whatsapp = $input['whatsapp'] ?? '';
$dob = $input['dob'] ?? '';
$gender = $input['gender'] ?? '';
$nationality = $input['nationality'] ?? '';
$passportNo = $input['passportNo'] ?? '';
$qualificationLevel = $input['qualificationLevel'] ?? '';
$yearOfCompletion = $input['yearOfCompletion'] ?? '';
$category = $input['category'] ?? '';
$programme = $input['programme'] ?? '';
$welcomeTour = $input['welcomeTour'] ?? '';
$accommodation = $input['accommodation'] ?? '';
$institution = $input['institution'] ?? 'CT University';

if (empty($fullName) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and email required']);
    exit();
}

// Generate application ID
$applicationId = 'CTU-' . time();

// Email to admin (applications@zeroaitech.tech)
$adminEmail = 'applications@zeroaitech.tech';
$adminSubject = "New Application: {$fullName} - {$applicationId}";
$adminMessage = "
========================================
NEW APPLICATION RECEIVED
========================================

Application ID: {$applicationId}
Date & Time: " . date('Y-m-d H:i:s') . "

--- PERSONAL DETAILS ---
Full Name: {$fullName}
Date of Birth: {$dob}
Gender: {$gender}
Nationality: {$nationality}
Passport Number: {$passportNo}

--- CONTACT INFORMATION ---
Email: {$email}
Mobile: {$mobile}
WhatsApp: {$whatsapp}

--- EDUCATIONAL BACKGROUND ---
Qualification Level: {$qualificationLevel}
Year of Completion: {$yearOfCompletion}

--- PROGRAMME SELECTION ---
Institution: {$institution}
Category: {$category}
Programme: {$programme}

--- PREFERENCES ---
Welcome Tour: {$welcomeTour}
Accommodation: {$accommodation}

========================================
Next Steps:
1. Generate offer letter
2. Send to applicant within 30 minutes
3. Follow up on WhatsApp: {$whatsapp}
========================================

---
CT University Recruitment Portal
Powered by ZeroAI Technologies
";

$adminHeaders = "From: CT University Portal <noreply@ctuniversity.zeroaitech.tech>\r\n";
$adminHeaders .= "Reply-To: {$email}\r\n";
$adminHeaders .= "X-Mailer: PHP/" . phpversion();

// Email to applicant (confirmation)
$applicantSubject = "Application Received - {$applicationId}";
$applicantMessage = "
Dear {$fullName},

Thank you for applying to CT University through ZeroAI Technologies!

Your application has been successfully received.

APPLICATION DETAILS:
====================
Application ID: {$applicationId}
Programme: {$programme}
Institution: {$institution}
Welcome Tour: {$welcomeTour}

NEXT STEPS:
===========
1. ✅ Application Received (COMPLETED)
2. ⏳ Offer Letter Generation (Within 30 minutes)
3. 📧 You will receive your offer letter via email
4. 💰 Consultation Fee Payment ($20 USD)
5. 📝 Registration Fee Payment ($500 USD)
6. 🛂 Visa Application Support
7. ✈️ Flight Booking & Airport Pickup
8. 🎉 Welcome to India!

We will send your offer letter to this email address within the next 30 minutes.

If you have any questions, please contact us:
📞 WhatsApp: +260 97 7712411
📧 Email: lottiemukuka@zeroaitech.tech
🌐 Website: https://ctuniversity.zeroaitech.tech

Welcome to the CT University family!

Best regards,
Lottie Mukuka
Founder & CEO
ZeroAI Technologies

---
This is an automated confirmation email.
Please do not reply to this email.
";

$applicantHeaders = "From: ZeroAI Technologies <noreply@ctuniversity.zeroaitech.tech>\r\n";
$applicantHeaders .= "Reply-To: lottiemukuka@zeroaitech.tech\r\n";
$applicantHeaders .= "X-Mailer: PHP/" . phpversion();

// Send both emails
$adminSent = mail($adminEmail, $adminSubject, $adminMessage, $adminHeaders);
$applicantSent = mail($email, $applicantSubject, $applicantMessage, $applicantHeaders);

if ($adminSent && $applicantSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully',
        'applicationId' => $applicationId
    ]);
} else {
    // Log which email failed
    $failedEmails = [];
    if (!$adminSent) $failedEmails[] = 'admin';
    if (!$applicantSent) $failedEmails[] = 'applicant';
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send emails: ' . implode(', ', $failedEmails)
    ]);
}
?>