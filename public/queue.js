function updateTable() {
    // let name = localStorage.getItem("username");
    // let question = JSON.parse(localStorage.getItem(name))["question"];
    // let subject = JSON.parse(localStorage.getItem(name))["subject"];

    let queue = {};
    const queueMap = localStorage.getItem("queue");
    if (queueMap){
        queue = JSON.parse(queueMap);
    }
    
    const tableElement = document.querySelector("#queue");

    if (Object.keys(queue).length){
        // console.log("i got here")
        for (let [name, map] of Object.entries(queue)){
            const nameEL = document.createElement("td");
            const subjectEL = document.createElement("td");
            const questionEL = document.createElement("td");
            const acceptEL = document.createElement("td");


            nameEL.textContent = name;
            subjectEL.textContent = map.subject;
            questionEL.textContent = map.question;

            let clicked = false;
            const button = document.createElement("button");
            button.setAttribute("id", "AcceptButton");
            button.textContent = "Accept";
            button.addEventListener("click", () => {
                button.style["background-color"] = "red";
                button.textContent = "DONE";
                clicked = true;

                if (clicked){
                    button.addEventListener("click", () => {
                    rowEL.remove();
                    let newQueue = JSON.parse(localStorage.getItem("queue"));
                    
                    console.log(newQueue);
                    newQueue = Object.keys(newQueue).filter(objKey =>
                        objKey !== name).reduce((newObj, key) =>
                        {
                            newObj[key] = newQueue[key];
                            return newObj;
                        }, {}
                    );
                    console.log(newQueue);
                    localStorage.setItem("queue", JSON.stringify(newQueue));
                    })                
                }
            })
            

            acceptEL.appendChild(button)
            // addButton()

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
  
        const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', imgUrl);
        containerEl.appendChild(imgEl);
      });
  }

displayPicture()
updateTable();