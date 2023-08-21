const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const form = document.getElementById('form');
var inputEmail = document.getElementById("emailSignin");
var messageBox = document.getElementById("emailInputCheckup");
var btnSignin = document.getElementById("btnSignin");
var btnSignup = document.getElementById("btnSignup");

//radi funkcija samo je problem sto pri svakom novotestiranom email-u salje mail da se potvrdi sto dodatno 
//usporava, dodaje delay ispisu
if (inputEmail != null) {
    inputEmail.addEventListener('focusout', (event) => {
        const dummyData = new URLSearchParams();
        dummyData.append('email', event.target.value);
        dummyData.append('password', "signupPassword");
        dummyData.append('firstName', "signupFirstName");
        dummyData.append('lastName', "signupLastName");
        fetch('http://localhost:8080/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: dummyData.toString(),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data["msgSignup"] === "Verification e-mail is already sent." ||
                    data["msgSignup"] === "Please check your e-mail adress") {
                    messageBox.innerHTML = "There is no user with this email!";
                } else {
                    messageBox.innerHTML = "";
                }
            })

    })
}


window.onload = function () {
    signInButton.style.borderBottom = "2px solid white";
}
if (signUpButton != null) {
    signUpButton.addEventListener('click', () => {
        form.classList.add("right-panel-active");
        signUpButton.style.borderBottom = "2px solid white";
        signInButton.style.borderBottom = "none";
    });
}
if (signInButton != null) {


    signInButton.addEventListener('click', () => {
        form.classList.remove("right-panel-active");
        signUpButton.style.borderBottom = "none";
        signInButton.style.borderBottom = "2px solid white";
    });
}
if (btnSignin != null) {


    btnSignin.onclick = function (e) {
        e.preventDefault();
        var signinEmail = document.getElementById("emailSignin").value;
        var signinPassword = document.getElementById("passwordSignin").value;



        const formData = new URLSearchParams();
        formData.append('username', signinEmail);
        formData.append('password', signinPassword);
        fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            })
            .then((res) => res.json())
            .then((data) => {

                function msgFunction() {
                    var btn = document.getElementById("btnSignin");
                    btn.style.marginTop = "0px";
                    var msg = document.getElementById("singInMsg");
                    msg.classList.add("alert");
                    msg.classList.remove("d-none");
                    msg.classList.add("d-block");
                }

                function successFunction() {
                    window.location.href = 'http://localhost:8080/HomePage';
                }

                function errorFunction() {
                    msgFunction();
                    var msg = document.getElementById("singInMsg");
                    msg.classList.add("alert-danger");
                }

                if (data.msgType == "success") {
                    successFunction();
                } else if (data.msgType == "error") {
                    errorFunction();
                    var msg = document.getElementById("singInMsg");
                    msg.innerText = data.message;

                }
            })
    };
};

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function msgFunction(message) {
    var msg = document.getElementById(message);
    msg.classList.add("alert");
    msg.classList.remove("d-none");
    msg.classList.add("d-flex");
    msg.classList.add("justify-content-center");
    msg.classList.add("flex-row");

}

function successFunction(message) {
    msgFunction(message);
    var msg = document.getElementById(message);
    msg.classList.remove("alert-danger");
    msg.classList.add("alert-success");
}

function errorFunction(message) {
    msgFunction(message);
    var msg = document.getElementById(message);
    msg.classList.remove("alert-success");
    msg.classList.add("alert-danger");

}

function noticeFunction(message) {
    msgFunction(message);
    var msg = document.getElementById(message);
    msg.classList.remove("alert-success");
    msg.classList.remove("alert-danger");
    msg.classList.add("alert-secondary");
}
if (btnSignup != null) {

    btnSignup.onclick = function (e) {
        e.preventDefault();
        //alert("Please confirm mail!");

        var signupFirstName = document.getElementById("firstNameSignup").value;
        var signupLastName = document.getElementById("lastNameSignup").value;
        var signupEmail = document.getElementById("emailSignup").value;
        var signupPassword = document.getElementById("passwordSignup").value;


        const formData = new URLSearchParams();
        formData.append('email', signupEmail);
        formData.append('password', signupPassword);
        formData.append('firstName', signupFirstName);
        formData.append('lastName', signupLastName);

        if (document.getElementById("firstNameSignup").value === "") {
            var message = 'msgSignup';

            errorFunction(message);
            var msg = document.getElementById(message);
            msg.innerText = "Please enter your first name.";
        } else
        if (document.getElementById("lastNameSignup").value === "") {
            var message = 'msgSignup';

            errorFunction(message);
            var msg = document.getElementById(message);
            msg.innerText = "Please enter your last name.";
        } else
        if (emailIsValid(signupEmail) && (signupPassword.length >= 6)) {
            fetch('http://localhost:8080/signup', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formData.toString(),
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(signupFirstName);
                    console.log(data);
                    var message = 'msgSignup';
                    if (data.msgSignup == "Please check your e-mail adress") {
                        successFunction(message);
                        var msg = document.getElementById(message);
                        msg.innerText = data.msgSignup;
                    } else if (data.msgSignup == "User account already exists. Please sign in.") {
                        errorFunction(message);
                        var msg = document.getElementById(message);
                        msg.innerText = data.msgSignup;

                    } else if (data.msgSignup == "Verification e-mail is already sent.") {
                        errorFunction(message);
                        var msg = document.getElementById(message);
                        msg.innerText = data.msgSignup;

                    }
                })
        } else {
            var message = 'msgSignup';
            if (!emailIsValid(signupEmail)) {
                errorFunction(message);
                var msg = document.getElementById(message);
                msg.innerText = "E-mail address is not in correct format";
            } else {
                errorFunction(message);
                var msg = document.getElementById(message);
                msg.innerText = "Password must contain 6 or more characters";
            }
        }
    }
};

var passwordLogin = document.getElementById("passwordSignin");
if(passwordLogin!=null)
{


passwordLogin.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnSignin").click();
    }
});
}

var passwordSignup = document.getElementById("passwordSignup");
if(passwordSignup !=null)
{


passwordSignup.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnSignup").click();
    }
});
}