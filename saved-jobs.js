const savedJobs =

JSON.parse(
localStorage.getItem("savedJobs")
)

||

[];

const container =

document.getElementById(
"savedJobsContainer"
);

function renderSavedJobs(){

container.innerHTML = "";

if(savedJobs.length === 0){

container.innerHTML =
"<h3>No Saved Jobs Found</h3>";

return;
}

savedJobs.forEach((job,index)=>{

container.innerHTML +=

`
<div class="job-card">

<h2>${job.title}</h2>

<p>${job.company}</p>

<p>${job.location}</p>

<button
class="save-btn"
onclick="removeJob(${index})">

Remove

</button>

</div>
`;

});

}

function removeJob(index){

savedJobs.splice(index,1);

localStorage.setItem(
"savedJobs",
JSON.stringify(savedJobs)
);

renderSavedJobs();

}

renderSavedJobs();