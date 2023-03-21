console.log("_______________________Step1___________________________");
console.log("no arg and no return value"); 
let arrow_fun = () =>{
    console.log(" Good Morning, Today is Monday");
}
arrow_fun();

console.log("_____________________Step2________________________");
console.log("3arg and no return value");
let arrow = (arg1, arg2, arg3) => 
console.log(arg1*arg2*arg3);
arrow(5, 5, 2);
arrow(1, 0, 4);

console.log("_________________Step3___________________");
console.log("5arg and return values");
let arrow_addi = (arg1, arg2, arg3, arg4, arg5) =>{
 const result = (arg1+arg2+arg3+arg4+arg5);
    return result
}
const result = arrow_addi(100, 100, 200, 349, 756);
console.log(result);
const results = arrow_addi(" i am"," learning"," ES6", " feature"," in"," depth" ,"m");
console.log(results);
//let addition=(arg1,arg2,arg3,arg4,arg5) => (arg1+arg2+arg3+arg4+arg5);
//console.log(addition("i am"," learning","Es6","feature","in","depth"));