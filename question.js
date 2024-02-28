function storequestion() {
    let subject = document.querySelector("#subject").value;
    let question =  document.querySelector("#question").value;
    let name = localStorage.getItem("username")

    let dct = {
      "subject": subject,
      "question": question
    }


    localStorage.setItem("queue", JSON.stringify({name:dct}));

    // console.log(JSON.parse(localStorage.getItem(name)))
}