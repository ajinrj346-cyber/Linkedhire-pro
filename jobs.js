const jobs = [

{
id:1,
title:"Frontend Developer",
company:"Infosys",
location:"Bangalore",
salary:"₹8 LPA"
},

{
id:2,
title:"Backend Developer",
company:"TCS",
location:"Chennai",
salary:"₹10 LPA"
},

{
id:3,
title:"Full Stack Developer",
company:"Wipro",
location:"Hyderabad",
salary:"₹12 LPA"
},

{
id:4,
title:"React Developer",
company:"Accenture",
location:"Pune",
salary:"₹9 LPA"
},

{
id:5,
title:"Java Developer",
company:"Capgemini",
location:"Bangalore",
salary:"₹11 LPA"
}

];

function displayJobs(jobList){

const container =
document.getElementById("jobContainer");

container.innerHTML="";

jobList.forEach(job=>{

container.innerHTML +=

`
<div class="job-card">

<h2>${job.title}</h2>

<p>
<strong>Company:</strong>
${job.company}
</p>

<p>
<strong>Location:</strong>
${job.location}
</p>

<p>
<strong>Salary:</strong>
${job.salary}
</p>

<button
class="apply-btn"
onclick="applyJob(${job.id})">

Apply Now

</button>

</div>
`;

});

}

function filterJobs(){

const search =
document
.getElementById("searchInput")
.value
.toLowerCase();

const location =
document
.getElementById("locationFilter")
.value;

const salary=
document.getElementById(
    "salaryFilter"

).value;

const filtered =
jobs.filter(job =>

job.title.toLowerCase().includes(search)

&&

(location === ""

||

job.location === location)

);

displayJobs(filtered);

}

function applyJob(id){

const selectedJob =
jobs.find(job => job.id === id);

let appliedJobs =

JSON.parse(
localStorage.getItem("appliedJobs")
)

||

[];

appliedJobs.push(selectedJob);

localStorage.setItem(
"appliedJobs",
JSON.stringify(appliedJobs)
);

alert("Application Submitted");

}

displayJobs(jobs);
function saveCurrentJob(){

const job = {

id:101,

title:"Frontend Developer",

company:"Infosys",

location:"Bangalore",

salary:"₹8 LPA"

};

let savedJobs =

JSON.parse(
localStorage.getItem("savedJobs")
)

||

[];

savedJobs.push(job);

localStorage.setItem(
"savedJobs",
JSON.stringify(savedJobs)
);

alert("Job Saved Successfully");

}

function applyCurrentJob(){

const job = {

id:101,

title:"Frontend Developer",

company:"Infosys",

location:"Bangalore",

salary:"₹8 LPA"

};

let appliedJobs =

JSON.parse(
localStorage.getItem("appliedJobs")
)

||

[];

appliedJobs.push(job);

localStorage.setItem(
"appliedJobs",
JSON.stringify(appliedJobs)
);

alert("Application Submitted");

}