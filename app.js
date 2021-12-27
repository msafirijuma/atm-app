/* 
1. Implementing time stamp on withdrawing and depositing.
2. Checking if account is already created before checking/accessing  other functionality.
3. 
*/





console.log(("SIMPLE ATM APP"))
var readlineSync = require("readline-sync")
var languageSelection = [
  {
    question: "Select language: ",
    answers: ["English", "Kiswahili"]
  }
]


// English Language Feature
function selectEnglishLangauge(){
   //console.log("English")
//var readlineSync = require('readline-sync');

//console.log(("SIMPLE ATM APP"))
// Only Amount here
var totalAmount = 0;
var amountDeposited= 0;

// Global variable for creating user account

var userName;
var accountNumber;
var pinNumber;
var accountType;




/*
while(true){
  console.log("Msa")
}

*/

// Creating User Account
function createUserAccount(){
 console.log("***************************")  
console.log("")
  console.log("** Create User Account **")
  userName = readlineSync.question("Enter Account Name: ");
  accountNumber = readlineSync.question("Enter Account Number : ");
  accountType = readlineSync.question("Enter AccountType: ")
  pinNumber = readlineSync.question("Enter pin number(4 characters): ", { hideEchoBack:true  }, { charlist: '$<0-9>'})
 totalAmount = readlineSync.questionInt("Balance: ")
 console.log("User has been created...")
 console.log("")
}


// Displaying user information
function displayUserAccountInfo(){
console.log("***************************");
console.log("")
console.log("** User Account Information **")
  console.log("Account Name: ",userName);
  console.log("Account Number: ",accountNumber);
  console.log("AccountType:", accountType);
  console.log("PIN: ",pinNumber)
  console.log("Balance: ",totalAmount)
  console.log("")
}

// Deposit money to an account
function depositMoney(){
console.log("***************************")
console.log("")  
  console.log("*** Funding Account ***")
  amountDeposited = readlineSync.question("Enter amount to be deposited: ");
  console.log(">>",amountDeposited,"tsh was successful deposited to your bank account")
  totalAmount = parseInt(amountDeposited) + parseInt(totalAmount)
  console.log("Balance: ",totalAmount )
 console.log("")
}


// Withdraw money from an account
function withdrawMoney(){
console.log("***************************")
console.log("")  
  console.log("*** Withdraw Money ***")
  var amountWithdrawn,amountRemain;
  amountWithdrawn = readlineSync.question("Enter amount to be withdrawn>> : ")
  if(totalAmount>amountWithdrawn){
  amountRemain = parseInt(totalAmount) - parseInt(amountWithdrawn)
  console.log(">>",amountWithdrawn,"tsh was successful withdrawn from account")
  console.log("Your remaining balance is",amountRemain)
    totalAmount = amountRemain;
  } else{
    console.log("You don't have enough amount in your account.")
  }
  console.log("")
}

// Displaying total balance of an account
function showActualBalance(){
 console.log("***************************") 
console.log("")
  console.log("*** Account Balance ***")
  totalAmount = parseInt(totalAmount);
  console.log("Total balance is",totalAmount)
  console.log("")
}

while(true){
  
/*
console.log("*** WELCOME ***")
console.log("1. Create User Account i.e Name, Type , Pin.")
console.log("2. Check User Account Information  ")
console.log("3. Deposit Money")
console.log("4. Withdraw Money")
console.log("5. Check Available Balance")
console.log("0. Cancel")
console.log("")
console.log("***************************")
*/

console.log("***************************")
console.log("")
console.log("*** WELCOME ***")

var userAccount = "Create User Account i.e name, type."
var userInfo = "Check User Account Information"
var depo = "Deposit Money"
var withdraw = "Withdraw Money"
var available = "Check Available Balance"

  var listOfServices = [userAccount, userInfo, depo, withdraw, available]
var choice = readlineSync.keyInSelect(listOfServices,"Your Choice: ")
  
if(listOfServices[choice] === userAccount){
createUserAccount()  
} else if(listOfServices[choice] === userInfo){
displayUserAccountInfo()
} else if(listOfServices[choice] === depo){
  depositMoney()
} else if(listOfServices[choice] === withdraw){
  withdrawMoney()
} else if(listOfServices[choice] === available){
  showActualBalance()
} else{
  console.log("Invalid")
}
  
}  
}

// Swahili Language Feature
function selectSwahiliLanguage(){
  //console.log("Kiswahili")
 var readlineSync = require('readline-sync');
//var chalk = require('chalk')
//import chalk from chalk

//import readlineSync from readline-sync;
//import chalk from chalk;
//console.log(("SIMPLE ATM APP"))
// Only Amount here
var totalAmount = 0;
var amountDeposited= 0;

// Global variable for creating user account

var userName;
var accountNumber;
var pinNumber;
var accountType;




/*
while(true){
  console.log("Msa")
}

*/

// Creating User Account
function createUserAccount(){
 console.log("***************************")  
console.log("")  
  console.log("** Kufungua Akaunti Mpya**")
  userName = readlineSync.question("Jina la mtumiaji: ");
  accountNumber = readlineSync.question("Andika namba ya akaunti : ");
  accountType = readlineSync.question("Andika aina ya akaunti: ")
  pinNumber = readlineSync.question("Ingiza namba ya siri( tarakimu 4): ", { hideEchoBack:true  }, { charlist: '$<0-9>'})
 totalAmount = readlineSync.questionInt("Salio halisi: ")
 console.log("Usajili umekamilika...")
 console.log("")
}


// Displaying user information
function displayUserAccountInfo(){
console.log("***************************")
console.log("")  
  console.log("** Taarifa Za Mtumiaji**")
  console.log("Jina la mtumiaji: ",userName);
  console.log("Namba za akaunti: ",accountNumber);
  console.log("Aina ya akaunti:", accountType);
  console.log("Namba ya siri: ",pinNumber)
  console.log("Salio halisi: ",totalAmount)
  console.log("")
}

// Deposit money to an account
function depositMoney(){
console.log("***************************")
 console.log("") 
  console.log("*** Kuweka Pesa ***")
  amountDeposited = readlineSync.question("Andika kiasi unachotaka kuweka kwenye akaunti: ");
  console.log("Umefanikiwa kuweka kiasi cha shilingi",amountDeposited,"katika akaunti yako.")
  totalAmount = parseInt(amountDeposited) + parseInt(totalAmount)
  console.log("Salio:","Tsh",totalAmount,"." )
 console.log("")
}


// Withdraw money from an account
function withdrawMoney(){
console.log("***************************");
  console.log("")
  console.log("*** Kutoa Pesa ***")
  var amountWithdrawn,amountRemain;
  amountWithdrawn = readlineSync.question("Andika kiasi unachotaka kutoa : ")
  if(totalAmount>amountWithdrawn){
  amountRemain = parseInt(totalAmount) - parseInt(amountWithdrawn)
  console.log("Umefanikiwa kutoa kiasi cha shilingi",amountWithdrawn,"katika akaunti yako.")
  console.log("Salio lililobaki ni : ",amountRemain,"Tsh.")
    totalAmount = amountRemain;
  } else{
    console.log("Hauna salio la kutosha kwenye akaunti yako.")
  }
  console.log("")
}

// Displaying total balance of an account
function showActualBalance(){
 console.log("***************************") 
 console.log("") 
  console.log("*** Salio Halisi ***")
  totalAmount = parseInt(totalAmount);
  console.log("Salio la akaunti ni: ",totalAmount,".")
  console.log("")
}

while(true){
  
/*
console.log("*** WELCOME ***")
console.log("1. Create User Account i.e Name, Type , Pin.")
console.log("2. Check User Account Information  ")
console.log("3. Deposit Money")
console.log("4. Withdraw Money")
console.log("5. Check Available Balance")
console.log("0. Cancel")
console.log("")
console.log("***************************")
*/
console.log("***************************")
console.log("")
console.log("*** KARIBU ***")
var userAccount = "Fungua Akaunti"
var userInfo = "Taarifa Za Akaunti"
var depo = "Kuweka Pesa"
var withdraw = "Kutoa Pesa"
var available = "Angalia Salio"
console.log("")

  var listOfServices = [userAccount, userInfo, depo, withdraw, available]
var choice = readlineSync.keyInSelect(listOfServices,"Your Choice: ")
console.log("")
if(listOfServices[choice] === userAccount){
createUserAccount()  
} else if(listOfServices[choice] === userInfo){
displayUserAccountInfo()
} else if(listOfServices[choice] === depo){
  depositMoney()
} else if(listOfServices[choice] === withdraw){
  withdrawMoney()
} else if(listOfServices[choice] === available){
  showActualBalance()
} else{
  console.log("Chaguo siyo sahihi.")
}
  
} 
}
function selectLanguage(question, answers){
  var userChoice = readlineSync.keyInSelect(answers, question)

  if(answers[userChoice] === "English"){
    selectEnglishLangauge()
  } else if(answers[userChoice] === "Kiswahili"){
    selectSwahiliLanguage()
  } else{
    console.log("Select correct language.")
  }
}
for(var i=0; i < languageSelection.length; i++){
  currentItem = languageSelection[i]
  selectLanguage(currentItem.question, currentItem.answers)
}