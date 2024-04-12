import React from 'react';
import "./question.css"


function Getquote() {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json())
    .then((data) => {

      return (
        <p>{data.value}</p>
      );
    });
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



  return (
        <main>

        <h1 id="user">You Have Questions We Have Answers</h1>
        <div className="question-box" id="questionbox">
        <p className='subject-text'>Subject </p>
        <input type="text" id="subject" name="varText" placeholder="" required pattern="[Aa].*" />

        <p className="Question-text">Go ahead, ask your question I DARE YOU: </p>
        <textarea rows="10vh"id="question" name="varTextarea"></textarea>
        
        <button type="submit" onClick="storequestion()" >Submit</button>
        
        </div>

    <div id="quotearea">
        <h5 id="quote">HERE IS A FUN CHUCK NORRIS JOKE</h5>
        <p>{quote}</p>
    </div>

    </main>
    
  );
}