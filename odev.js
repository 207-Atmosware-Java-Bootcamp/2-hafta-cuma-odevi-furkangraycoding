

var password = prompt("Enter your password");
var repassword = prompt("Enter your password again");

while(!(password == repassword)){
if (password == repassword) {
    break;

} else {
    repassword=prompt("Please Enter your password again")
}
}
alert("Login Successful")
document.write("password : " + password);





