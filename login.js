function storename(){
    const name = document.querySelector("#name").value;

    localStorage.setItem("username", name);
    window.location.href = "question.html";
}