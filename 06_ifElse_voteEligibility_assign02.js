function voteEligibility(num) {
    if (num >=18) {
        console.log(`Are you eligible for vote`);
        console.log(`given ${num} is eligible for vote`);
        
    }else{
        console.log(`hey ${num} is not eligible for vote `);
    }
    if (num==undefined) {
        console.log(`hey ${num} is provide valid data`);

        
    }
    if (isNaN(num)) {
        console.log(`hey${num} is provide valid data`);
    }
   if (typeof num !="number" ) {
console.log("not a valid number");    
   }

   
   
   

   
   
}
voteEligibility(45);
voteEligibility(undefined);
voteEligibility(null);
voteEligibility(NaN);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility("vishal");
