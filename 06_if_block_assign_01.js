function checkEvenOdd (num){
    if (num%2==0){
        return "Even";
    }
    if (num !=0){
        return "odd";
    }
    
    }
     var result = checkEvenOdd(45);
    console.log(`Given number 45 is ${result}`);

    var result = checkEvenOdd(70);
    console.log(`Given number 70 is ${result}`);

    var result = checkEvenOdd(67);
    console.log(`Given number 67 is ${result}`);

    var result = checkEvenOdd(98);
    console.log(`Given number 98 is ${result}`);


    function vote(num) {
        if (num>=18) {
            console.log("you are Eligible for vote");
            console.log(`hey age is ${num}`);
        }

    }
    vote(18);
    vote(20);
    vote(17);
    vote(40);
    
    function string(params) {
        if (params = 10){
            console.log("yes"); 
        }
       
    }
    string("javaScript-ES6");

    