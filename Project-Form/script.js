const checkBox = document.getElementsByClassName("showPass");

// get the pass input
const passInput = document.getElementById("password");

// checkBox --> [first(div), second(input)]

checkBox[1].addEventListener("change", () => 
{
    // change the type of the input from text to password
    passInput.type = checkBox[1].checked ? "text" : "password";
})
