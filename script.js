
function alertSay(){
    alert('Selamat Menjelajah Ocean One');
}

function formResponse(){
var name  = document.getElementById('name').value;
document.getElementById("nameResponse").innerHTML = name;

var email  = document.getElementById('email').value;
document.getElementById("emailResponse").innerHTML = email;

var message  = document.getElementById('message').value;
document.getElementById("messageResponse").innerHTML = message;

var div = document.getElementById("response");
if (div.style.display === "none") {
    div.style.display = "block";
} else {
    div.style.display = "none";
}

}
