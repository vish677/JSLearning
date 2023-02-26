console.log(`Start`);
var num = 10;
if(num>0){
    console.log(`inside if`);
    console.log(`Number is Positive ${num}`);
}
console.log(`End`);

var ageForVote = 20;
if (ageForVote >= 18) {
console.log("you are eligible for voting");
console.log(`Age is : ${ageForVote}`);    
}
console.log("End of next if block");

function checkEvenOdd (num){
if (num%2==0){
    return "Even";
}
if (num !=0){
    return "odd";
}

}
 var result = checkEvenOdd(45);
console.log(`Given number 45 is ${result}`);


var num1 = -5;
if (num1>0) {
    console.log((`number ${num1} is positive`));
    
}else{
    console.log(`number ${num1} is negative`);
}

var num1 = 5;
if (num1>0) {
    console.log((`number ${num1} is positive`));
    
}else{
    console.log(`number ${num1} is negative`);
}

function maleEligibility(gender, age, boyName) {
    if (gender = "male" && age>21){
        console.log(`you are Eligible `);
    }
    else{
        console.log(`you are not Eligible`);
    }
}
maleEligibility("male", 25, "Billgates");
maleEligibility("male", 20, "Anil");