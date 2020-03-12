Survey.StylesManager.applyTheme("bootstrap");

var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"text","name":"question3","title":"What is a word or phrase that you feel fully captures your identity?"},{"type":"rating","name":"question4","title":"On a scale of 1 to 10, how well does this term capture your identity?","rateMax":10}],"title":"What language(s) are you currently using?"},{"name":"page2","elements":[{"type":"radiogroup","name":"question6","title":"What classification does this word or phrase fall under?","hasOther":true,"choices":[{"value":"item1","text":"Race"},{"value":"item2","text":"Culture/Ethinicity"},{"value":"item3","text":"Nationality"},{"value":"item4","text":"Sexual Orientation"},{"value":"item5","text":"Physical Attribute"}]}],"title":"What language(s) are you currently using?"},{"name":"page3","elements":[{"type":"text","name":"question1","title":"What is a word or phrase that you feel fully captures your identity?"},{"type":"text","name":"question5","title":"Can you describe a time where you experienced bias based on this classification?"}],"title":"What stereotypes, if any, are associated with this term?"},{"name":"page4","elements":[{"type":"comment","name":"question2","title":"Describe an experience where you felt included by this term."}],"title":"Describe an experience where you felt included by this term."},{"name":"page5","elements":[{"type":"comment","name":"question7","title":"Describe an experience where you felt excluded by this term."}],"title":"Describe an experience where you felt excluded by this term."},{"name":"contact","elements":[{"type":"text","name":"name","title":"Name:","description":"This is optional."},{"type":"text","name":"email","title":"Your e-mail","description":"This is optional."}],"title":"Please enter your name and e-mail"}],"showTitle":false,"showPageTitles":false,"showPageNumbers":true,"showQuestionNumbers":"off","showProgressBar":"bottom"}

// TODO: Update to send survey response to email.
function sendDataToServer(survey) {
    //send Ajax request to your web server.
    // alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});