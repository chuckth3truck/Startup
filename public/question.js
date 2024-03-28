const socket = new WebSocket('ws://localhost:4000');

async function Recieve() {
    socket.onopen = (event) => {
        let object = {obj:"here"};
        socket.send(JSON.stringify(object));
    };
    socket.onmessage  = async (event) => {
      console.log(JSON.parse(await event.data.text()))
      const name = await event.data.text().name;
      const nameEL = document.createElement("h2");
      nameEL.textContent = `${name} is currently being helped`;

      const headerEl= document.getElementById("questionbox");
      headerEl.parentNode.insertBefore(nameEL, headerEl.nextSibling);

      headerEl.style.textAlign = 'center';
      setTimeout(() => {
        nameEL.remove();
    }, 3000);
    };
}

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


        window.location.href = "queue.html";

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
