   <?php
     class db
     {
         public $host = "localhost";
         public $account = "root";
         public $pass = "";
         public $db_name = "database";
         public $port = "3306";
         public function Query($sql,$type=1) {

             $db = new mysqli($this->host,$this->account,$this->pass,$this->db_name,$this->port);
             $db->query("SET CHARACTER SET 'utf8'");//读库
             $db->query("SET NAMES 'utf8'");//写库
             $r = $db->query($sql);

             if($type == "1") {
                 $array = array();
                 while($row = $r -> fetch_assoc()) {
                   array_push($array, $row);
                 }
               return $array;
             } else if ($type == "2") {
               return $r->fetch_assoc();
             }
             else {
                 return $r;
             }
         }

     }
   ?>