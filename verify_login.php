<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

// 模拟验证用户名和密码
if($username === "zz54188" && $password === "zz666") {
  $_SESSION['username'] = $username;
  $_SESSION['password'] = $password;
  echo "success";
} else {
  echo "error";
}
?>
