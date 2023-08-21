const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const form = document.getElementById('form');

window.onload = function() {
	signInButton.style.borderBottom = "2px solid white";
}

signUpButton.addEventListener('click', () => {
	form.classList.add("right-panel-active");
	signUpButton.style.borderBottom = "2px solid white";
	signInButton.style.borderBottom = "none";
});

signInButton.addEventListener('click', () => {
	form.classList.remove("right-panel-active");
	signUpButton.style.borderBottom = "none";
	signInButton.style.borderBottom = "2px solid white";
});



$('#date-input').dateDropper();