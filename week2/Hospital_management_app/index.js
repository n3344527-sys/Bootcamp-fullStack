let doctors = JSON.parse(localStorage.getItem("doctors")) || [];

doctors.forEach(function(ele){
    displayTable(ele);
});

document.querySelector("form").addEventListener("submit", getDetails);

function getDetails(e){
    e.preventDefault();

    let doctorName = document.querySelector("#name").value;
    let doctorID = Number(document.querySelector("#docID").value);
    let spec = document.querySelector("#dept").value;
    let experience = Number(document.querySelector("#exp").value);
    let email = document.querySelector("#email").value;
    let mob = document.querySelector("#mbl").value;

    let tableObj = {
        Name: doctorName,
        DoctorID: doctorID,
        Specialization: spec,
        Experience: experience,
        Email: email,
        Mobile: mob
    };

    doctors.push(tableObj);

    localStorage.setItem("doctors", JSON.stringify(doctors));

    displayTable(tableObj);

    document.querySelector("form").reset();
}

function displayTable(tableObj){

    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = tableObj.Name;

    const td2 = document.createElement("td");
    td2.innerText = tableObj.DoctorID;

    const td3 = document.createElement("td");
    td3.innerText = tableObj.Specialization;

    const td4 = document.createElement("td");
    td4.innerText = tableObj.Experience;

    const td5 = document.createElement("td");
    td5.innerText = tableObj.Email;

    const td6 = document.createElement("td");
    td6.innerText = tableObj.Mobile;

    let exp = tableObj.Experience;

    const td7 = document.createElement("td");

    function role(){
        if(exp > 5){
            return "Senior";
        }
        else if(exp >= 2 && exp <= 5){
            return "Junior";
        }
        else{
            return "Trainee";
        }
    }

    td7.innerText = role();

    const td8 = document.createElement("td");

    const btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.addEventListener("click", function(){

        doctors = doctors.filter(function(ele){
            return ele.DoctorID !== tableObj.DoctorID;
        });

        localStorage.setItem("doctors", JSON.stringify(doctors));

        row.remove();
    });

    td8.append(btn);

    row.append(td1, td2, td3, td4, td5, td6, td7, td8);

    document.querySelector("tbody").append(row);
}
