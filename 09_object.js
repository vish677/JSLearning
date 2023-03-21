let student = {
    firstName: "Vishal",
    lastName: "pawar",
    isWorking: true,
    age: 22,
    collegeName: "ABc",
    id: 12345668,
    address: {
        street:"Wakad",
        city: "Pune",
        pin:"431204"

    },
    school: "Podar  School",
    friends: ["bill","stew","Elon"],
    show: function(){
        console.log("I am show() function");
    },

    addressDetails: function(){
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
     }
}
let resultAddress = student.addressDetails();
console.log(resultAddress);
console.log(student.friends);
student.show();
console.log(student.friends[student.friends.length-1]);
console.log(student.address.city);

student.address.pin = 431205;

student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}

console.log(student.marks);