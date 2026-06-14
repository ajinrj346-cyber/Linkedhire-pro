function registerUser(){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

if(!name || !email || !password){

alert("Please fill all fields");

return;
}

const user = {
name,
email,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Registration Successful");

window.location.href =
"login.html";
}

function loginUser(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const savedUser =

JSON.parse(
localStorage.getItem("user")
);

if(
savedUser &&
savedUser.email === email &&
savedUser.password === password
){

localStorage.setItem(
"isLoggedIn",
"true"
);

alert("Login Successful");

window.location.href =
"dashboard.html";
}
else{

alert(
"Invalid Email or Password"
);

}

}

function logoutUser(){

localStorage.removeItem(
"isLoggedIn"
);

window.location.href =
"login.html";

}