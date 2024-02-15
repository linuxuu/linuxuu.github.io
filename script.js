document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "zz54188" && password === "zz666") {
    document.getElementById("postForm").classList.remove("hidden");
    document.getElementById("postList").classList.remove("hidden");
    alert("Welcome, advanced user!");
  } else {
    alert("Welcome, slave! You can only read posts.");
  }
});

document.getElementById("createPostForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var postTitle = document.getElementById("postTitle").value;
  var postContent = document.getElementById("postContent").value;
  
  var listItem = document.createElement("li");
  listItem.innerHTML = "<strong>" + postTitle + "</strong><br>" + postContent;
  document.getElementById("postListItems").appendChild(listItem);
  alert("Post created!");
});
