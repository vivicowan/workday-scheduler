// Declaring a variable for the currentDay id in the header of the html with a moment date.
var currentDay = moment();
$("#currentDay").text(currentDay.format('dddd, MMMM Do, YYYY'));

// Declaring a variable for the current hour to be read in military time and to use in condition statements.
var hour = moment().format('HH');

// Creating an object to assign time keys as military time.
var times = {
	"9AM": 9,
	"10AM": 10,
	"11AM": 11,
	"12PM": 12,
	"1PM": 13,
	"2PM": 14,
	"3PM": 15,
	"4PM": 16,
	"5PM": 17,
}

// Setting the time-blocks to have a default of future class.
$(".time-block").addClass('future');

// On each time-block class in the html, the function checks whether the variable for the current hour "hour" is the greater than or equal to the value of the keys in the object.
// This function determines what class the time-block is set to: past, present, or future.
$(".time-block").each(function(){
	var check = times[$(this).children().first().text()];
	if( check < hour) {
		$(this).removeClass("future");
		$(this).addClass("past");
	} else if( check == hour) {
		$(this).removeClass("future");
		$(this).addClass("present");
	} else {
		$(this).addClass("future");
	}
});

// Created empty brackets for the key that will be stored in the local storage.
var info = [];

// When save button is clicked, prevent default is called.
$(".saveBtn").on("click", function(event){
	event.preventDefault();
	var userInfo = $(this).siblings().eq(1).val(); //userInfo is declared to target whatever the user types into scheduler
	info = $(this).parent().attr("id"); //info is assigned to the id of each time-block in the html
	localStorage.setItem(info, userInfo); //saves key and value in local storage.
});


// When page reloads, the description written and saved by user is grabbed from local storage and is displayed on scheduler.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


