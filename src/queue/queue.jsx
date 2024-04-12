import React from 'react';
import "./queue.css"

export async function Queue() {
  const [queue, setQueue] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    fetch('/api/queue')
      .then((response) => response.json())
      .then((queue) => {
        setQueue(queue);
        localStorage.setItem('queue', JSON.stringify(queue));
      })
      .catch(() => {
        const queue = localStorage.getItem('queue');
        if (queue) {
          setQueue(JSON.parse(queue));
        }
      });
  }, []);

  // Demonstrates rendering an array with React
  const queueRows = [];
  if (queue.length) {
    for (const [i, map] of queue.entries()) {
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

  return (
    <main class="container-fluid text-center">
        <table class="table table-light table-borderless" id="queueTable">
            <thead class="table-light">
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Question</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="queue"></tbody>
        </table>

        <hr/>

        <div id="picture"></div>
    </main>
  );
}

function queue() {
  return (
    <main class="container-fluid text-center">
        <table class="table table-light table-borderless" id="queueTable">
            <thead class="table-light">
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Question</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="queue"></tbody>
        </table>

        <hr/>

        <div id="picture"></div>
    </main>
  );
}