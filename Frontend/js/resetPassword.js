function check() {
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;

    if (
        password ==  confirmPassword)
        {
            document.getElementById("password").classList.remove("is-invalid")
            document.getElementById("confirmPassword").classList.remove("is-invalid")
            document.getElementById("password").classList.add("is-valid")
            document.getElementById("confirmPassword").classList.add("is-valid")
        }
        
        else {
            
            document.getElementById("password").classList.remove("is-valid")
            document.getElementById("confirmPassword").classList.remove("is-valid")
            document.getElementById("password").classList.add("is-invalid")
            document.getElementById("confirmPassword").classList.add("is-invalid")
        }
        if(password == '' && confirmPassword == '') {
            document.getElementById("password").classList.remove("is-valid")
            document.getElementById("password").classList.remove("is-invalid")
            document.getElementById("confirmPassword").classList.remove("is-valid")
            document.getElementById("confirmPassword").classList.remove("is-invalid")
        }
    }
