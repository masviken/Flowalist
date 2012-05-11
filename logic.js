
// Defines the number of days between today and May 25

var payday = new Date();
payday.setFullYear(2012,4,25);
var today = new Date();
var msLeft = payday - today;
var oneDay = 1000 * 60 * 60 * 24;
var daysLeft = msLeft / oneDay;
var weeksLeft = daysLeft / 7;

// Defines the balance and stores it in localStorage.balance

var balance = 2000;
localStorage.balance = balance;
var dayBudget = Math.round(balance / daysLeft);
var weekBudget = dayBudget * 7;

// Adds a new transaction, writes it on the page and updates localStorage.balance

function transaction () {
	var amount = prompt("How much did you spend?");
	
	if ((dayBudget - amount) < 0) {
		document.write("Woops, looks like you just spent your daily budget.</br>");
	} else {
		document.write("</br>You have " + (dayBudget - amount) + " kr left to spend today.</br>");
	}
	//document.write("Your original budget was: </br>" + "Day: " + dayBudget + "</br>Week: " + weekBudget + "</br>Month: " + balance);
	console.log("Done.");
};

// Stores the budgets in localStorage keys.... but not really.

var budget = {
	day: Math.round((balance - transaction) / daysLeft) + " kr",
	week: Math.round((balance - transaction) / weeksLeft) + " kr",
	month: balance + " kr"
};

