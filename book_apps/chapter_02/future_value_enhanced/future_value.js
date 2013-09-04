var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function () {
    var investment = parseFloat( $("investment").value );
    var annualRate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );

	$("futureValue").value = "";
	
	if (isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number\nand greater than zero.");
	} else if(isNaN(annualRate) || annualRate <= 0 || annualRate > 20) {
		alert("Annual rate must be a valid number\nand greater than zero and\nless than or equal to 20.");
	} else if(isNaN(years) || years <= 0 || years > 50) {
		alert("Years must be a valid number\nand greater than zero and\n less than or equal to 50.");
	} else {
		var yearlyRate = annualRate / 100;
		var months = years * 12;
		var futureValue = 0;

		for ( i = 1; i <= years; i++ ) {
			futureValue = ( futureValue + investment ) *
				(1 + yearlyRate);
		}
		$("futureValue").value = futureValue.toFixed(2);
		$("rate").disabled = true;
	} 
}

var clear_click = function() {
	$("investment").value = "";
	$("rate").value = "";
	$("years").value = "";
	$("futureValue").value = "";
	$("rate").disabled = false;
}

window.onload = function () {
    $("calculate").onclick = calculate_click;
	$("clear").onclick = clear_click;
    $("investment").focus();
}
