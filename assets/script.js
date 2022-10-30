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

//var = planner ();


//Define Variables ====================================================================
var saveButton = $(".saveBtn");

//Define Functions ====================================================================
//Today's date for header

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// adjusting color for past time slots

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

function savePlan () {
   $(".hour").each(function() {
    var currentHour = $(this).text();
    var userPlan = localStorage.getItem(currentHour);


   });
}

timeOfDay();
savePlan();