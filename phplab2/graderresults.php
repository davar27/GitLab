<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Grades for Courses</title>
<link href="css/grades.css" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="normaltext">
<div class="bg-gray-500 container mx-auto grid text-center grid-cols-10 gap-4 mt-10">
<div class="col-span-10 mt-5 mb-3 text-[34px]">
    <h2>The following are grades are in the System:<br />
    </h2>
</div>
    <div class="col-span-10 mt-5 mb-5 bg-white text-center text-black p-4 mx-auto">
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "itgrades";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT course, grade FROM inte;";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
echo $row["course"]. " --- ". $row["grade"]. "<br>";
}
} else {
echo "There are no grades currently in the system";
}
$conn->close();
?>
</div>
</div>

</body>
</html>