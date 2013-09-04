var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function () {
    var customerType = $("type").value;
    var invoiceSubtotal = parseFloat( $("subtotal").value );
	$("subtotal").value = invoiceSubtotal.toFixed(2);
	var discountPercent = .0;

	customerType = customerType.toUpperCase();
	if (customerType == "R") {
		if (invoiceSubtotal < 100)
			discountPercent = .0;
		else if (invoiceSubtotal >= 100 && invoiceSubtotal < 250)
			discountPercent = .1;
		else if (invoiceSubtotal >= 250 && invoiceSubtotal < 500)
			discountPercent = .25;
		else if (invoiceSubtotal >= 500)
		    discountPercent = .3;
	}
	else if (customerType == "C") {
		discountPercent = .2;
	}
	else if (customerType == "T") {
		if (invoiceSubtotal < 500)
			discountPercent = .4;
		else if (invoiceSubtotal >= 500)
			discountPercent = .5;
	}
	else {
		discountPercent = .1;
	}
	
	var discountAmount = invoiceSubtotal * discountPercent;
	var invoiceTotal = invoiceSubtotal - discountAmount;
	
	$("percent").value = (discountPercent * 100).toFixed(2) ;
	$("discount").value = discountAmount.toFixed(2);
	$("total").value = invoiceTotal.toFixed(2);
	
	$("type").focus;
}

window.onload = function () {
    $("calculate").onclick = calculate_click;
    $("type").focus();
}
