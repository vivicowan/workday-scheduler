var currentDay = moment();
$("#currentDay").text(currentDay.format('MMMM Do, YYYY'));

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
	alert(localStorage.getItem(info) + " is saved!");
});





