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

function getweather() {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41`)
      .then((response) => response.json())
      .then((data) => {
        
  
        
        console.log(data);
      });
  }

displayUser();
getweather();
