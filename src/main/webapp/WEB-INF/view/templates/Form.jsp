<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">

<head>
	<!-- meta tags -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" type="image/png" href="Resources/favicon-32x32.png" sizes="32x32" />
	<!-- custom css -->
	<link rel="stylesheet" href="css/index.css?cb=1611843355362">
	<!-- fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,600;1,700&display=swap"
		rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
	<link rel="stylesheet" href="Resources/css/all.css?cb=1611843355362" />
	<!-- bootstrap -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
		integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<!-- datedropper and jquery -->
	<link rel="stylesheet" href="css/datedropper.css?cb=1611843355362" />
	<script src="../../js/bundles/jquery-3.5.1.min.js"></script>
	<title>Schedul.ing</title>
</head>
<body>
	<div id="form" class="wrapper container">
		<c:if test="${not empty message}">
			<p class="alert alert-secondary">
				<c:out value="${message}" />
			</p>
		</c:if>
		<div class="row">
			<section class="wrapper__welcome col-md-6">
				<img class="wrapper__image" src="../Resources/enjoyingLogo/1x/Asset 5.png" alt="Logo" />
				<h1 class="wrapper__header">Welcome to Schedul.<span>ing</span></h1>
				<p class="wrapper__text">Hello! Thanks for joining the Enjoy.ing team. <br> Here you can explore all
					our events and be part of them.
					<br> 
					We are happy to have you with us! 
				</p>
			</section>
			<section class="wrapper__container  col-md-6">
				<div class="wrapper__form">
					<header class="form__header">
						<button type="button" id="signIn" class="wrapper__button--switch">Sign In
						</button>
						<button type="button" id="signUp" class="wrapper__button--switch">Sign Up
						</button>
					</header>
					<hr>
					<form id="signinForm" class="wrapper__signIn">
						<h2>Sign In</h2>
						<input class="fontAwesome" type="email" id="emailSignin" name="emailSignin"
							placeholder="&#xf1fa; Email" />
						<p id="emailInputCheckup" class="emailInputCheckup"></p>
						<input class="fontAwesome" type="password" id="passwordSignin" autocomplete="off"
							name="passwordSignin" placeholder="&#xf023; Password" />
						<br>
						<div class="wrapper__row">
							<div class="wrapper__forgot" data-toggle="modal" data-target="#exampleModal">
								<a id="btnManage">Forgot password ?</a>
							</div>
						</div>
						<div id="singInMsg" class="d-none">
						</div>
						<button type="button" id="btnSignin" class="wrapper__button">Sign In</button>
					</form>
					<form id="signupForm" class="wrapper__signUp">
						<h2>Sign Up</h2>
						<input class="fontAwesome" id="firstNameSignup" name="firstName" type="text"
							placeholder="&#xf2bd; First Name" required />
						<input class="fontAwesome" id="lastNameSignup" name="lastName" type="text"
							placeholder="&#xf2bd; Last Name" required />
						<input class="fontAwesome" id="emailSignup" name="email" type="email"
							pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="&#xf1fa; Email" required />
						<input class="fontAwesome" id="passwordSignup" name="password" type="password" pattern=".{6,}"
							title="Six or more characters" autocomplete="off" placeholder="&#xf023; Password"
							required />
						<div id="msg" class="d-none">
						</div>
						<button type="button" id="btnSignup" class="wrapper__button">Sign Up</button>
						<div id="msgSignup" class="d-none"></div>
					</form>
				</div>
			</section>
		</div>
	</div>

	<div id="manageModal" class="modal" style="display:none;">
		<div class="modal-content ">
			<aside class="row d-flex justify-content-end pb-3 pr-3">
				<span id="close" class="close">&times;</span>
			</aside>
			<div class="container pt-4">
				<div class="card-body">
					<p class="card-title">Forgot password?</p>
					<p class="card-text">Don&#39;t worry, happens to the best of us.</p>
					<form:form modelAttribute="password" method="post">
						<div class="form-group">
							<input class="form-control" id="forgetEmail" name="email" type="email"
								placeholder="Enter your email">
						</div>
						<button id="btnResetPassword" class="btn btn-primary mb-3">Send email</button>
						<div id="msgResetPassword" class="d-none"></div>
					</form:form>
				</div>
			</div>
		</div>
	</div>
	
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous">
	</script><script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
	</script>
	<script src="js/bundles/plugins.js?cb=1611843355362"></script>
	<script src="js/bundles/functions.js?cb=1611843355362"></script>
</body>
</html>