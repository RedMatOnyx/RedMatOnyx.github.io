let day = new Date().getDay();
if (day == 6) {
    // document.querySelector(".message").style.backgroundColor = "pink";
    // document.querySelector(".message").style.visibility = "visible";

document.querySelector(".message").style.display = "block";
}
// To change the display property in JavaScript, consider the use of .style.display = "block" in a selection structure 
// where the condition looks at the day of the week through the Date() object and getDay() method.

