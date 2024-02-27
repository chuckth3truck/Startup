function storequestion () {
    let index = localStorage.getItem("index");
    let subject_question = localStorage.getItem(index);
    subject_question.append(document.querySelector("#subject").value, document.querySelector("#question").value);

    localStorage.setItem(index, subject_question);
}

function saveQuestion(score) {
    let index = localStorage.getItem("index");
    let name = [localStorage.getItem(index)];
    name.append(document.querySelector("#subject").value, document.querySelector("#question").value);


    let questions = [];
    const questionText = localStorage.getItem('questions');
    if (questionText) {
      questions = JSON.parse(questionText);
    }
    
    localStorage.setItem('questions', JSON.stringify(scores));
  }