<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/counter/counter.php';

// Increment hit count and record unique IP
makeHit();
addUniqueIP();

// Return counts as JSON
echo json_encode([
    'total_hits' => intval(getHit()),
    'unique_visitors' => intval(getUniqueVisitor())
]);
