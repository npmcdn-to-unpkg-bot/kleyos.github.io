<?php
$db = mysql_connect("db3.ho.ua","kley","bobrik1483")
	or die("Could not connect: " . mysql_error());

    mysql_select_db("kley",$db) or die ('Can\'t use kley: ' . mysql_error());
    // Если переменная your_name и your_message не пустые
        
        if (empty($_POST['your_name'])!= true and empty($_POST['your_message']) != true){
    
    //Вставляем данные, подставляя их в запрос
        $sql = mysql_query("INSERT INTO `Lazer` (`name`, `message`) 
                        VALUES ('".$_POST['your_name']."','".$_POST['your_message']."')");
    }
    
    if (empty($_POST['email'])!= true ){
        $sql_mail = mysql_query("INSERT INTO `Mail` (`mail`) 
                        VALUES ('".$_POST['email']."')");
    }    
    //Если вставка прошла успешно
    // if ($sql) {
    //     echo "<p>Данные успешно добавлены в таблицу.</p>";
    // } else {
    //     echo "<p>Произошла ошибка.</p>";
    // }
  
?>
