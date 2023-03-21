let student = {
    firstName: "Prashant",
    lastName: "Deshmukh",
    isWorking: true,
    age: 22,
    collegeName: "ABC",
    id: 123456
}
// 
// let firstName = student.firstName;
// let isWorking = student.isWorking;
// let age = student.age;
// let collegeName = student.collegeName;

let { firstName, isWorking, age, collegeName, id} = student; // Object Destructuring
console.log(`Extracted values from object is: isWorking ${isWorking}  age ${age}  collegeName ${collegeName}`);


//Array Destructuring
const array = [5, 6, 7, 8, 9];
let [num1, num2, num3] = array;
console.log(num1, num2, num3);