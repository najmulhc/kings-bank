let withdrowBalance = 0;
let depositBalance = 0;
let balenceFinal = 0;
// if you click diposit button
document.getElementById("dipositBtn").addEventListener("click", function(){
    let balenceDisplay = document.getElementById("balence");
    let dipositDisplay = document.getElementById("diposit");
    let dipsitInput = document.getElementById("dipositInput");
    let diposit = parseFloat(dipsitInput.value);
    depositBalance += diposit;
    dipositDisplay.innerText ="$"+ depositBalance;
    balenceFinal += diposit;
    balenceDisplay.innerHTML = "$"+balenceFinal;
    dipsitInput.value = "";
});

document.getElementById("withdrowBtn").addEventListener("click", function(){
    let balenceDisplay = document.getElementById("balence");
    let withdrowDisplay = document.getElementById("withdrow");
    let withdrowInput = document.getElementById("withdrowInput");
    let withdrow = parseFloat(withdrowInput.value);
    withdrowBalance += withdrow;
    withdrowDisplay.innerText = "$"+withdrowBalance;
    balenceFinal -= withdrow;
    balenceDisplay.innerHTML = "$"+balenceFinal;
    withdrowInput.value = "";
});