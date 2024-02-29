function addButton(){
    let buttonEl = document.getElementById("#AcceptDecline-Button");

    buttonEl.innerHTML += "<button> onclick='AcceptDecline_Action()' </button>";
}


function AcceptDecline_Action() {

}

function updateTable() {
    // let name = localStorage.getItem("username");
    // let question = JSON.parse(localStorage.getItem(name))["question"];
    // let subject = JSON.parse(localStorage.getItem(name))["subject"];

    let queue = {};
    const queueMap = localStorage.getItem("queue");
    if (queueMap){
        queue = JSON.parse(queueMap);
        console.log(queue.name);

    }
    
    const tableElement = document.querySelector("#queue");

    if (queue){
        for (let [name, map] of Object.entries(queue)){
            const nameEL = document.createElement("td");
            const subjectEL = document.createElement("td");
            const questionEL = document.createElement("td");
            const acceptEL = document.createElement("td");


            nameEL.textContent = name;
            subjectEL.textContent = map.subject;
            questionEL.textContent = map.question;

            acceptEL.innerHTML += '<button onclick="AcceptDecline_Action()">Accept</button>';
            // addButton()

            const rowEL = document.createElement("tr");
            rowEL.appendChild(nameEL);
            rowEL.appendChild(subjectEL);
            rowEL.appendChild(questionEL);
            rowEL.appendChild(acceptEL);

            tableElement.appendChild(rowEL);

        }
    }

    else{
        console.log(queue.length);
        tableElement.innerHTML = "No one in the queue";
    }
}

updateTable();