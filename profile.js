function saveProfile(){

const profile = {

fullName:
document.getElementById("fullName").value,

phone:
document.getElementById("phone").value,

skills:
document.getElementById("skills").value,

experience:
document.getElementById("experience").value,

education:
document.getElementById("education").value

};

localStorage.setItem(
"profile",
JSON.stringify(profile)
);

alert("Profile Saved Successfully");

}

function loadProfile(){

const profile =

JSON.parse(
localStorage.getItem("profile")
);

if(!profile) return;

document.getElementById(
"fullName"
).value =
profile.fullName || "";

document.getElementById(
"phone"
).value =
profile.phone || "";

document.getElementById(
"skills"
).value =
profile.skills || "";

document.getElementById(
"experience"
).value =
profile.experience || "";

document.getElementById(
"education"
).value =
profile.education || "";

}

loadProfile();