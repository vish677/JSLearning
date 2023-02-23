console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
function maleMarriageEligibility(gender,age,boyName){
var result = gender=="Male" && age>=21 ? `Hey ${boyName} you are eligible for marriage` : "No Better Luck Next Time";
return result;

}
 var result = maleMarriageEligibility("Male",25,"Billgates");
 console.log(result);
 var result = maleMarriageEligibility("Male",17,"Stew jobs");
 console.log(result);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

 function femaleMarriageEligibility(gender, age, girlName){
  var result = gender = "Female" && age>18 ? `Hey ${girlName} you are eligible for marriage`: "No Better Luck Next Time";
return result;
 }
   var result = femaleMarriageEligibility("Female",16,"jenifer");
   console.log(result);

  var result = femaleMarriageEligibility("Female",27,"Malinda Gates");
 console.log(result);