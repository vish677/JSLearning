 function voteEligibility(age) {
 
    if (age>=21) {
        // console.log(`given ${age} is eligible for voting`);
        // 
     } else {
         console.log(`given ${age} is not eligible for voting`);
         
    

    //   (age < 0) 
    // console.log("given ${age} data is Invalid"); 
//    
    
    
    // (age==undifined)
    //    console.log(`given ${age} data is invalid`) ;
    //  }
    }
}

  voteEligibility(45);
voteEligibility(17);
 voteEligibility(8);
voteEligibility(20);
voteEligibility(200);
//   / voteEligibility(-10);
//  voteEligibility(undefined);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

 function gradeCalculation(marks) {
    if (marks >= 90) {
        console.log(`Funtastic marks : ${marks}, your grade is A+ `);
        

    (marks >= 75 && marks < 90) 
        console.log(`Excellent marks ${marks}, your grade is A`);
        
    
     (marks >= 50 && marks <75) 
      console.log (`Good marks ${marks}, your grade is C, Need improvement `);
       
    
     (marks == 0 || marks < 0 || marks > 100) 
       console.log( `${marks} Please provide the valid marks`);

      
      
      
// 
    //    (marks==null)
    //    console.log(`${marks} Please provide the valid marks`);
// 
    //    (marks==Eighty)
    //    console.log(`${marks} Please provide the valid marks`);
// 
    }
    if (marks==NaN) {
        console.log(`${marks} Please provide the valid marks `);
      }
            
}
    
    
 
 gradeCalculation(0);
 gradeCalculation(150);
 gradeCalculation(-7);
 gradeCalculation(98);
 gradeCalculation(80);
 gradeCalculation(90);
 gradeCalculation(35);
 gradeCalculation(29);
 gradeCalculation(64);
 gradeCalculation(49);
 gradeCalculation(91);
  gradeCalculation(NaN);
//  gradeCalculation(null);
//  gradeCalculation(Eighty);
// 