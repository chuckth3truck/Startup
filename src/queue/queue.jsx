import React from 'react';
import "./queue.css"

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

function Send(name, clicked) {
  let object = {
      name:name,
      clicked:clicked
  };
  socket.send(JSON.stringify(object));
}

async function can_modify(name){
  const response = await fetch(`api/user/auth`);
  if (response.status === 200) {
      let message = await response.json();
      if (message.msg === "authorized"){
          Send(name, true);
          deletename(name);
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


export function Queue() {
  const [queue, setQueue] = React.useState([]);

  socket.onmessage  = async (event) => {
    let obj = JSON.parse(await event.data.text());
    console.log(obj.refresh);
    if (obj.refresh){

    }
}

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


  const queueRows = [];
  if (queue.length) {
    for (const [i, map] of queue.entries()) {

        queueRows.push(
          <tr key={i}>
            <td>{map.name}</td>
            <td>{map.subject}</td>
            <td>{map.question}</td>
            <td><button type="submit" onClick={() => {
              can_modify(map.name)
              setQueue(queue)
              }} >Action</button></td>
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
        <DisplayPicture/>
    </main>
  );
}

function DisplayPicture() {
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