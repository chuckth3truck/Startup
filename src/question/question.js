const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

async function Recieve() {
    socket.onopen = (event) => {
      let obj = {connected:true};
        socket.send(JSON.stringify(obj));
    };

    socket.onmessage  = async (event) => {
      let obj = JSON.parse(await event.data.text())
      if (obj.name){
        console.log(obj.name)

        const name = obj.name;
        const nameEL = document.createElement("h2");
        const headerEl= document.getElementById("questionbox");
        headerEl.parentNode.insertBefore(nameEL, headerEl.nextSibling);
        headerEl.style.textAlign = 'center';
        
        if (!obj.clicked){
        nameEL.textContent = `${name} is currently being helped`;
        }else
        {nameEL.textContent = `${name} is Done being helped`;}

        setTimeout(() => {
          nameEL.remove();
        }, 3000);}};}

Recieve();

async function storequestion() {
    
    let subject = document.querySelector("#subject").value;
    let question =  document.querySelector("#question").value;
    let name = localStorage.getItem("username");

    let dct = {
        'name': name,
        "subject": subject,
        "question": question
    }

    // let queue = {};
    // queue[name] = dct

    try {
        const response = await fetch('/api/queue', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(dct),
        });

        console.log(response);
    
            
      } catch {
        const queueMap = localStorage.getItem("queue");
        if (queueMap){
            queue = JSON.parse(queueMap);
            localStorage.setItem("queue", JSON.stringify(queue))
      }
      }
      let object = {
        refresh:true,
      };
      socket.send(JSON.stringify(object));
  

}

   

function displayUser() {
    const name = localStorage.getItem("username");
    const nameEL = document.createElement("h2");
    nameEL.textContent = name;


    const headerEl= document.getElementById("user");
    headerEl.parentNode.insertBefore(nameEL, headerEl.nextSibling);

    headerEl.style.textAlign = 'center';
}

function getquote() {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((response) => response.json())
      .then((data) => {
        
        const quoteEL = document.createElement("p");
        quoteEL.textContent = data.value;

        const header5El= document.getElementById("quote");
        header5El.parentNode.insertBefore(quoteEL, header5El.nextSibling);

        header5El.style.textAlign = 'center';
        quoteEL.style.padding = '10px'
        
        console.log(data.value);
      });
  }


displayUser();
getquote();
