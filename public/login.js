function storename(){
    const nameEL = document.querySelector("#name");
    const passEL = document.querySelector("#password");



    if (nameEL.value && passEL.value){
        localStorage.setItem("username", nameEL.value);
        window.location.href = "question.html";
    }
    else{
        const ErrorEL = document.createElement("h2");


        if (!nameEL.value){
            ErrorEL.textContent = "You Need a UserName";
        }
        else{
            ErrorEL.textContent = "You Need a Password";
        }


        const headerEl= document.getElementById("loginBox");
        headerEl.parentNode.insertBefore(ErrorEL, headerEl.nextSibling);

        headerEl.style.textAlign = 'center';
        setTimeout(() => {
            ErrorEL.remove()
          }, 1000);
         
    }
}

async function createaccount(){
    const UserName = document.querySelector("#name").value;
    const Pass = document.querySelector("#password").value;



    if (UserName && Pass){

        dct = {
            "email":UserName,
            "password":Pass,
        }
    
        try {
            const response = await fetch('/api/auth/create', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(dct),
            });
    
            console.log(response);
        
                
          } catch(err) {
            console.log(err);
            }
    
    }
    else{
        const ErrorEL = document.createElement("h2");


        if (!UserName){
            ErrorEL.textContent = "You Need a UserName";
        }
        else{
            ErrorEL.textContent = "You Need a Password";
        }


        const headerEl= document.getElementById("loginBox");
        headerEl.parentNode.insertBefore(ErrorEL, headerEl.nextSibling);

        headerEl.style.textAlign = 'center';
        setTimeout(() => {
            ErrorEL.remove()
          }, 1000);

    }
}