<?php
  require_once(__DIR__ . '/config/environment.php');

  function database_connect() {
    return mysqli_connect(
      $_ENV["DATABASE_HOST"],
      $_ENV["DATABASE_USER"], 
      $_ENV["DATABASE_PASSWORD"], 
      $_ENV["DATABASE_NAME"], 
      (int)$_ENV["DATABASE_PORT"]
    );
  }

  function list_greetings() {
    $connection = database_connect();
    if (!$connection)
      echo mysqli_error();

    $query = mysqli_query($connection, "SELECT * FROM greetings");

    $greetings = [];
    while($row = mysqli_fetch_assoc($query)) {
      $greetings[] = [
        "id" => $row["greeting_id"],
        "text" => $row["greeting_text"]
      ];
    }
    
    return $greetings;  
  }
?>
