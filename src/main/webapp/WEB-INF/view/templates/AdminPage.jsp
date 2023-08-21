<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" data-mode="light">
    <head>
        <!-- meta tags -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="Resources/favicon-32x32.png" sizes="32x32" />
        <!-- Custom CSS -->
        <link rel="stylesheet" href="css/homePage.css?cb=1611843355362">
        <link rel="stylesheet" href="css/adminPage.css?cb=1611843355362">
        <link rel="stylesheet" href="css/datedropper.css?cb=1611843355362" />
        <link rel="stylesheet" href="Resources/css/all.css?cb=1611843355362">
        <!-- hamburgers CSS -->
        <link href="Resources/hamburgers-master/dist/hamburgers.css" rel="stylesheet">
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,700&display=swap"
            rel="stylesheet">
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <!-- Fontawesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <!-- Animate CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <script src="js/bundles/jquery-3.5.1.min.js?cb=1611843355362"></script>
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
                    <li class="sidebar__item">
                        <i class="fas fa-users sIcon sUIcon"></i>
                        <a class="sText t_Users" href="UsersPage">Users</a>
                    </li>
                    <c:if test="${not empty pageContext.request.userPrincipal}">
                        <c:if test="${pageContext.request.isUserInRole('ROLE_ADMIN')}">
                            <li class="sidebar__item selected">
                                <i class="fas fa-user-cog sIcon selected"></i>
                                <a class="sText t_Admin selected" href="admin">Admin Panel</a>
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
            <main class="wrapper__admin animate__animated  animate__fadeIn animate__delay-1s">
                <header class="d-flex justify-content-between align-items-center admin__title">
                    <h3 class="font-weight-bold">Admin Panel</h3>
                    <aside>
                        <button id="addEventButton" class="btn btn-primary ">New Event Type</button>
                    </aside>
                </header>
                <section class="admin__container">
                    <section class="admin__container_swapButtons">
                        <button class="admin__container_swapButtons--btnEvents activeButton">Events</button>
                        <button class="admin__container_swapButtons--btnUsers disabled">Users</button>
                        <button class="admin__container_swapButtons--btnEventTypes disabled">Event Types</button>
                    </section>
                    <section class="admin__container_tableContainer" id="tableScroll">
                        <table class="table text-center admin__container_tableContainer--schedulesTable tableShown">
                            <thead>
                                <tr>
                                    <th scope="col">Event Type</th>
                                    <th scope="col">Event Location</th>
                                    <th scope="col">Host</th>
                                    <th scope="col">Attendees</th>
                                    <th scope="col">Event Start</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                        </table>
                        <table class="table text-center admin__container_tableContainer--usersTable">
                            <thead>
                                <tr>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Birth Date</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Seniority</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                        </table>
                        <table class="table text-center admin__container_tableContainer--eventsTable">
                            <thead>
                                <tr>
                                    <th scope="col">Event Type</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Min. Participants</th>
                                    <th scope="col">Max. Participants</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                        </table>
                    </section>
                </section>
            </main>
        </div>
    </div>
    
    <div id="manageModal" class="manageModal">
        <section class="modal-content">
            <aside class="row d-flex justify-content-end pb-3 pr-3">
                <span class="close">&times;</span>
            </aside>
            <header class="row d-flex justify-content-center">
                <h4>Add new event type</h4>
            </header>
            <form class="row d-flex justify-content-center mt-3">
                <input id="eventTypeName" class="mx-2 my-3" type="text" placeholder="Event type name"><br>
                <input id="eventLocation" class="mx-2 my-3" type="text" placeholder="Location"><br>
                <input id="eventMaxParticipants" class="mx-2 my-3" type="number" placeholder="Max. participants"><br>
                <input id="eventMinParticipants" class="mx-2 my-3" type="number" placeholder="Min. participants"><br>
                <button id="btnEventManage" class="btn btn-primary my-3 mx-4">Add Event Type</button>
            </form>
        </section>
    </div>

    <div id="confirmModal" class="confirmModal">
        <section class="modal-content-confirm">
            <aside class="row d-flex justify-content-end pb-3 pr-3">
                <span class="close">&times;</span>
            </aside>
            <header class="row d-flex justify-content-center">
                <h6 id="confirmModalText">Are you sure?</h6>
            </header>
            <section class="row d-flex justify-content-center mt-3">
                <button class="confirmModal__buttonAccept" id="deleteScheduleButtonAccept">Yes</button>
                <button class="confirmModal__buttonAccept" id="deleteUserButtonAccept">Yes</button>
                <button class="confirmModal__buttonAccept" id="deleteEventButtonAccept">Yes</button>
                <button class="confirmModal__buttonCancel" id="confirmModalCancel">Cancel</button>
            </section>
        </section>
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