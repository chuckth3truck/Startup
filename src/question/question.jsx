import React from 'react';
import "./question.css"

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
      }, 3000);}};
    }


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

export function Question() {
  const [quote, setQuote] = React.useState('');

  React.useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.value);
      })
      .catch(() => {

        setQuote("no quote")

      });
  }, []);

  Recieve();


  return (
        <main>

        <h1 id="user">You Have Questions We Have Answers</h1>
        <div className="question-box" id="questionbox">
        <p className='subject-text'>Subject </p>
        <input type="text" id="subject" name="varText" placeholder="" required pattern="[Aa].*" />

        <p className="Question-text">Go ahead, ask your question I DARE YOU: </p>
        <textarea rows="10vh"id="question" name="varTextarea"></textarea>
        
        <button type="submit" onClick={() => storequestion()} >Submit</button>
        
        </div>

    <div id="quotearea">
        <h5 id="quote">HERE IS A FUN CHUCK NORRIS JOKE</h5>
        <p>{quote}</p>
    </div>

    </main>
    
  );
}