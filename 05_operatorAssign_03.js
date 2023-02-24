console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
function tcs(gradScore, hscScore, sscScore, candidateName) {
      var result = Tcs = "gradScore" >=70 || "hscScore" >=80 || "sscScore" >90 ? `congrates${candidateName} you are eligible for TCS interview`: "you are not eligible better luck next time" ;
      return result;
}
 var result = tcs(80,86,90,"Vishal");
 console.log(result);

 var resul = tcs (70, 65, 55,"Anil");
 console.log(resul);

 var results = tcs(4,79,88,"Sunil");
 console.log(results);