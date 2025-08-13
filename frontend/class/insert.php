<?php

include_once("config/config.php");

class insert extends config{
        
    public $title;
    public $category;
    public $image;

public function insertPost(){
   
    try {
        $pdo = $this->connect();
        $stmt = $pdo->prepare("INSERT INTO `post` (`title`, `category`, `image`) VALUES (:title, :category, :image)");
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':category', $this->category);
        $stmt->bindParam(':image', $this->image);
        $stmt->execute();
        
    } catch (PDOException $e) {
        die("Insert Post Failed." .$e->getMessage());
    }
}

}