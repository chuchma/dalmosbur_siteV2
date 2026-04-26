<?php
/**
 * Обработчик форм для ООО «Дальмосбур».
 * Разместите этот файл на хостинге с поддержкой PHP.
 *
 * Настройка: укажите email получателя в константе TO_EMAIL ниже.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Метод не разрешён']);
    exit;
}

// Email получателя заявок
define('TO_EMAIL', 'ralina.axatova@mail.ru');

// Обязательные поля
$requiredFields = ['name', 'phone'];
$data = [];

foreach ($_POST as $key => $value) {
    $data[$key] = is_string($value) ? trim($value) : $value;
}

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        $labels = [
            'name' => 'Имя',
            'phone' => 'Телефон',
            'email' => 'Email',
            'message' => 'Сообщение',
        ];
        $label = $labels[$field] ?? $field;
        echo json_encode(['error' => "Поле «{$label}» обязательно для заполнения"]);
        exit;
    }
}

$email = $data['email'] ?? '';
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Некорректный формат email']);
    exit;
}

// Honeypot: если заполнено поле company — считаем ботом
if (!empty($data['company'] ?? '')) {
    http_response_code(200);
    echo json_encode(['ok' => true, 'skipped' => 'honeypot']);
    exit;
}

$name = htmlspecialchars($data['name'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$message = htmlspecialchars($data['message'] ?? '(не указано)');
$service = htmlspecialchars($data['service'] ?? 'Контакты / общий запрос');

// Информация о прикреплённых файлах
$fileInfo = '';
if (!empty($_FILES)) {
    $fileInfo = "\nПрикреплённые файлы:\n";
    foreach ($_FILES as $field => $file) {
        if (!empty($file['name']) && $file['error'] === UPLOAD_ERR_OK) {
            $fileInfo .= "  - " . htmlspecialchars($file['name']) . " (" . round($file['size'] / 1024, 1) . " KB)\n";
        }
    }
}

$subject = "Заявка с сайта ООО «Дальмосбур» от {$name}";

$body = "Новая заявка с контактной формы сайта ООО «Дальмосбур».\n\n";
$body .= "Имя: {$name}\n";
$body .= "Телефон: {$phone}\n";
if ($email) {
    $body .= "Email: {$email}\n";
}
$body .= "\nСообщение:\n{$message}\n";
$body .= $fileInfo;
$body .= "\nИсточник: {$service}\n";

$headers = [
    'From: noreply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost'),
    'Reply-To: ' . ($email ?: 'noreply@localhost'),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(502);
    echo json_encode(['error' => 'Не удалось отправить сообщение. Попробуйте позже.']);
    exit;
}

echo json_encode(['ok' => true]);
