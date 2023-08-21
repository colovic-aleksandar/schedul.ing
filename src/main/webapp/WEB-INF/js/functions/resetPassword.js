btnreset = document.getElementById("btnResetPassword")
if (btnreset != null) {

    btnreset.onclick = function (e) {
        e.preventDefault();
        //alert("Please confirm mail!");

        var forgetEmail = document.getElementById("forgetEmail").value;

        const formData = new URLSearchParams();
        formData.append('email', forgetEmail);


        if (emailIsValid(forgetEmail)) {
            fetch('http://localhost:8080/password', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formData.toString(),
                })
                .then((res) => res.json())
                .then((data) => {

                    console.log(data);
                    var message = 'msgResetPassword';
                    if (data.msgResetPassword == "Please check your email and click on the provided link to reset your password.") {
                        successFunction(message);
                        var msg = document.getElementById(message);
                        msg.innerText = data.msgResetPassword;
                    } else if (data.msgResetPassword == "Account with that e-mail doesn't exist.") {
                        errorFunction(message);
                        var msg = document.getElementById(message);
                        msg.innerText = data.msgResetPassword;
                    } else if (data.msgResetPassword == "You cannot change password because you haven't verified your e-mail address.") {
                        errorFunction(message);
                        var msg = document.getElementById(message);
                        msg.innerText = data.msgResetPassword;
                    } else if (data.msgResetPassword == "Reset password link is already sent to that e-mail address.") {
                        errorFunction(message);
                        var msg = document.getElementById(message);
                        msg.innerText = data.msgResetPassword;
                    }
                })
        } else {
            var message = 'msgResetPassword';
            errorFunction(message);
            var msg = document.getElementById(message);
            msg.innerText = "E-mail address is not in correct format";

        }

    };
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function msgFunction(message) {
    //    var btn=document.getElementById(button);
    //    btn.style.marginTop="0px";
    console.log(message);
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

function check() {
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;

    if ((password == confirmPassword) && (password.length >= 6 && confirmPassword.length >= 6)) {
        document.getElementById("password").classList.remove("is-invalid")
        document.getElementById("confirmPassword").classList.remove("is-invalid")
        document.getElementById("password").classList.add("is-valid")
        document.getElementById("confirmPassword").classList.add("is-valid")
    } else {

        document.getElementById("password").classList.remove("is-valid")
        document.getElementById("confirmPassword").classList.remove("is-valid")
        document.getElementById("password").classList.add("is-invalid")
        document.getElementById("confirmPassword").classList.add("is-invalid")
    }
    if (password == '' && confirmPassword == '') {
        document.getElementById("password").classList.remove("is-valid")
        document.getElementById("password").classList.remove("is-invalid")
        document.getElementById("confirmPassword").classList.remove("is-valid")
        document.getElementById("confirmPassword").classList.remove("is-invalid")
    }


}