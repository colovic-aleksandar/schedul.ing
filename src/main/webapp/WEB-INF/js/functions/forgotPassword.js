var modal = document.getElementById("manageModal");
var btnManage = document.getElementById("btnManage");
var span = document.getElementsByClassName("close")[0];
var close = document.getElementById("close");
var forgetEmail = document.getElementById("forgetEmail");
var msgResetPassword = document.getElementById("msgResetPassword");
if (btnManage != null) {


  btnManage.onclick = function () {
    modal.style.display = "block";

  }
}

if(span!=null)
{
  span.onclick = function () {
    modal.style.display = "none";
    forgetEmail.value = "";
    msgResetPassword.classList.remove("d-flex");
    msgResetPassword.classList.add("d-none");
  }

}

 