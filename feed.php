<?php
//set_time_limit(0);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

function getSSLPage($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSLVERSION,3); 
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

$feeds = [];
if(isset($_GET['twitter'])){
    echo 1;
    //$feeds['twitter'] = getSSLPage('http://rsshub.app/twitter/user/'.$_GET['twitter']);
}

echo json_encode($feeds);
echo 1;