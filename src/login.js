function checkcreds(name, pass) {
    if (!name.value | !pass.value){
        const ErrorEL = document.createElement("h2");


        if (!name.value){
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

        return false;
        
    }
    else{return true};
}

async function login(){
    const nameEL = document.querySelector("#name");
    const passEL = document.querySelector("#password");


    if (checkcreds(nameEL,passEL)){

        dct = {
            "email":nameEL.value,
            "password":passEL.value,
        }

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(dct),
        });

        if (response.ok) {
            localStorage.setItem('username',nameEL.value);
            window.location.href = 'question.html';
    }


}
}

async function createaccount(){
    const nameEL = document.querySelector("#name");
    const passEL = document.querySelector("#password");

    if (checkcreds(nameEL,passEL)){

       dct = {
            "email":nameEL.value,
            "password":passEL.value,
        }
    
            const response = await fetch('/api/auth/create', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(dct),
            });
    
            console.log(response);

            if (response.ok) {
                localStorage.setItem('username', nameEL.value);
                window.location.href = 'question.html';
        }

    }   

    }

    function logout(){
        localStorage.removeItem('username');
        fetch(`/api/auth/logout`, {
        method: 'delete',
        }).then(() => (window.location.href = '/'));
    
      }