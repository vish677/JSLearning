function tcsInterview(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >=70|| hscScore >=80 || sscScore >90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    }else{
        console.log(`hey ${candidateName} unfortunately you are not eligible for interview`);
    }
}
tcsInterview(80, 86, 90, "Vishal");
tcsInterview(70, 65, 55, "Anil");
tcsInterview(60, 79, 88, "Sunil");
tcsInterview(50, 76, 70, "Sujal");