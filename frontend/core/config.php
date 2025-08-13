<?php


class config {

    public $host = "localhost";
    public $user = "root";
    public $password = "";
    public $dbname = "staytuned";
    public $pdo = null;

    public function connect(){

        
        try {
            $pdo = new PDO("mysql:host=$this->host; dbname=$this->dbname", $this->user, $this->password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

         //   echo "connected successfully.";
            return $this->pdo;

        } catch (PDOException $e) {
            die("Database Failed." .$e->getMessage());
        }
    }

}
// $con = new config();
// $con->connect();