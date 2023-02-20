console.log("*****************Step1********************");
function fullName(){
console.log("my full name is : vishal pawar");
console.log("MY degree is :B.Tech mechanical");
console.log("My target is great devloper");
}
fullName();
console.log("******************Step2***************");

function personalDetails (firstName, lastNmae,collegeName ){
   console.log("first name is : vishal");
   console.log("last name is: pawar");
   console.log("College name is:Nmcoe");

}
personalDetails();
console.log("***************Step3*********************");
var num1 = 'Anushka';
var num2 = "Virat";
var s1 = 1000;
var s2 = 2000;
function swapValueDube(value1, value2){
  console.log("Before swap ",value1, value2); 
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swap" ,value1, value2);
}
swapValueDube(num1, num2);
swapValueDube(s1, s2);

console.log("***************step4****************");
function addThreeNumbers(num1,num2, num3){
    var sum = num1+ num2+ num3
    return sum;
}
 var sumresult = addThreeNumbers(10.23, 400, 40)
console.log("adddition is:",sumresult);
var sumresult = addThreeNumbers("hello ","good ","morning");
console.log("adddition is:",sumresult);