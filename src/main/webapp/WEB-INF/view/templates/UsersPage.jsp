<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>

<html lang="en" data-mode="light">

    <head>
        <!-- meta tags -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- icon -->
        <link rel="icon" type="image/png" href="Resources/favicon-32x32.png" sizes="32x32" />
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,700&display=swap"
            rel="stylesheet">
        <!-- font awesome css -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="Resources/css/all.css?cb=1611843355362" />
    
        <!-- hamburgers css -->
        <link href="Resources/hamburgers-master/dist/hamburgers.css" rel="stylesheet">
    
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    
        <!-- DATEDROPPER AND JQERY -->
        <link rel="stylesheet" href="css/datedropper.css?cb=1611843355362" />
        <!-- custom css -->
        <link rel="stylesheet" href="css/usersPage.css?cb=1611843355362">
        <link rel="stylesheet" href="css/homePage.css?cb=1611843355362">
  <!-- Animate CSS -->
  <link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script src="js/bundles/jquery-3.5.1.min.js"></script>
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
                    <li class="sidebar__item home">
                        <i class="far fa-list-alt sIcon"></i>
                        <a class="sText t_Dashboard" href="./HomePage.html">Dashboard</a>
                    </li>
                    <li class="sidebar__item">
                        <i class="far fa-calendar sIcon"></i>
                        <a class="sText t_Events" href="eventsPage">Events</a>
                    </li>
                    <li class="sidebar__item selected">
                        <i class="fas fa-users sIcon sUIcon selected"></i>
                        <a class="sText t_Users selected" href="UsersPage">Users</a>
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
        <div class="wrapper__main px-3">
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
            <main class="users__list overflow-auto animate__animated  animate__fadeIn animate__delay-1s">
                <section class="users__list">
                    <div class="row mx-3  d-flex justify-content-between position-sticky white ">
                        <h1 class="sub-heading users_page ml-3">Users List</h1>
                        <input containertype="text" name="Search" id="users-search" class="mt-4 mr-3" placeholder="&#xf002; Search">
                    </div>
                    <div class="row m-3 " id="users">
                        <c:forEach var="user" items="${users}">
                            <article class="col-12 col-lg-3 d-flex px-3 mb-3 user">
                                <div class="card flex-fill ">
                                    <img class="avatar mb-3" src="<c:out value='${user.photo}'/>" alt="">

                                    <h2 class="d-flex justify-content-center align mx-3 name">
                                        <c:out value="${user.firstName}" />
                                    </h2>
                                    <h2 class="d-flex justify-content-center align mx-3 surname">
                                        <c:out value="${user.lastName}" />
                                    </h2>
                                    <span class="d-flex justify-content-center align mx-3">
                                        <c:out value="${user.seniority} ${user.jobTitle}" /></span>

                                    <div class="row d-flex justify-content-center ml-2">
                                        <h3 class="hnumber">
                                            <c:out value="${user.hosts}" />
                                        </h3>
                                        <h3 class="anumber">
                                            <c:out value="${user.attends}" />
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-center ml-2 ">
                                        <span class="mr-4">hosts</span>
                                        <span class="mr-4">attends</span>
                                    </div>
                                    <div class="row d-flex justify-content-center m-3">
                                        <button id="btnProfile" value="${user.id}" type="button"
                                            class="avatar__button">View Profile</button>
                                    </div>
                                </div>
                            </article>
                            <div id="${user.id}" class="hidden" style="display:none;">
                                <p class="users">${user.firstName}</p>
                                <p class="users">${user.lastName}</p>
                                <address class="users">${user.email}</address>
                                <p class="users">${user.dateOfBirth}</p>
                                <p class="users">${user.phoneNumber}</p>
                                <p class="users">${user.jobTitle}</p>
                                <p class="users">${user.seniority}</p>
                                <address class="users">${user.companyLocation}</address>
                            </div>
                        </c:forEach>

                        <div id="profileModal" class="modal">

                            <!-- Modal content -->

                            <div id="modalUser" class="modal-content">
                                <div class="row d-flex justify-content-end pb-3 pr-3">
                                    <span class="close">&times;</span>
                                </div>
                                <div>
                                    <h5 id="fullNameProfile"></h5>
                                    <div class="card mt-3">
                                        <ul class="list-group list-group-flush">
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">

                                                <h6 class="mb-0"><i
                                                        class="fas fa-envelope mr-2 icon-inline text-primary"></i>E-Mail:
                                                </h6>
                                                <span id="emailProfile"
                                                    class="text-secondary"></span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><i
                                                        class="fas fa-birthday-cake mr-2 icon-inline text-primary"></i>Birthday:
                                                </h6>
                                                <span id="birthDateProfile" class="text-secondary"></span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><i
                                                        class="fas fa-phone-square-alt mr-2 icon-inline text-primary"></i>Phone:
                                                </h6>
                                                <span id="numberProfile" class="text-secondary"></span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><i
                                                        class="fas fa-briefcase mr-2 icon-inline text-primary"></i>Job
                                                    title:</h6>
                                                <span id="positionProfile" class="text-secondary"></span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><i
                                                        class="fas fa-layer-group mr-2 icon-inline text-primary"></i>Seniority:
                                                </h6>
                                                <span id="seniorityProfile" class="text-secondary"></span>
                                            </li>
                                            <li
                                                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                                <h6 class="mb-0"><i
                                                        class="fas fa-map-marker-alt mr-2 icon-inline text-primary"></i>Office
                                                    location:</h6>
                                                <span id="officeProfile" class="text-secondary"></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <div id="loader" class="page-loader">
            <div id="lottie"></div>
        </div>
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