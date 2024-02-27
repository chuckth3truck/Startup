function storequestion () {
    let index = localStorage.getItem("index")
    const idname = document.querySelector("#question-submit");
    localStorage.setItem(index, idname.value)
}