//Project Criteria ========================================================================================================================
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//Define Variables =======================================================================================================================
var saveButton = $(".saveBtn");

//Define Functions =======================================================================================================================
//Today's date for header
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// adjusting color for time slots=========================================================================================================

function timeOfDay() {
    //variable for current hour
    var currentHour = moment().hour();
    //loop over each time slot to color accordingly
    $(".time-block").each(function () {
        var timeSlotHour = parseInt($(this).attr("id"));
        //if hour on time slot is less than current hour, it is class = past
        if (timeSlotHour < currentHour) {
            $(this).addClass("past");
        } else if (timeSlotHour === currentHour) {
            $(this).addClass("current");
        } else {
            $(this).addClass("future");
        }
    })
};

//event listener for save button click. Sets time and value to local storage==========================================================
saveButton.on("click", function () {
    var userPlan = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    //set text/value to local storage FUNCTIONING
    localStorage.setItem(timeSlot, userPlan);
});

//save plans across page reloads======================================================================================================
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));

//Calling functions =================================================================================================================
timeOfDay();
