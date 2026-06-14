const user =

JSON.parse(
localStorage.getItem("user")
);

if(user){

document.getElementById(
"welcomeText"
).innerText =

"Welcome, " + user.name;

}

const appliedJobs =

JSON.parse(
localStorage.getItem(
"appliedJobs"
)
)

||

[];

const savedJobs =

JSON.parse(
localStorage.getItem(
"savedJobs"
)
)

||

[];

const followedCompanies =

JSON.parse(
localStorage.getItem(
"followedCompanies"
)
)

||

[];

document.getElementById(
"appliedCount"
).innerText =
appliedJobs.length;

document.getElementById(
"savedCount"
).innerText =
savedJobs.length;

document.getElementById(
"followedCount"
).innerText =
followedCompanies.length;

const activityList =
document.getElementById(
"activityList"
);

appliedJobs.forEach(job=>{

activityList.innerHTML +=

`
<li>
Applied:
${job.title}
</li>
`;

});

savedJobs.forEach(job=>{

activityList.innerHTML +=

`
<li>
Saved:
${job.title}
</li>
`;

});

followedCompanies.forEach(company=>{

activityList.innerHTML +=

`
<li>
Followed:
${company}
</li>
`;

});