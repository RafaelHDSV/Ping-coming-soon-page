let email = document.getElementById('email')
let labelEmail = document.getElementById('label_email')
let emailValidation = /\S+@\S+\.\S+/;

function verification() {
    if (emailValidation.test(email.value) == false || email.value == '') {
        labelEmail.classList.remove('hide')
        email.style.border = '2px solid var(--light_red)'
    } else {
        labelEmail.classList.add('hide')
        email.style.border = '1px solid var(--pale_blue)'
    }
}