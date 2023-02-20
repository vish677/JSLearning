var num1 = 100;
var num2 = 200;
 var str1 = "Sweety";
 var str2 = "Cutey";

 var name1 = "anil";
 var name2 = "sunil";


function swapvariable(value1, value2){// var value1 = num1, var value2= num2
console.log("before swap",value1, value2);
var temp = value1;
value1 = value2;                 //function defination
value2 = temp;
console.log("After swap:", value1, value2);
return "swapping variable successfully completed";
}
var swapResult = swapvariable(num1, num2);//function call or function invoke
console.log(swapResult);
swapvariable(str1, str2);

swapvariable(name1, name2); 


function showFullName(){
    console.log("My full Name is:Vishal Pawar");
 }
 showFullName();  // Function call or invoke

 //Function with arguments and no return value

function showAge(age){
    console.log("my age is:",age);
 }
 showAge(32);

function fullName(){
     var name = "vishal pawar";
          return name;

 }
 var fName = fullName();
 console.log(fName);
 //Function with argument and return value


 function sumOfNumbers(num1, num2, num3){
 var sum = num1 + num2 + num3;
return sum;
 }
  var sumResult = sumOfNumbers(10.23, 45, 79);
 console.log(sumResult);

function display(num){
    console.log(num);//200
    var result = typeof num;//number
    return result;
}
 var displayresult = display(200);
 console.log(displayresult);

// var num1 = 100;
// var num2 = 200;

// var str1 = "Sweety"; // Cutey
// var str2 = "Cutey"; // Sweety

// var name1= "Akshay";
// var name2 = "Sachin";

// function swapVariables(value1, value2){
//     //var value1 num1, var value2 =num2
//     console.log("Before Swap: ", value1, value2);
//     var temp = value1;
//     value1 = value2;
//     value2 = temp;
//     console.log("After Swap: ", value1, value2);
// }
//     return "Swapping variables successfully completed";
  
//   var swapResult = swapVariables(num1, num2); // Function call or Function invoke
//   console.log(swapResult);
  
//   var swapResult2 =  swapVariables(str1, str2);
//   console.log(swapResult2);