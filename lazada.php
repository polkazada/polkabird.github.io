<?php
$content = file_get_contents('https://www.lazada.com.ph');
$content = str_replace('</title>','</title><base href="https://www.lazada.com.ph" />', $content);
$content = str_replace('</head>','<link rel="stylesheet" href="http://polkazada.github.io/lazada.css" /></head>', $content);
echo $content; 
?>
