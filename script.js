document.getElementById("createPostForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var postTitle = document.getElementById("postTitle").value;
  var postContent = document.getElementById("postContent").value;
  
  // AJAX请求可以将帖子发送到服务器保存，这里只是模拟
  console.log("标题: " + postTitle);
  console.log("内容: " + postContent);
  alert("帖子已创建!");
});
