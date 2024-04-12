import React from 'react';
import "./queue.css"

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);


async function CanModify(name){

  const [clicked, setClicked] = React.useState(false);

  const response = await fetch(`api/user/auth`);
    if (response.status === 200) {
        message = await response.json();
        if (message.msg === "authorized"){
            setClicked(true);
        }
      }
}

async function deleteName(name){
  const response = await fetch('/api/queue', {
      method: 'delete',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({"name":name}),
  });    
      }

export function Queue() {
  const [queue, setQueue] = React.useState([]);

  socket.onmessage  = async (event) => {
    let obj = JSON.parse(await event.data.text());
    console.log(obj.refresh);
    if (obj.refresh){

    }
}

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    fetch('/api/queue')
      .then((response) => response.json())
      .then((queue) => {
        setQueue(queue);
        console.log(queue)
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

        queueRows.push(
          <tr key={i}>
            <td>{map.name}</td>
            <td>{map.subject}</td>
            <td>{map.question}</td>
            <td>Accept</td>
          </tr>
        );
      }
    } else {
      queueRows.push(
        <tr key='0'>
          <td colSpan='4'>Be the first to ask a question</td>
        </tr>
      );
    }

      // console.log(i);
      //       const nameEL = document.createElement("td");
      //       const subjectEL = document.createElement("td");
      //       const questionEL = document.createElement("td");
      //       const acceptEL = document.createElement("td");


      //       nameEL.textContent = map.name;
      //       subjectEL.textContent = map.subject;
      //       questionEL.textContent = map.question;
      //       acceptEL.textContent = "accept"
            
        //     if (await can_modify()){
        //     let clicked = false;
        //     const button = document.createElement("button");
        //     button.setAttribute("id", "AcceptButton");
        //     button.textContent = "Accept";
        //     button.addEventListener("onClick", () => {
        //         button.style["background-color"] = "red";
        //         button.textContent = "DONE";
            
        //         Send(map.name, clicked);
        //         clicked = true;

        //         if (clicked){
        //             button.addEventListener("onClick", () => {
        //             rowEL.remove();
                    
        //             can_modify(map.name);
        //             deletename(map.name);
        //             })                    
        //         }
        //     })
            
        //     acceptEL.appendChild(button)
        // }

  //           const rowEL = document.createElement("tr");
  //           rowEL.appendChild(nameEL);
  //           rowEL.appendChild(subjectEL);
  //           rowEL.appendChild(questionEL);
  //           rowEL.appendChild(acceptEL);

  //           tableElement.appendChild(rowEL);
  //       }
  // }

  return (
    <main className="container-fluid text-center">
        <table className="table table-light table-borderless" id="queueTable">
            <thead className="table-light">
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Question</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="queue">{queueRows}</tbody>
        </table>

        <hr/>

        <div id="picture"></div>
    </main>
  );
}

// function queue() {
//   return (
//     <main class="container-fluid text-center">
//         <table class="table table-light table-borderless" id="queueTable">
//             <thead class="table-light">
//                 <tr>
//                     <th>Name</th>
//                     <th>Subject</th>
//                     <th>Question</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody id="queue"></tbody>
//         </table>

//         <hr/>

//         <div id="picture"></div>
//     </main>
//   );
// }