$(document).ready(function() {

    var studentNum = 0;
    loadData();

    function loadData() {
        var dataToLoad = $.ajax({
            type: "GET",
            url: "/data",
            success: function(data) {
                for (var i = 0; i < data.omicron.length; i++) {
                    $('.container').append('<li>' + data.omicron[i].name + '</li>',
                        '<h3>' + 'Git UserName: ' + data.omicron[i].git_username + '</h3>',
                        '<h4>' + 'Message: ' + data.omicron[i].shoutout + '</h4>');
                    // dataToLoad = data.omicron;
                    console.log(data.omicron[i].name);

                }
                nextStudent();
                prevStudent();
            }
        });
    }

    // for loop to run through all 17 entries

    //functions we might need

    function loadStudentData() {}

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
});


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

// var i = 1;
//
// function newSpy() {
//     $("<div />", {
//         "class": "spy",
//         id: "newSpy" + i
//     }).appendTo(".newContainer").text("New Spy" + i);
//     $(".spy").last().append("<button class='deleter'>Delete Spy</button>");
//     $(".spy").last().append("<button class='changer'>Change</button>");
//     $(".spy").last().append("<p style='display: inline'>Total Spies Hired:" + i + "</p>");
//     i++;
// }
