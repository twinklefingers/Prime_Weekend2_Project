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
var data;

//*****************************
//         Functions
//*****************************

// this loadData function is very important
function loadData() {
    var data = $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
            loadStudentData(data);
            showPerson(data);
        }
    });
}

function loadStudentData(data) {
    loadOne();
    setInterval(loadOne, 5000);

    function loadOne() {
        console.log(i);
        if (i >= data.omicron.length) {
            i = 0;
        }
        if (i >= 0 && i <= data.omicron.length) {
            showPerson(data);
            console.log(data.omicron[i].name, i);
            i++;
        }
    }

    function showPerson(data) {
        $('.textView').empty();
        $('.textView').append('<p class="name">' + data.omicron[i].name + '</p>',
            '<p class="gitHub">' + 'Git UserName: ' + data.omicron[i].git_username + '</p>',
            '<p class="message">' + 'Message: ' + data.omicron[i].shoutout + '</p>');
    }
}


function next() {
    clearInterval();
    i++;
    console.log("You pressed Next!");
    console.log(i);
}

function prev() {
    showPerson();
    i--;
    console.log("You pressed Prev!");
    console.log(i);
}
