<?php

include_once("database/config.php");

class read extends config {

public function readPost(){
    
        try {
            $pdo = $this->connect();
            $stmt = $pdo->prepare("SELECT * FROM `post` ORDER BY id DESC");
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            foreach ($result as $data) {
            echo "<div class='card-container'>
                    <div class='card'>
                        <div class='card-profile-name'>
                            <img src='$data[image] style='width: 40px;height: 40px; border-radius: 50%;'/>
                            <h4>Allen Iverson #3</h4>
                            <p>$data[created_at]</p>
                        </div>
                        <div class='card-img'>
                            <img src=$data[image] alt='image error' width='100%'/>
                        </div>
                        <div class='card-content'>
                            <p class='text'>  </p>
                            <span class='see-more-btn'>See More</span>
                           <div class='icon-card'>
                            <ul>
                                <li><i class='fa-regular fa-heart icon'></i>10.5k</li>
                                <li><i class='fa-regular fa-comment icon'></i>500k</li>
                                <li><i class='fa-regular fa-paper-plane icon'></i>10k</li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
                      ";
            }
        } catch (PDOException $e) {
            die("read failed." .$e->getMessage());
        }
    }
}
// $read = new read();
// $read->readPost();