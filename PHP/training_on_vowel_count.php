<?php

function getCount($str) {
  $count = 0;
  $vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  
  for ($i = 0; $i < strlen($str); $i++){
    $char = $str[$i];
    
    
      if (in_array($char, $vowels)){
        $count++;
      }
  }
  
  return $count;
}
