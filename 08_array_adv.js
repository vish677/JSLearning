const arrayOfNames = ["Anil", "Sunil", "Sita", "Bill", "Elon"]; 
const result = arrayOfNames.join(": ");
 console.log(result); 
 console.log(typeof result);
 console.log(arrayOfNames.length); 

 console.log("Resize an array");
  arrayOfNames.length = 3; 
  console.log(arrayOfNames.length);
   console.log(arrayOfNames);

    arrayOfNames.length = 7; 
    console.table(arrayOfNames);

    const array = [3, 4, 5, 6, 7, 2, 4, 5];
    const setofElements = new Set();

    for (const element of array) {
        setofElements.add(element);
    }
    console.log(setofElements);
    console.table(setofElements);

    arrayOfUniqueElements = [...new Set(array)]; 
    console.log(arrayOfUniqueElements);