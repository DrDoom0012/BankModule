
// document.addEventListener("DOMContentLoaded", function () {
//     const loginBtn = document.getElementById("login-button");
//     if (loginBtn) {
//         loginBtn.addEventListener("click", login);
//     }
//
// });
// function login() {
//     alert("Login");
// }
document.addEventListener("DOMContentLoaded", function () {
    const loginArea = document.getElementById("login-area");
    if(loginArea) {
        loginArea.addEventListener("click", function () {
            vanish(loginArea)
        });
    }
})
function vanish(element) {
   element.style.display = "none";
   const dashboard = document.getElementById("dashboard-area");
   dashboard.style.display = "block";
}

//deposit amount handler

document.addEventListener("DOMContentLoaded", function () {
    const depositBtn =document.getElementById("deposit-btn");
    if (depositBtn){
        depositBtn.addEventListener("click", function () {

            //for deposit
            const depositAmount = document.getElementById("deposit-amount").value;//ekhan theke value nibe
            const depositNumber = parseFloat(depositAmount);//ekhan theke string ke number e convert korbe

            function depositAndBalance(id){
                const currentBalance = document.getElementById(id).innerText;//vitor theke text nibe
                const currentBalanceNumber= parseFloat(currentBalance);//text ke convert korbe
                const totalBalance= depositNumber +currentBalanceNumber;//then balance add korbe
                document.getElementById(id).innerText=totalBalance.toFixed(2);//then value set korbe
            }


            if (!isNaN(depositNumber) && depositNumber > 0) {//condition for negetive value
                if(depositNumber >0){
                    if (/^\d+$/.test(depositNumber)) {
                        depositAndBalance("current-deposit", depositNumber);
                        depositAndBalance("current-balance", depositNumber);
                    }else{
                        alert("Please enter a valid deposit amount!");
                    }
                }else{
                    alert("Please enter a reasonable amount!");
                }
            }
            else {
                alert("Please enter a valid amount.");
            }
        })
    }
})

//withdrawal amount handler

document.addEventListener("DOMContentLoaded", function () {
    const withdrawalBtn = document.getElementById("withdrawal-btn");
    if (withdrawalBtn){
       withdrawalBtn.addEventListener("click", function () {
           const withdrawalAmount = document.getElementById("withdrawal-amount").value;
           const withdrawalAmountNumber = parseFloat(withdrawalAmount);

           const mainBalance = document.getElementById("current-balance").innerText;
           const mainBalanceNumber = parseFloat(mainBalance);

           if (mainBalanceNumber >= withdrawalAmountNumber ) {
               if (/^\d+$/.test(withdrawalAmountNumber)) { //only integer number will allowed
                   const newBalance = mainBalanceNumber - withdrawalAmountNumber;

                   document.getElementById("current-balance").innerText = newBalance;
                   document.getElementById("withdrawal-balance").innerText = withdrawalAmountNumber;
               } else {
                   alert("Please enter a valid number.");
               }
           }else{
               alert("insufficient amount!");
           }

       })

    }
})
