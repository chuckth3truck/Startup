async function storequestion() {
    
        let subject = document.querySelector("#subject").value;
        let question =  document.querySelector("#question").value;
        let name = localStorage.getItem("username");

        let dct = {
            "subject": subject,
            "question": question
        }

        let queue = {};
        queue[name] = dct

        try {
            const response = await fetch('/api/queue', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(queue),
                // name: localStorage.getItem("username"),
            });

            console.log(response);
        
                
          } catch {
            // If there was an error then just use the last saved scores
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
