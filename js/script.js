// define variables
const form = document.querySelector('.form')
const btn = document.getElementById('submit')
const message = form.querySelector('small')



form.addEventListener('submit', function (e) {
    e.preventDefault()
    // getting the element value
    const emailValue = document.querySelector('#email').value
    checkEmail(emailValue)
})

// Check Email is valid or invalid
function checkEmail(email) {
    if (email == '' || email == 0) {
        message.classList.toggle('form__message-valdate-active')
        return message.textContent = "Enter the email. The field is empty"
    }

    else if (isValidEmail(email)) {
        message.classList.toggle('form__message-valdate-active')
        message.style.color = 'green'
        message.textContent = "Congratulations, you have successfully registered"
    }

    else {
        message.classList.toggle('form__message-valdate-active')
        message.textContent = "Error, please check your email"
    }
}

// check valdate email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}