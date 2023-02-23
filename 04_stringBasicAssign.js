function stringBasics(){
    console.log("my dream company is: Wipro");
}
stringBasics();

function hobbies(){
    console.log("My three hobbies: Paying Ckrickets, running, Travling");
}
hobbies();

console.log("split() method");
var hobbies = "Paying Ckrickets, running, Travling";
var splitResult = hobbies.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);