const Name = document.getElementById("name");
const age = document.getElementById("age");
const Email = document.getElementById("email");
const gender = document.getElementsByName("gender");
const course = document.getElementById("courses");
const save = document.getElementById("save");
const table = document.getElementById("table");

save.addEventListener("click", function () {

    if(Name.value === ""  || age.value==="" || Email.value===""){
        alert("Fill all the fields");
        return;
    }
    if(course.value===""){
        alert("Select the course field");
        return;
    }
  
    const row = document.createElement("tr");
    const tname = document.createElement("td");
    tname.textContent = Name.value;
    row.append(tname);
    const tage = document.createElement("td");
    tage.textContent = age.value;
    row.append(tage);
    const tcourse = document.createElement("td");
    tcourse.textContent = course.value;
    row.append(tcourse);
    
    if (gender[0].checked) {
        const tgender = document.createElement("td");
        tgender.textContent = "male";
        row.append(tgender);
    }
    else if (gender[1].checked) {
        const tgender = document.createElement("td");
        tgender.textContent = "Female";
        row.append(tgender);
    }
    else {
        alert("Select your gender");
        return;
    }
    const temail = document.createElement("td");
    temail.textContent = Email.value;
    row.append(temail);
    const tdel = document.createElement("td");
    const del = document.createElement("button");
    del.textContent="Delete";
    del.setAttribute("onclick","doe(event)");
    del.style.backgroundColor="orange";
    tdel.append(del)
    console.log(del)
    row.append(tdel);
    table.append(row);

    Name.value="";
    age.value="";
    Email.value="";
    gender[0].checked=false;
    gender[1].checked=false;
    course.value="ECE";
   
    
})
function doe(event){
   
    event.target.parentElement.parentElement.remove();
}
