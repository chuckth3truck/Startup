function storequestion() {
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
}

function displayUser() {
  let name = localStorage.getItem("username")

  
  
}