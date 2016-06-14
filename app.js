var su_submit = document.querySelector('#su_submit');
su_submit.onclick = function() {
	var passwordFeedback = "";
	var name = document.querySelector('#su_name');
	var email = document.querySelector('#su_email');
	var password = document.querySelector('#su_password');
	var employer = document.querySelector('#su_employer');
	var nameValid = false;
	if (name != null && name.value != "") {
		nameValid = true;
		alert("got ehre " + name.value);
	}

	if (password == null || password.value.length < 8) {
		passwordFeedback = "Not enough characters";
	}
	if (password == null || /\d/.test(password.value) == false) {
		passwordFeedback += "\nMust include a number";
	}
	password.setCustomValidity(passwordFeedback);
	if (passwordFeedback == "" && nameValid) {
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

var eventSubmit = document.querySelector("#eventSubmit");
eventSubmit.onclick = function() {
	//get event input fields: eventName, eventType, eventHost, startTime, endTime, guestList, autocomplete, message
	var eventName = document.querySelector('#eventName');
	var eventType = document.querySelector('#eventType');
	var eventHost = document.querySelector('#eventHost');
	var startTime = document.querySelector('#startTime');
	var endTime = document.querySelector('#endTime');
	var guestList = document.querySelector('#guestList');
	var location = document.querySelector('#autocomplete');
	var message = document.querySelector('#message');
	console.log(eventName.value + ", " + eventType.value + ", " + eventHost.value + ", " + startTime.value + ", " + endTime.value + ", " + guestList.value + ", " + location.value + ", " + message.value);

	if (eventName.value != "" && eventType.value != "" && eventHost.value != "" && startTime.value != "" && endTime.value != "" && guestList.value != "" && location.value != "") {
		// all fields set - add event to events list on right side
		var newEventDiv = document.createElement('div');
		newEventDiv.className = "jumbotron";
		newEventDiv.innerHTML = "<p>Event Name: " + eventName.value + "</p><p>Event Type: " + eventType.value + "</p><p>Event Host: " + eventHost.value;
		newEventDiv.innerHTML += "</p><p>Start Time: " + startTime.value + "</p><p>End Time: " + endTime.value + "</p><p>Guest List: " + guestList.value;
		newEventDiv.innerHTML += "</p><p>Location: " + location.value + "</p><p>Message: " + message.value + "</p>";
		var eventsDiv = document.getElementById("eventsToAdd");
		eventsDiv.appendChild(newEventDiv);

		// now clear the fields
		eventName.value = "";
		eventType.value = "";
		eventHost.value = "";
		startTime.value = "";
		endTime.value = "";
		guestList.value = "";
		location.value = "";
		message.value = "";
	}
}

var logoutButton = document.querySelector('#logoutButton');
logoutButton.onclick = function() {
	logout();
}

function loadEventsView() {
	document.getElementById("loginSignup").style.display = "none";
	document.getElementById("events").style.display = "inline";
}

function logout() {
	document.getElementById("loginSignup").style.display = "inline";
	document.getElementById("events").style.display = "none";
}