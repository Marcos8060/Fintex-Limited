var names = document.getElementById("name");
var email = document.getElementById("email");
var number = document.getElementById("number");
var dates = document.getElementById("dates")

function formInput(){
if(names.value == ''){
    alert("Please enter your name")
}else{
    alert(`Thank you ${names.value} for reaching out to us. We will contact you on the ${dates.value}`);
}
}