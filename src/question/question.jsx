import React from 'react';
import "./question.css"

export function Question() {
  return (
        <main>

        <h1 id="user">You Have Questions We Have Answers</h1>
        <div className="question-box" id="questionbox">
        <label for="text">Subject </label>
        <input type="text" id="subject" name="varText" placeholder="" required pattern="[Aa].*" />

        <label for="textarea">Go ahead, ask your question I DARE YOU: </label>
        <textarea rows="10vh"id="question" name="varTextarea"></textarea>
        
        <button type="submit" onclick="storequestion()" >Submit</button>
        
        </div>

    <div id="quotearea">
        <h5 id="quote">HERE IS A FUN CHUCK NORRIS JOKE</h5>
    </div>

    </main>
    
  );
}