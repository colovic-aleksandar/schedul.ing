<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang="en">
<head>
    <!-- custom css -->
<link rel="stylesheet" href="../css/forgotPassword.css">

<!-- icon -->
<link rel="icon" type="image/png" href="../resources/favicon-32x32.png" sizes="32x32" />
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,700&display=swap"
    rel="stylesheet">
<!-- font awesome css -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
<link rel="stylesheet" href="../resources/css/all.css" />

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

<title>Schedul.ing</title>
</head>
<body>
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-sm-12 col-lg-6">
            <div class="card forgot__password">
                <div class="card-body">
                    <h5 class="card-title">Forgot password?</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <form:form modelAttribute="password" method="post">
                        <div class="form-group">
                            <input class="form-control" id="forgetEmail" name ="email" type="email" placeholder="Enter your email">
                        </div>
                         <c:if test="${not empty message}">
                               <c:choose>
                                <c:when test ="${msgType == 'success'}">
                                   <div class="alert alert-success"><c:out value="${message}"/></div>
                                </c:when>

                                <c:when test = "${msgType == 'error'}">
                                   <div class="alert alert-danger"><c:out value="${message}"/></div>
                                </c:when>
                                <c:otherwise> <!-- notice -->
                                   <div class="alert alert-secondary"><c:out value="${message}"/></div>
                                </c:otherwise>
                             </c:choose>
                       </c:if>


                            <button class="btn btn-primary">Send email</button>
                    </form:form>


                </div>
            </div>
        </div>
    </div>
</div>



<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
    </script>
    <script src="js/resetPassword.js"> </script>
</body>
</html>