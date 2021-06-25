var currentDay = moment();
$("#currentDay").text(currentDay.format('dddd, MMMM Do'));

var hour = moment().format('HH');

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

$(".time-block").addClass('future');

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

var info = [];

$(".saveBtn").on("click", function(event){
	event.preventDefault();
	var userInfo = $(this).siblings().eq(1).val();
	info = $(this).parent().attr("info");
	localStorage.setItem(info, userInfo);
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



