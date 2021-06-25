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
	var test = times[$(this).children().first().text()];
	if( test < hour) {
		$(this).removeClass("future");
		$(this).addClass("past");
	} else if( test == hour) {
		$(this).removeClass("future");
		$(this).addClass("present");
	} else {
		$(this).addClass("future");
	}
});
