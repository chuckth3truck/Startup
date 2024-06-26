const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

socket.onmessage  = async (event) => {
    let obj = JSON.parse(await event.data.text());
    console.log(obj.refresh);
    if (obj.refresh){
        window.location.reload();
    }
}

function Send(name, clicked) {
    let object = {
        name:name,
        clicked:clicked
    };
    socket.send(JSON.stringify(object));
}

async function loadqueue() {

    let queue = {};
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/queue');
        queue = await response.json();
    
        // Save the scores in case we go offline in the future
        localStorage.setItem('queue', JSON.stringify(queue));
      } catch {
        // If there was an error then just use the last saved scores
        const queuemap = localStorage.getItem('queue');
        if (queuemap) {
          queue = JSON.parse(queuemap);
        }
      }
    updateTable(queue);
}


async function can_modify(){
    const response = await fetch(`api/user/auth`);
    if (response.status === 200) {
        message = await response.json();
        if (message.msg === "authorized"){
            return true;
        }
        else{
            return false;
        }
        }    
    return false;
}

async function deletename(name){
    const response = await fetch('/api/queue', {
        method: 'delete',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({"name":name}),
    });    
        }

async function updateTable(queue) {
    const tableElement = document.querySelector("#queue");

    if (Object.keys(queue).length){
        // console.log("i got here")
        for (let [i, map] of Object.entries(queue)){
            console.log(i);
            const nameEL = document.createElement("td");
            const subjectEL = document.createElement("td");
            const questionEL = document.createElement("td");
            const acceptEL = document.createElement("td");


            nameEL.textContent = map.name;
            subjectEL.textContent = map.subject;
            questionEL.textContent = map.question;

            if (await can_modify()){
            let clicked = false;
            const button = document.createElement("button");
            button.setAttribute("id", "AcceptButton");
            button.textContent = "Accept";
            button.addEventListener("click", () => {
                button.style["background-color"] = "red";
                button.textContent = "DONE";
            
                Send(map.name, clicked);
                clicked = true;

                if (clicked){
                    button.addEventListener("click", () => {
                    rowEL.remove();
                    
                    can_modify(map.name);
                    deletename(map.name);
                    })                    
                }
            })
            
            acceptEL.appendChild(button)
        }

            const rowEL = document.createElement("tr");
            rowEL.appendChild(nameEL);
            rowEL.appendChild(subjectEL);
            rowEL.appendChild(questionEL);
            rowEL.appendChild(acceptEL);

            tableElement.appendChild(rowEL);
        }
    }
}

function activateQueue() {
    const checkboxEl = document.querySelector(".box");
    localStorage.setItem("queue_activated",checkboxEl.checked);
}

function displayPicture() {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
  
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
  
        const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}`;
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', imgUrl);
        containerEl.appendChild(imgEl);
      });
  }

displayPicture();
loadqueue();