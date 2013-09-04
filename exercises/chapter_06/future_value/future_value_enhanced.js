var $ = function (id) {
    return document.getElementById(id);
}

var years_dblclick = function () {
	$("years").value = "";
	$("futureValue").value = "";
	$("results").value = "";
}

var investment_change = function () {
	var investment = parseFloat( $("investment").value );
	if (!isNaN(investment)) {
		calculate_click();
	}
	
}

var calculate_click = function () {
	
    var investment = parseFloat( $("investment").value );
    var annualRate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );
    
	$("futureValue").value = "";
	$("results").value = "";
	
	var status = "unknown";
	if ( $("monthly").checked ) {
		status = $("monthly").value;
	}
	if ( $("yearly").checked ) {
		status = $("yearly").value;
	}
	
	var accept = $("display").checked;	
	
	if (isNaN(investment)) {
		investment = prompt("Please enter your investment amount.");
		investment = parseFloat(investment);
	}
	
	if ( status == "unknown" ) {
		alert("You must select monthly or yearly interest.");
	} else if (investment == null || isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number\nand greater than zero.");
	} else if (isNaN(annualRate) || annualRate <= 0) {
		alert("Annual rate must be a valid number\nand greater than zero.");
	} else if (isNaN(years) || years <= 0) {
		alert("Years must be a valid number\nand greater than zero.");
	} else {
		var monthlyRate = annualRate / 12 / 100;
		var months = years * 12;
		var futureValueMonth = investment;
		for ( i = 1; i <= months; i++ ) {
			futureValueMonth = futureValueMonth  * (1 + monthlyRate);
		}

		var annualRate = annualRate / 100;
		var futureValueAnnual = investment;
		for ( i = 1; i <= years; i++ ) {
			futureValueAnnual = futureValueAnnual * (1 + annualRate);
		}
		if ( status == "monthly" ){	$("futureValue").value = futureValueMonth.toFixed(2); }
		if ( status == "yearly" ){ $("futureValue").value = futureValueAnnual.toFixed(2); }
		
		var message = "";
		if ( accept ) {
			message += "Future Value of $" + investment.toFixed(0) + "\n\n";
			message += "When compounded monthly: " + futureValueMonth.toFixed(2) + "\n";
			message += "When compounded yearly: " + futureValueAnnual.toFixed(2); 
			$("results").value = message;
		}
	}
	
	
	
}

window.onload = function () {
    $("calculate").onclick = calculate_click;
	$("years").ondblclick = years_dblclick;
	$("investment").onchange = investment_change;
    $("investment").focus();
}
