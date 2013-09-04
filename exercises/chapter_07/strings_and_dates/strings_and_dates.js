var $ = function (id) {
    return document.getElementById(id); 
}

var email_click = function () {
    var emailAddress = $("email").value;
	var locationAmpersand = emailAddress.indexOf("@");
	if (locationAmpersand == -1)
	{
		alert("A valid email address must include an @ sign.");
	}
	else if (emailAddress.indexOf(".", locationAmpersand) == -1)
	{
	    alert("A valid email address must include a period after the @ sign.");
	} 
	else
	{
		var domainName = emailAddress.substring((locationAmpersand + 1));
	    alert("The domain name is " + domainName + ".");	     		
	}
}

var date_click = function () {
    var dateEntry = $("date").value;
	// Date should be in mm/dd/yyyy format so it must be length of 10, a / in position 3 and 6, and each date portion must be numeric.
	if (dateEntry.length != 10 ||
	    dateEntry.charAt(2) != "/" ||
		dateEntry.charAt(5) != "/" ||
		isNaN(parseInt(dateEntry.substring(0,2))) ||
		isNaN(parseInt(dateEntry.substring(3,5))) ||
		isNaN(parseInt(dateEntry.substring(6)))
		)
	{
		alert("A valid date must be in this format: mm/dd/yyyy.");
	}
	else
	{
	/*
	 The internet is full of pre-written functions on how to determine the day of the year. This is my variation on the concepts presented in various forums.
	 
	 Load edited date to a Date object. Create another Date object to hold the first day of the year entered. 
	 Number of milliseconds in a day is 86400000.
	 Since dates hold the number of milliseconds since 1/1/1970, divide each date by 86400000 to get the number of days
	 since 1/1/1970 for the first day of the year entered and the actual date entered. Subtract one from the other to get the day of the year.
	 */
		var calcDate = new Date(dateEntry);
		var calcYear = calcDate.getFullYear();
		var dayOneDate = new Date(calcYear,0,1);
		var dayOne = Math.floor(dayOneDate.getTime() / 86400000);
	    var calcEnteredDay = Math.ceil((calcDate.getTime() / 86400000));
		var calcDay = calcEnteredDay - dayOne;
		alert("This is day " + calcDay + " in the year " + calcYear + ".");
	}
	
}

window.onload = function () {
    $("processEmail").onclick = email_click;
	$("processDate").onclick = date_click;
}