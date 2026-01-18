<?php
// Enable CORS for your frontend domain
header('Access-Control-Allow-Origin: *'); // Change * to your domain in production
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON data from request
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit();
}

// Email configuration
$to = 'applications@zeroaitech.tech';
$subject = 'New Student Application - ' . ($data['fullName'] ?? 'Unknown Applicant');

// Build email content
$message = "<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .section { background: #f9fafb; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #3b82f6; }
        .section h2 { color: #1e40af; margin-top: 0; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; }
        .field { margin: 12px 0; }
        .field label { font-weight: bold; color: #1f2937; display: inline-block; width: 200px; }
        .field value { color: #4b5563; }
        .highlight { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 5px; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1 style='margin:0; font-size: 28px;'>🎓 New Student Application</h1>
            <p style='margin: 10px 0 0 0; font-size: 16px;'>CT University Recruitment Portal</p>
        </div>
        
        <div class='highlight'>
            <strong>📧 Application ID:</strong> APP-" . date('YmdHis') . "<br>
            <strong>📅 Submitted:</strong> " . date('F j, Y g:i A') . " IST
        </div>

        <div class='section'>
            <h2>👤 Personal Details</h2>
            <div class='field'><label>Full Name:</label> <value>" . htmlspecialchars($data['fullName'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Date of Birth:</label> <value>" . htmlspecialchars($data['dob'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Gender:</label> <value>" . htmlspecialchars($data['gender'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Nationality:</label> <value>" . htmlspecialchars($data['nationality'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Passport Number:</label> <value>" . htmlspecialchars($data['passportNo'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Passport Expiry:</label> <value>" . htmlspecialchars($data['passportExpiry'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Place of Birth:</label> <value>" . htmlspecialchars($data['placeOfBirth'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Marital Status:</label> <value>" . htmlspecialchars($data['maritalStatus'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Religion:</label> <value>" . htmlspecialchars($data['religion'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Blood Group:</label> <value>" . htmlspecialchars($data['bloodGroup'] ?? 'N/A') . "</value></div>
        </div>

        <div class='section'>
            <h2>👨‍👩‍👧‍👦 Family Details</h2>
            <div class='field'><label>Father's Name:</label> <value>" . htmlspecialchars($data['fatherName'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Father's Occupation:</label> <value>" . htmlspecialchars($data['fatherOccupation'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Mother's Name:</label> <value>" . htmlspecialchars($data['motherName'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Mother's Occupation:</label> <value>" . htmlspecialchars($data['motherOccupation'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Guardian Name:</label> <value>" . htmlspecialchars($data['guardianName'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Guardian Relation:</label> <value>" . htmlspecialchars($data['guardianRelation'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Annual Family Income:</label> <value>$" . htmlspecialchars($data['familyIncome'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Emergency Contact:</label> <value>" . htmlspecialchars($data['emergencyPhone'] ?? 'N/A') . "</value></div>
        </div>

        <div class='section'>
            <h2>📍 Contact Information</h2>
            <div class='field'><label>Permanent Address:</label> <value>" . htmlspecialchars($data['permanentAddress'] ?? 'N/A') . "</value></div>
            <div class='field'><label>City:</label> <value>" . htmlspecialchars($data['city'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Province/State:</label> <value>" . htmlspecialchars($data['state'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Postal Code:</label> <value>" . htmlspecialchars($data['postalCode'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Country:</label> <value>" . htmlspecialchars($data['country'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Mobile Number:</label> <value>" . htmlspecialchars($data['mobile'] ?? 'N/A') . "</value></div>
            <div class='field'><label>WhatsApp Number:</label> <value>" . htmlspecialchars($data['whatsapp'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Email Address:</label> <value>" . htmlspecialchars($data['email'] ?? 'N/A') . "</value></div>
        </div>

        <div class='section'>
            <h2>🎓 Educational Background</h2>
            <div class='field'><label>Qualification Level:</label> <value>" . htmlspecialchars($data['qualificationLevel'] ?? 'N/A') . "</value></div>
            <div class='field'><label>School/Institution:</label> <value>" . htmlspecialchars($data['schoolName'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Year of Completion:</label> <value>" . htmlspecialchars($data['yearOfCompletion'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Percentage/Grade:</label> <value>" . htmlspecialchars($data['percentage'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Subjects Studied:</label> <value>" . htmlspecialchars($data['subjectsStudied'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Studied in India Before:</label> <value>" . htmlspecialchars($data['studiedInIndia'] ?? 'No') . "</value></div>
        </div>

        <div class='section'>
            <h2>🏫 Programme Selection</h2>
            <div class='field'><label>Institution:</label> <value>" . htmlspecialchars($data['institution'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Programme Category:</label> <value>" . htmlspecialchars($data['category'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Programme Name:</label> <value>" . htmlspecialchars($data['programme'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Preferred Start Date:</label> <value>" . htmlspecialchars($data['startDate'] ?? 'N/A') . "</value></div>
            <div class='field'><label>Referral Source:</label> <value>" . htmlspecialchars($data['referralSource'] ?? 'N/A') . "</value></div>
        </div>

        <div class='section'>
            <h2>🗺️ Welcome Tour Selection</h2>
            <div class='field'><label>Selected Tour:</label> <value>" . htmlspecialchars($data['welcomeTour'] ?? 'N/A') . "</value></div>
        </div>

        <div class='section'>
            <h2>🏠 Accommodation Preference</h2>
            <div class='field'><label>Selected Option:</label> <value>" . htmlspecialchars($data['accommodation'] ?? 'N/A') . "</value></div>
        </div>

        <div class='footer'>
            <p>This application was submitted through the CT University Recruitment Portal<br>
            Powered by ZeroAI Technologies | <a href='https://zeroaitech.tech'>zeroaitech.tech</a></p>
        </div>
    </div>
</body>
</html>";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: CT University Portal <noreply@zeroaitech.tech>" . "\r\n";
$headers .= "Reply-To: " . ($data['email'] ?? 'noreply@zeroaitech.tech') . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail($to, $subject, $message, $headers);

// Also send confirmation email to applicant
if ($mailSent && isset($data['email'])) {
    $applicantSubject = "Application Received - CT University";
    $applicantMessage = "<!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; border-radius: 5px; }
            .button { display: inline-block; background: #3b82f6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1 style='margin:0;'>✅ Application Received!</h1>
            </div>
            <div class='content'>
                <p>Dear <strong>" . htmlspecialchars($data['fullName']) . "</strong>,</p>
                
                <p>Thank you for submitting your application to CT University through ZeroAI Technologies!</p>
                
                <div class='highlight'>
                    <strong>📧 Application ID:</strong> APP-" . date('YmdHis') . "<br>
                    <strong>📅 Submitted:</strong> " . date('F j, Y g:i A') . " IST
                </div>
                
                <p><strong>Next Steps:</strong></p>
                <ul>
                    <li>✅ You will receive your <strong>offer letter within 30 minutes</strong></li>
                    <li>✅ Acceptance letter will follow within <strong>24 hours after payment</strong></li>
                    <li>✅ Our team will contact you shortly with further instructions</li>
                </ul>
                
                <p><strong>Your Selected Benefits:</strong></p>
                <ul>
                    <li>🎓 50% Tuition Scholarship</li>
                    <li>✈️ Free Airport Pickup</li>
                    <li>🗺️ Free 3-Day Welcome Tour</li>
                    <li>🏠 Accommodation Assistance</li>
                </ul>
                
                <p>If you have any questions, please contact us at:</p>
                <p>
                    📧 applications@zeroaitech.tech<br>
                    📱 +91-90413-30007 | +91-99145-04901
                </p>
                
                <p>We're excited to have you join the CT University family!</p>
                
                <p>Best regards,<br>
                <strong>ZeroAI Technologies Team</strong><br>
                Study Abroad Consultants</p>
            </div>
        </div>
    </body>
    </html>";
    
    $applicantHeaders = "MIME-Version: 1.0" . "\r\n";
    $applicantHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $applicantHeaders .= "From: ZeroAI Technologies <applications@zeroaitech.tech>" . "\r\n";
    
    mail($data['email'], $applicantSubject, $applicantMessage, $applicantHeaders);
}

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully! Check your email for confirmation.',
        'applicationId' => 'APP-' . date('YmdHis')
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send application. Please try again or contact us directly.'
    ]);
}
?>