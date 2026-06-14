console.log("LinkedHire Pro Loaded");
function toggleTheme(){

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

}

window.onload = () => {

const theme =

localStorage.getItem("theme");

if(theme === "true"){

document.body.classList.add("dark");

}

};