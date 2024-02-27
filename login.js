localStorage.setItem("index", 0)

function storename(){
    const currentindex = localStorage.getItem("index") + 1;
    const idname = document.querySelector("#name");
    localStorage.setItem(currentindex, idname.value);
};  