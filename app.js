let submitButton = document.getElementById("submitBtn");
let form = document.getElementById("form");
submitButton.addEventListener("click", function(){
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("password").value;
    if(email == "" || password ==""){
        alert("Give your account information");
    }
    else if (email == "huda@gmail.com" && password == "password"){
        window.location.href = "account.html";
    }
    else{
        email = " ";
        password = " ";
     let info = document.createElement("p");
     info.innerText = "Invalid email or password";
     info.classList = "text-red-600 text-sm p-2";
     form.appendChild(info);
    
    }
});

