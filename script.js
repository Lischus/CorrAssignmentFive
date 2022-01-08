$(document).ready(function () {
    var blocksEl = document.querySelector(".container")

//displays current day on top of the screen
    $("#currentDay").text(moment().format("MMM Do, YYYY"));

    //checks to see what time it is for each text area
    function hourChecker() {
        var currentHour = moment().hour()
        $(".time-block").each(function () {
            var time = parseInt($(this).attr("id"));
            if (time < currentHour) {
                $(this).addClass("past")
            } else if (time === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }

    //gets the text to the local storage after hitting the button
    $(".saveBtn").on("click", function () {
        //grabs the text from the text box next to the button
        var description = $(this).siblings(".description").val()
        //
        var timeBlock = $(this).parent().attr("id")
        console.log(description)
        localStorage.setItem(timeBlock, description)
    })

    //grabs local storage after refresh
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
    hourChecker()
});