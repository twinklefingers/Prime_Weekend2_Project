$(document).ready(function() {

    loadData();
}); // end doc ready

//*****************************
//         Variables
//*****************************
var studentNum = 0;


//*****************************
//         Functions
//*****************************

// this loadData function is very important
function loadData() {
    var dataToLoad = $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
            loadStudentData(data);
        }
    });
}

function loadStudentData(data) {
    var i = 0;
    loadOne();
    setInterval(loadOne, 5000);

    function loadOne() {
        i++;
        $('.textView').empty();
        $('.textView').append('<p class="name">' + data.omicron[i].name + '</p>',
            '<p class="gitHub">' + 'Git UserName: ' + data.omicron[i].git_username + '</p>',
            '<p class="message">' + 'Message: ' + data.omicron[i].shoutout + '</p>');
        console.log(data.omicron[i].name);
    }
}


function nextStudent() {
    $('.buttons').append('<button class="next">Click for Next</button>');
}

function prevStudent() {
    $('.buttons').append('<button class="prev">Click for Prev</button>');
    $('.prev').on('click', function() {

    });
}

function showStudentInfo() {
    //name
    //git_username
    //message
}


// success: function(response) {
//   console.log(response.people);
//   for(var i = 0; i < response.people.length; i++) {
//     $('#ajax-data').append('<div class="person"></div>');
//     var $el = $('#ajax-data').children().last();
//     $el.append('<h2>' + response.people[i].name + '</h2>');
//     $el.append('<img src="' + response.people[i].imageURL + '" />');
//   }
// },
// error: function() {
//   console.log('Error with request');
// }
