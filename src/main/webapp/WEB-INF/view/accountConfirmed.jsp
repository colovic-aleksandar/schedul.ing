<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@	taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<html lang="en">

<head>
    <title>Email verification</title>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
</script>
</head>

<body>
    <c:if test="${not empty message}">
           <c:choose>
            <c:when test ="${msgType == 'success'}">
               <div class="alert alert-success d-flex align-items-center justify-content-center" ><c:out value="${message}"/></div>
               <script>
                       setTimeout(function()
                       {
                           window.location.href = "http://localhost:8080/login";
                       }, 2000);
               </script>
            </c:when>

            <c:when test = "${msgType == 'error'}">
               <div class="alert alert-danger d-flex align-items-center justify-content-center"><c:out value="${message}"/></div>
            </c:when>
            <c:otherwise> <!-- notice -->
               <div class="alert alert-secondary d-flex align-items-center justify-content-center"><c:out value="${message}"/></div>
            </c:otherwise>
         </c:choose>
   </c:if>

</body>
</html>