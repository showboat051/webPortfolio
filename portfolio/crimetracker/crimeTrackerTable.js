/*---------------------------
        Global Functions
-----------------------------*/

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC-awVmIVddxV7Waz0HxaiBt_TXQYJ6xlw",
    authDomain: "crimetracker-1521301503240.firebaseapp.com",
    databaseURL: "https://crimetracker-1521301503240.firebaseio.com",
    projectId: "crimetracker-1521301503240",
    storageBucket: "",
    messagingSenderId: "648921276790"
};
firebase.initializeApp(config);

var database = firebase.database();
console.log(config);


/*---------------------------
        FUNCTIONS
-----------------------------*/

$.ajax({
    url: "https://www.dallasopendata.com/resource/are8-xahz.json",
    type: "GET",
    data: {
        "$limit": 5000,
        "$$app_token": "wuP78c3lOV3O8eisU6WoBMfQ8"
    },
}).done(function (data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
    var crime = $("<tr>").html("<td>" + data[0].nature_of_call + data[0].date_time + data[0].location ,  "</td>")
    for (i = 0; i <data.length; i++) {
        ("<td>" + data[i].nature_of_call)
        $('#table').append(crime)
    }
    
    // var date = $("<tr>").html("<td>" + data[0].date_time + "</td>")
    // for (i = 0; i <data.length; i++) {
    //     ("<td>" + data[i].date_time)
    //     $('#table').append(date)
    // }

    // var address = $("<tr>").html("<td>" + data[0].location + "</td>")
    // for (i = 0; i <data.length; i++) {
    //     ("<td>" + data[i].location)
    //     $('#table').append(address)
    // }

}).fail(function(err){
    console.log(err);
});




$(document).on("click", ".submit", function (query) {
    var queryURL = "https://www.dallasopendata.com/api/views/vkty-8qkv/rows.json"

    //so we need to iterate through 389 types of crimes and get the 9th index for the description of the crime. they are nested arrays.
    //I think there is a different API fieldname that will make it easier to categorize than the Description.
    $.ajax({
        url: queryURL,
        //url not assigned yet
        method: "GET"

    }).then(function (response) {
        var dataObject = response.data;
        // var data;
        for (i = 0; i < dataObject.length; i++) {
            var crimeResult = response.data[i]
            console.log(crimeResult[8]);
            // console.log(response);
        };
    });
});
;
