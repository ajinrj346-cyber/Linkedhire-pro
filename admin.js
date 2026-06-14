let adminJobs =

JSON.parse(
localStorage.getItem("adminJobs")
)

||

[
{
title:"Frontend Developer",
company:"Infosys",
location:"Bangalore"
},

{
title:"React Developer",
company:"TCS",
location:"Chennai"
}
];

function loadDashboard(){

document.getElementById(
"jobCount"
).innerText =
adminJobs.length;

const user =

localStorage.getItem(
"user"
);

document.getElementById(
"userCount"
).innerText =
user ? 1 : 0;

renderJobs();

}

function renderJobs(){

const container =
document.getElementById(
"adminJobs"
);

container.innerHTML="";

adminJobs.forEach((job,index)=>{

container.innerHTML +=

`
<div class="job-card">

<h2>${job.title}</h2>

<p>${job.company}</p>

<p>${job.location}</p>

<button
class="save-btn"
onclick="deleteJob(${index})">

Delete

</button>

</div>
`;

});

}

function addJob(){

const title =
document.getElementById(
"jobTitle"
).value;

const company =
document.getElementById(
"company"
).value;

const location =
document.getElementById(
"location"
).value;

if(!title || !company || !location){

alert(
"Please fill all fields"
);

return;
}

adminJobs.push({

title,
company,
location

});

localStorage.setItem(
"adminJobs",
JSON.stringify(adminJobs)
);

loadDashboard();

}

function deleteJob(index){

adminJobs.splice(index,1);

localStorage.setItem(
"adminJobs",
JSON.stringify(adminJobs)
);

loadDashboard();

}

loadDashboard();