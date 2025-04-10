<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IT Grades</title>
<link href="css/grades.css" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="normaltext">

<div class="bg-gray-500 container mx-auto grid text-center justify-content grid-cols-10 w-fit p-6 gap-4 mt-10">
    <div class="col-span-10 mb-5">
        <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "";
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }   ?>
    </div>
    
    
    <div class="col-span-10 mb-5">
        <?php
            $sql = "DROP Database if EXISTS itgrades;";
            if ($conn->query($sql) === TRUE) {
            echo "Step 1: Database Deleted successfully <br/>";
            } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            }
            ?>
    </div>
    <div class="col-span-10 mb-5">
    <?php
            $sql = "Create Database itgrades;";
            if ($conn->query($sql) === TRUE) {
            echo "Step 2: itgrades created successfully <br/>";
            } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            }?>

    </div>

       <div class="col-span-10 mb-5">
           <?php
                $sql = "CREATE TABLE `itgrades`.`inte` (`id` INT NOT NULL AUTO_INCREMENT ,
                `course` VARCHAR(25) NOT NULL , `grade` VARCHAR(3) NOT NULL , PRIMARY KEY (`id`))
                ENGINE = InnoDB;";
                if ($conn->query($sql) === TRUE) {
                echo "Step 3: inte Table created successfully <br/>";
                } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
                }
                $conn->close();
            ?>
       </div>
    </div>


</body>
</html>
