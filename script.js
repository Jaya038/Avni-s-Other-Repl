function sendMail() {
  window.open('mailto:'+email+'?subject='+fields.subject.value+'&body='+fields.question.value);
}
 
// email that the text should be sent to
var email = 'jparsa345@gmail.com'
 
//make a dict in javascript
var fields = {}
 
//access ids in the html 
document.addEventListener("DOMContentLoaded", function() {
 fields.firstName = document.getElementById('firstName');
 fields.lastName = document.getElementById('lastName');
 fields.subject = document.getElementById('subject');
 fields.question = document.getElementById('question');
})