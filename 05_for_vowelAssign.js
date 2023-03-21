console.log("Task 2 : Finding the lenght of last word of the String");
console.log("---------------------------------------------------------------");
 var lastWordCount = function (str){ 

    var counter = 0;
    for (let index = str.length -1; index > 0; index--){
      if (str(index) == " ")
       {
        break;
      }
else      
    {
        ++counter;
    }
}

 return `You enter string is ${str} and last word count is ${counter}`;
}

 lastWordCount();