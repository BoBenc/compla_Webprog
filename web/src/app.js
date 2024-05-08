/*
* File: app.js
* Author: Bőgér Bence
* Copyright: 2024, Bőgér Bence
* Group: Szoft I-2-N
* Date: 2024-05-08
* Github: https://github.com/BoBenc/
* Licenc: GNU GPL
*/
const doc = {
    complaBody: document.querySelector("#complaBody")
}

function getComplaints(){
    let url = "http://localhost:8000/complaints"
    fetch(url)
    .then(response => response.json())
    .then(result => {
        renderComplaints(result)
    })
}

getComplaints()

function renderComplaints(complaintsList){
    complaintsList.forEach(complain => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${complain.id}</td>
        <td>${complain.description}</td>
        <td>${complain.complainant}</td>
        <td>${complain.products}</td>
        <td>${complain.type}</td>
        `
        doc.complaBody.appendChild(tr)
    });
}