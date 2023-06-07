<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  $greetings = [
    [
      'id' => 1,
      'text' => 'Hello'       
    ],
    [
      'id' => 2,
      'text' => 'Howdy'       
    ],
    [
      'id' => 3,
      'text' => 'Hi'       
    ]
  ];

  echo json_encode($greetings);
?>
