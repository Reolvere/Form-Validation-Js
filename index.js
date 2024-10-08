//get the form element
const form = document.querySelector("form")

//add event listener to the form element
form.addEventListener("submit", (event) => {
    event.preventDefault()

    //get the email input
    const emailInput = document.querySelector(".email")
    //get the country input
    const countryInput = document.querySelector(".country")
    //get the zip-code input
    const zipCodeInput = document.querySelector(".zip-code")
    //get the password input
    const passwordInput = document.querySelector(".password")
    //get the confirmPassword input
    const confirmPasswordInput = document.querySelector(".confirm-password")

    //match the email value with regex
    const isValidEmail = email => {
    //regex for email validation 
    const emailRegexPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //return true if the email match the regex
    return emailRegexPattern.test(String(email).toLowerCase())
    }
    //validate the form 
    const isValid = (element) => {

        //get the error div
        const inputWrapper = element.parentElement
        const errorDisplay = inputWrapper.querySelector(".error")

        //remove the message in the error div
        errorDisplay.innerText = ''

        //remove the red border color of the input
        element.classList.remove("invalid")

        //add the green border color to the input
        element.classList.add("valid")

    }

    //show the error
    const isInvalid = (element, message) => {

        //get the error div
        const inputWrapper = element.parentElement
        const errorDisplay = inputWrapper.querySelector(".error")

        //display the message in the error div
        errorDisplay.innerText = message
        //add the red border color to the input
        element.classList.add("invalid")
    }

    //email validation
    if(emailInput.value === ''){
        isInvalid(emailInput, 'Add your email')
    } else if (!isValidEmail(emailInput.value)) {
        isInvalid(emailInput, 'enter a valid email')
    } else {
        isValid(emailInput)
    }

    //country validation
    if(countryInput.value === ''){
        isInvalid(countryInput, 'Add the country')
    } else {
        isValid(countryInput)
    }

    //zip-code validation
    if(zipCodeInput.value === ''){
        isInvalid(zipCodeInput, 'Add zip-code')
    } else {
        isValid(zipCodeInput)
    }

    //password validation 
    if(passwordInput.value.length < 8) {
        isInvalid(passwordInput, 'At least 8 characters')
    } else if(passwordInput.value === "") {
        isInvalid(passwordInput, 'Add the password')

    } else {
        isValid(passwordInput)
    }

    //password confirmation validation 
    if(confirmPasswordInput.value === ""){
        isInvalid(confirmPasswordInput, "Confirm the password")
    } else if (confirmPasswordInput.value !== passwordInput.value){
        isInvalid(confirmPasswordInput, "Passwords don't match")
    } else {
        isValid(confirmPasswordInput)
    }
})