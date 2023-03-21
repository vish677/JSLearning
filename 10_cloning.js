console.log("Deep clone using spread String.json()"); 
const bank = { bankName: "SBI Bank", accountNo: 3456789, bankAddress: 
{ city: "Banglore", PIN: 5556677 } } 
const newBank = JSON.parse(JSON.stringify(bank)); 
newBank.bankAddress.PIN = 999999; 
console.log(`bank==> ${bank.bankAddress.PIN}`);
 console.log(`newBank==> ${newBank.bankAddress.PIN}`);//
console.log("Deep clone using spread operator"); 
const newPlayer = { ...person }; 

// Deep clone using spread operator
 console.log(newPlayer);
  newPlayer.age = 42;
   console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`); 
   console.log(`person ==> ${person.fullName} ${person.age}`);