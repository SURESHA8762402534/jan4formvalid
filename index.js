document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    checkData();
});

const username = document.getElementById("username");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

function checkData() {
    const usernameValue = username.value
    const emailValue = email.value
    const pass1Value = pass1.value
    const pass2Value = pass2.value

    if (usernameValue == "") {
        setError("Username can't be blank");
    } else {
        setSuccess(username);
    }

    if (emailValue == "") {
        setError("Email can't be blank");
    }
    else if (!isEmail(emailValue)) {
        setError("Email is not Valid");
    }
    else {
        setSuccess(email);
    }


    if (pass1Value == "") {
        setError("Password can't be blank");
    }else if(!Password(pass1Value)){
        setError("match pattern")
    }
     else {
        setSuccess(pass1);
    }


    if (pass2Value == "") {
        setError("Password can't be blank");
    }
    else if (pass1Value != pass2Value) {
        setError("Password does not match");
    }
    else {
        setSuccess(pass2);
    }
}
function setError(msg) {
    alert(msg)
}

function setSuccess(u) {
    console.log(u + 'success')
}

function isEmail(e) {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

function Password(p){
    const pas = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
}