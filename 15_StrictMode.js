`use strict`
//undeclared variable is not allowed.
massage = "hello";// throws an error
//myName = "Virat"; // Not allowed
let myName = "Virat";
console.log(myName);
// delete myName; //  Not allowed

//  person = {  // Not allowed to define an object without var, let and const
//     firstName: "Virat",
//     lastName: "Kohli",
//     age : 33
// }

const student = {
    rollNo: 34,
    age: 17,
    city: "PUNE"
}
student = null;
// delete student; // Not allowed in strict mode


// Rest parameter is allways end
function show(arg1,arg2, ...arg3) {
    console.log(arg1);
    console.log(arg2);
}
show(100, 200, 300);