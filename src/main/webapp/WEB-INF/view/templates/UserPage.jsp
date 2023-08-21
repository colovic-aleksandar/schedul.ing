<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>

<html lang="en" data-mode="light">

    <head>
        <script src="js/bundles/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
</script>
    <!-- Meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" type="image/png" href="Resources/favicon-32x32.png" sizes="32x32" />
    <!-- custom css -->
    <link rel="stylesheet" href="css/homePage.css?cb=1611843355362">
    <link rel="stylesheet" href="css/userPage.css?cb=1611843355362">
    <link rel="stylesheet" href="Resources/css/all.css?cb=1611843355362">
    <!-- hamburgers css -->
    <link href="Resources/hamburgers-master/dist/hamburgers.css" rel="stylesheet">
    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,700&display=swap"
        rel="stylesheet">
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

    <title>Schedul.ing</title>

        <!-- Animate CSS -->
        <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
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
                                class="wrapper__main_nav--button-sd-text selected"></a>
                        </button>
                    </li>
                    <li class="sidebar__item home">
                        <i class="far fa-list-alt sIcon"></i>
                        <a class="sText t_Dashboard" href="./HomePage.html">Dashboard</a>
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
        <div id="main" class="wrapper__main">
            <nav class="navbar wrapper__main_nav">
                <div class="wrapper__main_nav--buttonContainer">
                    <button class="btn wrapper__main_nav--button" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span id="headerName" class="inverted">Username</span>
                        <img class="wrapper__main_nav--avatar inverted" id = "userImage"
                             src="<c:out value='${user.photo}'/>" alt="">
                    </button>
                    <menu class="dropdown-menu white " aria-labelledby="dropdownMenuButton">
                        <ul class="dropdown-list">
                            <li><a class="dropdown-item" href="UserPage">View Profile</a></li>
                            <li><a class="dropdown-item " href="logout">Log Out</a></li>
                            <li>
                                <a id="button-check"  class="dropdown-item  white-font" href="#">
                                <span id="off-on" class=""></span> Dark Mode
                                </a>
                            </li>
                        </ul>
                    </menu>
                </div>
            </nav>
            <main class="wrapper__user d-flex justify-content-center align-items-center flex-column animate__animated  animate__fadeIn animate__delay-1s">
                <div id="user">
                    <button type="button" id="btnEdit" class="btn btn-primary wrapper__btn--edit"><i
                            class="fas fa-pen fa-sm"></i> Edit profile</button>
                    <div id="content" class="d-flex justify-content-center align-items-center flex-column">
                        <img id="imgUser" src="Resources/default_avatar.png" class="wrapper__photo" alt="User" />

                        <h1 class="wrapper__fullName" id="fullName"></h1>
                        <address id="email"></address>
                        <p id="birthDate"></p>
                        <p id="number"></p>
                        <p id="position"></p>
                        <address id="office"></address>
                    </div>
                    <div id="edit" class="wrapper__edit d-flex justify-content-center align-items-center flex-column">

                        <form id="form" class="d-flex justify-content-center align-items-center flex-column">
                            <div class="wrapper__wrapper">
                                <img id="image" src="Resources/default_avatar.png" class="wrapper__photo"
                                    alt="User" />
                                <button type="button" id="btnImage" class="btn btn-primary btnBadge wrapper__btnBadge">
                                    <span class="badge badge-light"><i class="fas fa-pen"></i></span>
                                </button>
                                <input id="imgInput" type="file" name="imgInput" onchange="loadFile(event)"
                                    accept="image/png, image/jpeg">

                            </div>
                            <div class="wrapper__container">
                                <input id="inputFirstName" name="inputFirstName"
                                    class="fontAwesome wrapper__input  col-sm-12 col-md-6 " type="text"
                                    placeholder="&#xf2bd; Full Name" />
                                <input id="inputLastName" name="inputLastName"
                                    class="fontAwesome wrapper__input col-sm-12 col-md-6" type="text"
                                    placeholder="&#xf2bd; Full Name" />
                            </div>
                            <div class="wrapper__container">
                                <input id="date-input" name="date-input"
                                    class="fontAwesome wrapper__input col-sm-12 col-md-6" type="text"
                                    placeholder="&#xf073; Date of birth" data-init-set="false" data-large-mode="true">
                                <input id="inputNumber" name="inputNumber"
                                    class="fontAwesome wrapper__input col-sm-12 col-md-6" type="text"
                                    placeholder="&#xf095; Phone Number" data-init-set="false" data-large-mode="true">
                            </div>

                            <input id="inputPosition" name="inputPosition" class="fontAwesome wrapper__input--wide "
                                type="text" placeholder="&#xf0b1; Position" />

                            <div class="wrapper__container">
                                <select name="inputSeniority" class="fontAwesome wrapper__input col-sm-12 col-md-6"
                                    id="selectSeniority">
                                    <option value="Junior">Junior</option>
                                    <option value="Medior">Medior</option>
                                    <option value="Senior">Senior</option>
                                </select>
                                <select name="inputOffice" class="fontAwesome wrapper__input col-sm-12 col-md-6"
                                    id="selectOffice">
                                    <option value="Nis">Nis</option>
                                    <option value="Beograd">Beograd</option>
                                    <option value="Kragujevac">Kragujevac</option>
                                </select>
                            </div>
                            <button type="button" id="btnDone" class="btn btn-primary wrapper__btn">Done</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div id="loader" class="page-loader">
        <div id="lottie"></div>
    </div>
<!-- <script src="js/functions/userFunction.js"></script> -->
    

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