console.log("ArrayAssignments............");
console.log("============Step1==================================-");
const arraySeasonalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log( ` First Elements in given array is: ${arraySeasonalFruits[0]}`);

console.log(`Last Elements in Given array is: ${  arraySeasonalFruits [arraySeasonalFruits.length-1]}`);
console.log("=============Step2======================");
console.log(" Array After adding papaya before Banana");
arraySeasonalFruits.unshift("Papaya");
console.log( arraySeasonalFruits);
console.log("===================Step3================");
console.log("Removing Mango from array then array is");
 const removeArray = arraySeasonalFruits.splice(4, 1);
 console.log(`Remove 'mango' from array is :${removeArray}`);
 console.log(arraySeasonalFruits);


 console.log("==================Step4========================");
 console.log("Add Element or insert an element 'pineapple' at the last position");
 arraySeasonalFruits.push("pineapple");
 console.log(arraySeasonalFruits);


 console.log("====================Step5======================");
 console.log("Insert an element -'Dragon' Fruit before 'Water Melon'");

 arraySeasonalFruits.splice(4, 0, "Dragon Fruit")
 console.log(arraySeasonalFruits);


console.log("=========================Step6=================");
console.log("Replace an element 'Orange' with 'kiwi'");
arraySeasonalFruits.splice(2, 1,"Kiwi");
console.log(arraySeasonalFruits);

console.log("===================Step7======================");
console.log("Log the elements starting from index 1 to 4 ");
 const subArray = arraySeasonalFruits.slice(1, 4);
console.log(subArray);

console.log("=======================Step8======================");
console.log("Only select last 3 element and log on console : Use the length property");
 const lastElement = arraySeasonalFruits.slice(3);
console.log(` Last 3 fruits :${lastElement}`);
console.log(arraySeasonalFruits);
