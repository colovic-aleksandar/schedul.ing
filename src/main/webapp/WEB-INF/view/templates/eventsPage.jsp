<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en" data-mode="light">

<head>
    <script src="js/bundles/jquery-3.5.1.min.js"></script>
    <!-- meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- custom css -->
    <link rel="stylesheet" href="css/eventsPage.css?cb=1611843355362">
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous">
    <!-- DATEDROPPER AND JQERY -->
    <link rel="stylesheet" href="css/datedropper.css?cb=1611843355362" />
    <link rel="stylesheet" href="css/main.min.css">
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
                                class="wrapper__main_nav--button-sd-text"></a>
                        </button>
                    </li>
                    <li class="sidebar__item home">
                        <i class="far fa-list-alt sIcon"></i>
                        <a class="sText t_Dashboard" href="./HomePage.html">Dashboard</a>
                    </li>
                    <li class="sidebar__item selected">
                        <i class="far fa-calendar sIcon selected"></i>
                        <a class="sText t_Events selected" href="eventsPage">Events</a>
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
        <div class="wrapper__main px-3">
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
            <main class="events__list overflow-auto animate__animated animate__fadeIn animate__delay-1s">
                <header class="row mx-3">
                    <h3>Events</h3>
                </header>
                <section class="row m-3 px-3 mb-3">
                    <!-- Calendar-->
                    <div id="calendar"></div>
                    <!--Add Event Modal -->
                    <div id="myModal" class="modal">
                        <section class="modal-content">
                            <aside class="row d-flex justify-content-end pb-3 pr-3">
                                <span class="close">&times;</span>
                            </aside>
                            <form id="addForm" class="row">
                                <fieldset class="col-sm-12 col-md-6">
                                    <div class="form-group">
                                        <select class="form-control" id="selectEvent">
                                            <option disabled selected value>Select Event</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="datetime-local" class="form-control" id="dateStr"
                                            placeholder="Input 2">
                                    </div>
                                    <div class="form-group">
                                        <input type="datetime-local" class="form-control" id="dateEnd"
                                            placeholder="Input 3">
                                    </div>
                                </fieldset>
                                <fieldset class="col-sm-12 col-md-6" id="users">
                                    <input type="text" name="" id="search" autocomplete="off"
                                        class="fontAwesome wrapper__search form-control"
                                        placeholder="&#xf002; Find Users">
                                    <div id="findUsers" class="wrapper__findUsers form-control"></div>
                                    <small id="selectall" class=" d-flex justify-content-end">Select
                                        All</small>
                                    <small id="deselectall" class=" justify-content-end"
                                        style="display:none;">Deselect All</small>
                                </fieldset>
                                <button type="button" id="btnAdd"
                                    class="btn btn-primary wrapper__btnSub">Submit</button>
                            </form>
                        </section>
                    </div>
                    <!-- Event Detail Modal-->
                    <div id="infoModal" class="modal">
                        <section id="eventModal" class="modal-content wrapper__contentWidth">
                            <aside class="row d-flex justify-content-end pb-3 pr-3">
                                <span id="closeSpan" class="close">&times;</span>
                            </aside>
                            <section id="info" class="wrapper__info">
                                <header>
                                    <h2 id="infoTitle"></h2>
                                </header>
                                <hr>
                                <p id="infoStart"></p>
                                <hr>
                                <p id="infoEnd"></p>
                                <hr>
                                <button id="deleteButton" class="btn btn-primary">Delete</button>
                                <button id="editButton" class="btn btn-primary">Edit</button>
                            </section>
                            <section id="edit" class="wrapper__edit">
                                <form id="editForm">
                                    <legend>Edit</legend>
                                    <fieldset>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="editTitle"
                                                placeholder="Title">
                                        </div>
                                        <div class="form-group">
                                            <input type="datetime-local" class="form-control" id="editStr"
                                                placeholder="Start">
                                        </div>
                                        <div class="form-group">
                                            <input type="datetime-local" class="form-control" id="editEnd"
                                                placeholder="End">
                                        </div>
                                        <div class="form-group">
                                            <button id="editDoneButton" class="btn btn-primary"
                                                type="button">Done</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </section>
                        </section>
                    </div>
                </section>
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
    
<script src="https://cdn.jsdelivr.net/npm/fullcalendar-scheduler@5.3.0/main.min.js"></script>
<script src="js/bundles/plugins.js?cb=1611843355362"></script>
<script src="js/bundles/functions.js?cb=1611843355362"></script>



</body>

</html>