function getAjaxRequestObject() {
	try {
		return new XMLHttpRequest();
		return new ActiveXObject("Msxml12.XMLHTTP");
		return new ActiveXObject("Microsoft.XMLHTTP");
	} catch (e) {
		alert("Your browser broke!");
	}
	alert("No AJAX support.");
	return null;
}

function validateUserId() {
	var ajaxRequest = getAjaxRequestObject();

	// processRequest() callback function
	ajaxRequest.onreadystatechange = processRequest;

	target = document.getElementById("userid");
	var url = "validate?id=" + escape(target.value);

	ajaxRequest.open("GET", url, true);
	ajaxRequest.send(null);
}

function processRequest(ajaxEvent) {
	var ajaxRequest = ajaxEvent.currentTarget;

	if (ajaxRequest.status == 200 && ajaxRequest.readyState == 4)
		setMessageUsingDOM(ajaxRequest.response);
}

