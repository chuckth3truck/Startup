function updateTable() {
    // let name = localStorage.getItem("username");
    // let question = JSON.parse(localStorage.getItem(name))["question"];
    // let subject = JSON.parse(localStorage.getItem(name))["subject"];

    let queue = [];
    const queueMap = localStorage.getItem("queue");
    if (queue){
        queue = JSON.parse(queueMap);
    }
    
    const tableElement = document.querySelector("#queue");

    if (queue.length){
        for (let [name, map] of queue){
            const nameEL = document.createElement("td");
            const subjectEL = document.createElement("td");
            const questionEL = document.createElement("td");
            const acceptEL = document.createElement("td");

            nameEL.textContent = name;
            subjectEL.textContent = map.subject;
            questionEL.textContent = map.question;
            acceptEL.textContent = "temp";

            const rowEL = document.createElement("tr");
            rowEL.appendChild(nameEL);
            rowEL.appendChild(subjectEL);
            rowEL.appendChild(questionEL);
            rowEL.appendChild(acceptEL);

            tableElement.appendChild(rowEL);

        }
    }

    else{
        tableElement.innerHTML = "No one in the queue";
    }
}

updateTable();