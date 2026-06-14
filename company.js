const companies = [

{
id:1,
name:"Infosys",
location:"Bangalore",
employees:"3,00,000+",
jobs:120
},

{
id:2,
name:"TCS",
location:"Chennai",
employees:"6,00,000+",
jobs:200
},

{
id:3,
name:"Wipro",
location:"Hyderabad",
employees:"2,50,000+",
jobs:90
},

{
id:4,
name:"Accenture",
location:"Pune",
employees:"7,00,000+",
jobs:180
}

];

function loadCompanies(){

const container =
document.getElementById(
"companyContainer"
);

if(!container) return;

container.innerHTML="";

companies.forEach(company=>{

container.innerHTML +=

`
<div class="job-card">

<h2>${company.name}</h2>

<p>
Location:
${company.location}
</p>

<p>
Employees:
${company.employees}
</p>

<p>
Open Jobs:
${company.jobs}
</p>

<a href="company-details.html">
<button class="apply-btn">
View Details
</button>
</a>

<button
class="save-btn"
onclick="followCompany('${company.name}')">
Follow
</button>

</div>
`;

});

}

function searchCompany(){

const keyword =

document
.getElementById("companySearch")
.value
.toLowerCase();

const filtered =

companies.filter(company=>

company.name
.toLowerCase()
.includes(keyword)

);

const container =

document.getElementById(
"companyContainer"
);

container.innerHTML="";

filtered.forEach(company=>{

container.innerHTML +=

`
<div class="job-card">

<h2>${company.name}</h2>

<p>${company.location}</p>

<p>${company.jobs} Jobs</p>

</div>
`;

});

}

function followCompany(name){

let followed =

JSON.parse(
localStorage.getItem(
"followedCompanies"
)
)

||

[];

followed.push(name);

localStorage.setItem(
"followedCompanies",
JSON.stringify(followed)
);

alert(
name + " Followed"
);

}

loadCompanies();