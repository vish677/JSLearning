const setOfNums = new Set ();
setOfNums.add(3);
setOfNums.add(4);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);


console.log(setOfNums.size);
setOfNums.delete(2);
console.log(setOfNums);
setOfNums.delete(8);
console.log(setOfNums);

//setofNums.clear();
console.log(setOfNums.values);
console.log("Traversing set");
for (const element of setOfNums) {
    console.log(element);
}
