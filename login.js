function storename(){
    const idname = document.querySelector("#name");

    if (!localStorage.getItem("usernames")){
        localStorage.setItem("username", []);
    }

    let names = localStorage.getItem("usernames");
    names.append(idnmae.value)

    localStorage.setItem("usernames", names);
    window.location.href = "question.html";
};  