var payday = new Date();
payday.setFullYear(2012,4,25);
var today = new Date();
var msLeft = payday - today;
var oneDay = 1000 * 60 * 60 * 24;
var daysLeft = msLeft / oneDay;
var weeksLeft = daysLeft / 7;

var balance = 4200;
var dayBudget = Math.round(balance / daysLeft);

function transaction () {
	var amount = prompt("How much did you spend?");
	var sum = (balance - amount);
	document.write("You have " + Math.round((balance - amount) / daysLeft) + " kr left to spend today.");
};

var budget = {
	day: Math.round((balance - transaction) / daysLeft) + " kr",
	week: Math.round((balance - transaction) / weeksLeft) + " kr",
	month: balance + " kr"
};

