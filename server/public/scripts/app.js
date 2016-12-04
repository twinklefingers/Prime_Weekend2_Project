$(document).ready(function() {

    loadData();

    //event listeners
    $('.nextButton').on("click", next);
    $('.prevButton').on("click", prev);
}); // end doc ready

//*****************************
//         Variables
//*****************************
var i = 0;
var myTimer = setInterval(loadData, 5000);
// var data = {};

//*****************************
//         Functions
//*****************************

// this loadData function is very important, it's like the glue between unique functions,
// and the data in the json file...
function loadData() {
    var data = $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
            showStudentData(data);
            // carousalRules(data);
        }
    });
}

function showStudentData(data) {
    // i++;
    var studentName = data.omicron[i].name;
    console.log(studentName, i);
    $('.textView').empty();
    $('.textView').append('<p class="name">' + studentName + '</p>',
        '<p class="gitHub">' + 'Git UserName: ' + data.omicron[i].git_username + '</p>',
        '<p class="message">' + 'Message: ' + data.omicron[i].shoutout + '</p>');
    carousalRules(data);
    console.log("showData", i);
}

function next() {
    // i++;
    loadData();
    clearInterval(myTimer);
    myTimer = setInterval(loadData, 5000);
    console.log("You pressed Next!", i);
}

function prev() {
    i = i - 2;
    loadData();
    clearInterval(myTimer);
    myTimer = setInterval(loadData, 5000);
    console.log("You pressed Prev!", i);
}

function carousalRules(data) {
    // if the carousal is between 0 and the length of messages, show the person's info and increase counter variable i
    if (i >= 0 && i <= data.omicron.length) {
        i++;
        console.log("moving forward", i);
        // showStudentData(data);
    }

    // if i is greater than the length of data.omicron -1 (16),
    // i resets at 0
    if (i > data.omicron.length - 1) {
        i = 0;
        console.log("starting over", i);
    }

    // going backwards, if i less than 0, it goes to the end
    // before spinning back around in a positive direction
    if (i < 0) {
        i = data.omicron.length - 1;
        console.log("going backwards", i);
    }
    console.log("carousal position: ", i);

}
