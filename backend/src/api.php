<?php
  require_once(__DIR__ . '/database.php');

  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  $greetings = list_greetings();

  echo json_encode($greetings);
?>
