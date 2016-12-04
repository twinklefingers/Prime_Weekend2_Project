$(document).ready(function() {

    loadData();

    //event listeners
    $('.nextButton').on("click", next);
    $('.prevButton').on("click", prev);
}); // end doc ready

//*****************************
//         Variables
//*****************************
var i = -1;
var myTimer = setInterval(loadData, 5000);

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
            carousalRules(data);
            showStudentData(data);
        }
    });
}

function carousalRules(data) {

    // if the carousal is between 0 and the length of messages, show the person's info and increase counter variable i
    if (i >= -1 && i <= data.omicron.length) {
        i++;
        // console.log("moving forward", i);
    }

    // pressing prev, if i less than 0, it goes to the end
    // before spinning back around in a positive direction
    if (i < -1) {
        i = data.omicron.length - 1; // i=16
        // console.log("going backwards", i);
    }

    // if i is greater than the length of data.omicron -1 (16),
    // i resets at 0
    if (i > data.omicron.length - 1) {
        i = 0;
        // console.log("starting over", i);
    }

    // console.log("carousal position: ", i);
}

function showStudentData(data) {
    $('.textView').empty();
    $('.textView').append('<p class="name">' + data.omicron[i].name + '</p>',
        '<p class="gitHub">' + 'Git UserName: ' + data.omicron[i].git_username + '</p>',
        '<p class="message">' + 'Message: ' + data.omicron[i].shoutout + '</p>');
    // carousalRules(data);
    // console.log("showData", data.omicron[i].name, i);
}

function next() {
    // i++;
    loadData();
    clearInterval(myTimer);
    myTimer = setInterval(loadData, 5000);
    // console.log("You pressed Next!", i);
}

function prev() {
    i = i - 2;
    loadData();
    clearInterval(myTimer);
    myTimer = setInterval(loadData, 5000);
    // console.log("You pressed Prev!", i);
}


//********************************************************
//         Weird Little Timer I Added to Console
//********************************************************
var counter = 6;
var consoleTimer = setInterval(function() {
    countdown();
}, 1000);

function countdown() {
    counter--;
    console.log(counter);
    if (counter === 1) {
        counter = 6;
    }
}
// *******************************************************
