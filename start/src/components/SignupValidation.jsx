export const validation = (values) => {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    

    if(values.email === "") {
        error.email = "Email address cannot be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Incorrect email address format"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Please fill in password"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password must contain an uppercase, lowercase, number & special character."
    }
    else {
        error.password = ""
    }

    if(values.passwordconfirm !== values.password) {
        error.passwordconfirm = "Passwords does not match"
    }
    else if (values.passwordconfirm === "") {
        error.passwordconfirm = "Please confirm password"
    }
    else {
        error.passwordconfirm = ""
    }

    if(!values.isChecked) {
        error.isChecked = "Please accept the terms before proceeding"
    }
    else {
        error.isChecked = ""
    }
    return error
}