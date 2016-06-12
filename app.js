var su_submit = document.querySelector('#su_submit');
su_submit.onclick = function() {
	var passwordFeedback = "";
	var name = document.querySelector('#su_name');
	var email = document.querySelector('#su_email');
	var password = document.querySelector('#su_password');
	var employer = document.querySelector('#su_employer');

	if (password == null || password.value.length < 8) {
		passwordFeedback = "Not enough characters";
	}
	if (password == null || /\d/.test(password.value) == false) {
		passwordFeedback += "\nMust include a number";
	}
	password.setCustomValidity(passwordFeedback);

	if (passwordFeedback == "") {
		//sign up successful
		//hide sign-up and login views, show create event view instead
		loadEventsView();
	}
}

var li_submit = document.querySelector('#li_submit');
li_submit.onclick = function() {
	var email = document.querySelector('#li_email');
	var password = document.querySelector('#li_password');
	if (email.value == "test@example.com" && password.value == "t3stt3st") {
		loadEventsView();
	} else {
		document.getElementById("error_messages").innerHTML = "Incorrect email or password";
	}
}

function loadEventsView() {
	document.getElementById("loginSignup").style.display = "none";
	document.getElementById("events").style.display = "inline";
}