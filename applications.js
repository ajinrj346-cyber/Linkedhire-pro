const applications =

JSON.parse(
localStorage.getItem(
"appliedJobs"
)
)

||

[];

const tableBody =

document.getElementById(
"applicationBody"
);

applications.forEach(job=>{

tableBody.innerHTML +=

`
<tr>

<td>${job.title}</td>

<td>${job.company}</td>

<td>
<span class="status">
Applied
</span>
</td>

</tr>
`;

});