<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@	taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<html lang="en">
<head>
    <!-- custom css -->
<link rel="stylesheet" href="../css/resetPassword.css">

<!-- icon -->
<link rel="icon" type="image/png" href="../resources/favicon-32x32.png" sizes="32x32" />
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,700&display=swap"
    rel="stylesheet">
<!-- font awesome css -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<link rel="stylesheet" href="../resources/css/all.css" />
<link rel="stylesheet" href="../css/index.css" />


<!-- bootstrap -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

<!-- DATEDROPPER AND JQERY -->
<link rel="stylesheet" href="../css/datedropper.css" />
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
</script>
<script src="../js/datedropper.js"></script>
<!-- Animate CSS CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<style>
    .resetLogoPicture{
        width: 200px;
        height: auto;
    }
</style>
<title>Schedul.ing</title>
</head>
<body>
<div class="container mt-5 ">
    <div class="mt-2 row d-flex justify-content-center align-items-center">

        <div class="col-sm-12 col-lg-6">
            <div class="d-flex justify-content-center mb-5">
            <img class="resetLogoPicture" src="Resources/enjoyingLogo/1x/Asset 1.png" alt="Logo" />
        </div>
            <div id="card" class="card reset__password">
                <div id="cardBody" class="card-body">

                 <c:if test="${not tokenExpired}">
                    <h5 class="card-title">Change Password</h5>
                    <p class="card-text">A secure password must be at least 6 characters long!</p>
                    <form:form modlAttribute="password" method="post">
                        <div class="form-group">
                            <input class="form-control"  id="password" name="password" type="password" pattern=".{6,}" title="Six or more characters" placeholder="New password" onkeyup="check();">
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="confirmPassword" name="matchingPassword" type="password" pattern=".{6,}" title="Six or more characters" placeholder="Confirm new password" onkeyup="check();">
                        </div>
                            <button id="btnChangePassword" class="btn btn-primary">Reset password</button>

                    </form:form>
                 </c:if>

                   <c:if test="${not empty message}">
                           <c:choose>
                            <c:when test ="${msgType == 'success'}">
                               <div class="alert alert-success mt-3 align-items-center"><c:out value="${message}"/></div>
                               <script>
                                      setTimeout(function()
                                      {
                                          window.location.href = "http://localhost:8080/login";
                                      }, 2000);
                              </script>
                            </c:when>

                            <c:when test = "${msgType == 'error'}">
                               <div id="errorAlert" class="alert alert-danger mt-3 align-items-center"><c:out value="${message}"/></div>
                               <script>
                                     var errorAlert = document.getElementById("errorAlert");
                                     if(errorAlert.innerHTML == "Your reset token has expired. Please send new request for password reset.")
                                     {
                                        var card = document.getElementById("card");
                                        var cardBody = document.getElementById("cardBody");
                                        card.classList.remove("card");
                                        card.classList.remove("reset__password");
                                        cardBody.classList.remove("card-body");
                                        setTimeout(function()
                                        {
                                             window.location.href = "http://localhost:8080/login";
                                        }, 3000);
                                     }
                               </script>
                            </c:when>
                            <c:otherwise> <!-- notice -->
                               <div class="alert alert-secondary mt-3 align-items-center"><c:out value="${message}"/></div>
                            </c:otherwise>
                         </c:choose>
                   </c:if>





                </div>
            </div>
        </div>
    </div>
</div>


<script src="js/resetPassword.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
    </script>
    <script src="../js/resetPassword.js"></script>
</body>
</html>