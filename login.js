//$('.message a').click(function(){
//   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//});

var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username === "admin" && password === "admin"){
alert ("Login successfully");
window.location = "proctor.html"; // Redirecting to other page.
return false;
}
else{
alert("Enter Correct Cerdentials");
}}
//attempt --;// Decrementing by one.
//alert("You have left "+attempt+" attempt;");
//// Disabling fields after 3 attempts.
//if( attempt === 0){
//document.getElementById("username").disabled = true;
//document.getElementById("password").disabled = true;
//document.getElementById("submit").disabled = true;
//return false;
//}
//}
//}