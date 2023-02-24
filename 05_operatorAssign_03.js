console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
function tcs(gradScore, hscScore, sscScore, candidateName) {
      var result = (gradScore>=70 || hscScore>=80 || sscScore>90) ? `congrates ${candidateName} you are eligible for TCS interview`: "you are not eligible better luck next time" ;
     console.log(result);
      

}
tcs(80,86,90,"Vishal");
 

tcs (70, 65, 55,"Anil");

 tcs(4,79,88,"Sunil");
 