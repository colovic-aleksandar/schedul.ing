<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
    <title>JSP Templates</title>
</head>
<body>
    <h1>First try of ViewResolver</h1>
        <c:forEach var = "user" items = "${users}">
        <p><tr>
        <td><c:out value = "${user.id}"/></td>
        <td><c:out value = "${user.fullName}"/></td>
        <td><c:out value = "${user.email}"/></td>
        <td><c:out value = "${user.password}"/></td>
        <td><c:out value = "${user.dateOfBirth}"/></td>
        <td><c:out value = "${user.role}"/></td>
        </tr></p>
        </c:forEach>
</body>
</html>