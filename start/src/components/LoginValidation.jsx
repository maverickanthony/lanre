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
        error.password = "Incorrect password"
    }
    else {
        error.password = ""
    }
    return error
}