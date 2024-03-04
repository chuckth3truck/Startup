function storequestion() {
    // let activate = JSON.parse(localStorage.getItem("queue_activated"));
    // if (activate){
        console.log("hello");
        let subject = document.querySelector("#subject").value;
        let question =  document.querySelector("#question").value;
        let name = localStorage.getItem("username");

        let dct = {
            "subject": subject,
            "question": question
        }

        let queue = {};
        const queueMap = localStorage.getItem("queue");
        if (queueMap){
            queue = JSON.parse(queueMap);
        }
        queue[name] = dct

        localStorage.setItem("queue", JSON.stringify(queue));

        window.location.href = "queue.html";
    // console.log(JSON.parse(localStorage.getItem(name)))
   
    // }
    // else {
    //     console.log("no");
    // }
}

function displayUser() {
    const name = localStorage.getItem("username");
    const nameEL = document.createElement("h2");
    nameEL.textContent = name;


    const headerEl= document.getElementById("user");
    headerEl.parentNode.insertBefore(nameEL, headerEl.nextSibling);

    headerEl.style.textAlign = 'center';
}

displayUser()