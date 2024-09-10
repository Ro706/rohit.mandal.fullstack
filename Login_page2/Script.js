const username = document.getElementById("username"),
      password = document.getElementById("password"),
      submit = document.getElementById("submit"),
      message = document.getElementById("message");

var user = sessionStorage.getItem("username");
var passwd = sessionStorage.getItem("password");
var link = "./home.html";
var flag = false;

function usera(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (user === username.value && passwd === password.value) {
        message.innerHTML = "<h1>Login successful</h1>";
        flag = true;
    } else {
        message.innerHTML = "<h1>Login failed</h1>";
    }
    if (flag === true) {
        window.location.assign(link);
    }
}

submit.addEventListener("click", usera);