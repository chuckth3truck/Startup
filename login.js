if (!localStorage.getItem("index")){
    localStorage.setItem("index", 0)
}

function storename(){
    const currentindex = localStorage.getItem("index");
    const idname = document.querySelector("#name");
    localStorage.setItem(currentindex, idname.value);
    localStorage.setItem("index", currentindex+1)
};  