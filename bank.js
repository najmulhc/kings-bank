// displayers 
let dipositDisplay = document.getElementById("diposit");
let withdrowDisplay = document.getElementById("withdrow");
let balenceDisplay = document.getElementById("balence");
let withdrowBalance = 0;
let depositBalance = 0;
let balenceFinal = 0;
let withdrow = parseFloat(document.getElementById("withdrowInput").value);

// if you click diposit button
document.getElementById("dipositBtn").addEventListener("click", function(){
   
    let dipositDisplay = document.getElementById("diposit");
    let diposit = parseFloat(document.getElementById("dipositInput").value);
    depositBalance += diposit;
    dipositDisplay.innerText ="$"+ depositBalance;
    balenceFinal += diposit;
    balenceDisplay.innerHTML = "$"+balenceFinal;
    document.getElementById("dipositInput").value = "";
});
document.getElementById("withdrowBtn").addEventListener("click", function(){
    let withdrowDisplay = document.getElementById("withdrow");
    let withdrow = parseFloat(document.getElementById("withdrowInput").value);
    withdrowBalance += withdrow;
    withdrowDisplay.innerText = "$"+withdrowBalance;
    balenceFinal -= withdrow;
    balenceDisplay.innerHTML = "$"+balenceFinal;
    document.getElementById("withdrowInput").value = "";
});