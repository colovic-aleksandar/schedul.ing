<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>

<html lang="en" data-mode="light">

<head>
    <!-- meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <script src="js/bundles/jquery-3.5.1.min.js"></script>
    <!-- icon -->
    <link rel="icon" type="image/png" href="Resources/favicon-32x32.png" sizes="32x32" />
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,700&display=swap"
        rel="stylesheet">
    <!-- font awesome css -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet" />
    <link rel="stylesheet" href="Resources/css/all.css?cb=1611843355362" />

    <!-- hamburgers css -->
    <link href="Resources/hamburgers-master/dist/hamburgers.css" rel="stylesheet">

    <!-- bootstrap -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous">

    <!-- custom css -->
    <link rel="stylesheet" href="css/homePage.css?cb=1611843355362">
    <!-- <link rel="stylesheet" href="css/adminPage.css?cb=1611843355362"> -->

    <!-- DATEDROPPER AND JQERY -->
    <link rel="stylesheet" href="css/datedropper.css?cb=1611843355362" />
    <!-- Animate CSS -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Schedul.ing</title>
</head>

<body>
    <div class="wrapper">
        <aside class="sidebar">
            <header class="s_toggle">
                <div class="sidebar_header">
                    <a href="http://localhost:8080/HomePage"><img id="asset" src="Resources/enjoyingLogo/2x/asset.png"
                            alt="Logo" class="sidebar_header_logo" />
                    </a>
                </div>
                <button class="navbar-toggler hamburger--spring btn_toggle" type="button"
                    data-toggle="collapse" data-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </header>
            <nav class="collapseContainer" id="navbarToggleExternalContent">
                <ul>
                    <li class="dropdown wrapper__main_nav--buttonContainer-sd">
                        <button class="btn wrapper__main_nav--button-sd" type="button">
                            <img alt="" src="Resources/default_avatar.png" id="userImageSmall"
                                class="wrapper__main_nav--avatar-sd">
                                <a href="./UserPage.html" id="headerNameSmall"
                                class="wrapper__main_nav--button-sd-text"></a>
                        </button>
                    </li>
                    <li class="sidebar__item home selected">
                        <i class="far fa-list-alt sIcon selected"></i>
                        <a class="sText t_Dashboard selected" href="./HomePage.html">Dashboard</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="far fa-calendar sIcon"></i>
                        <a class="sText t_Events" href="eventsPage">Events</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="fas fa-users sIcon sUIcon"></i>
                        <a class="sText t_Users" href="UsersPage">Users</a>
                    </li>
                    <c:if test="${not empty pageContext.request.userPrincipal}">
                        <c:if test="${pageContext.request.isUserInRole('ROLE_ADMIN')}">
                            <li class="sidebar__item">
                                <i class="fas fa-user-cog sIcon"></i>
                                <a class="sText t_Admin" href="admin">Admin Panel</a>
                            </li>
                        </c:if>
                    </c:if>
                    <li class="sidebar_logout">
                        <i class="fas fa-long-arrow-alt-left sidebar_logout-icon"></i>
                        <a class="sidebar_logout-text" href="login">Logout</a>
                    </li>
                </ul>
            </nav>
        </aside>
        <div class="wrapper__main">
            <nav class="navbar wrapper__main_nav">
                <div class="wrapper__main_nav--buttonContainer">
                    <button class="btn wrapper__main_nav--button" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span id="headerName" class="inverted">Username</span>
                        <img class="wrapper__main_nav--avatar inverted" id="userImage"
                            src="<c:out value='${user.photo}'/>" alt="">
                    </button>
                    <menu class="dropdown-menu white " aria-labelledby="dropdownMenuButton">
                        <ul class="dropdown-list">
                            <li><a class="dropdown-item" href="UserPage">View Profile</a></li>
                            <li><a class="dropdown-item " href="logout">Log Out</a></li>
                            <li>
                                <a id="button-check" class="dropdown-item  white-font" href="#">
                                    <span id="off-on" class=""></span> Dark Mode
                                </a>
                            </li>
                        </ul>
                    </menu>
                </div>
            </nav>
            <main class="container">
                <div class="wrapper__main_row row">
                    <section class="col-12 col-lg-8 wrapper__main_row-left">
                        <section
                            class="row wrapper__main_row-left--smpart animate__animated  animate__fadeIn animate__delay-1s">
                            <div class="innerDiv col-12 white">
                                <div class="innerRow row">
                                    <div class="col-12 col-lg-6 ">
                                        <h1 class="hello_name" id="helloName"></h1>
                                        <caption><p class="welcome_message"> Welcome to your daily event calendar.<br> 
                                            Here you can check all your upcoming events</p>
                                        </caption>
                                    </div>
                                    <div class="col-md-12 col-lg-6 img">
                                        <div class="d-flex justify-content-center">
                                            <img src="Resources/dashboard_img.svg" class="" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            class="row firstContainer white wrapper__main_row-left--lgpart animate__animated animate__fadeIn animate__delay-1s">
                            <div class="innerContent col-12">
                                <div class="innerContentRow row d-flex justify-content-between">
                                    <h2 class="sub-heading">News Feed</h2>
                                    <div>
                                        <input id="date-input" class="fontAwesome date mr-2" type="text"
                                            placeholder="&#xf073; Select &#xf0d7;"
                                            data-init-set="false">
                                        <script>
                                            $('#date-input').dateDropper({});
                                        </script> 
                                    </div>
                                </div>
                                <article class="feedText wrapper__feed">
                                    <c:forEach var="schedule" items="${schedules}">
                                        <span data-date="<c:out value = '${schedule.dateAndTime}'/>"
                                            class="notification">
                                            <strong>
                                                <c:out
                                                    value="${schedule.user.firstName} ${schedule.user.lastName}" />
                                            </strong> added the new event
                                            <strong>
                                                <c:out value="${schedule.event.type}" />
                                            </strong> at
                                            <span id="dateTime" class="dateParsed dateTime">
                                                <c:out value="${schedule.dateAndTime}" />
                                            </span>
                                        </span>
                                    </c:forEach>
                                </article>

                            </div>
                        </section>
                    </section>
                    <section
                        class="col-12 col-lg-4 white wrapper__main_row-right  animate__animated animate__fadeIn animate__delay-1s ">
                        <h2 class="sub-heading">Your Events</h2>
                        <article class="wrapper__main_row-right--article">
                            <span id="myList"></span>
                        </article>
                    </section>
                </div>
            </main>
        </div>
    </div>
    <div id="loader" class="page-loader">
        <div id="lottie"></div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous">
        </script>
    <script src="js/bundles/plugins.js?cb=1611843355362"></script>
    <script src="js/bundles/functions.js?cb=1611843355362"></script>
</body>

</html>