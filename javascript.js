function storename(){
    let index = localStorage.getItem("index")

    if (index){
        localStorage.setItem("index", currentindex+1)
    }
    else {
        localStorage.setItem("index", 0)
    }

    const currentindex = localStorage.getItem("index")
    const idname = document.querySelector("#name");
    localStorage.setItem(currentindex, idname);
    
};  