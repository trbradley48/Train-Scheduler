
// variables
// train name
// destination
// frequency
// next arival
// minutes away
var i = 0;


// Initialize Firebase
var config = {
    apiKey: "AIzaSyA4eqOvy2i-IYf0vPWona6X6_4lieIng9g",
    authDomain: "train-scheduler-e5510.firebaseapp.com",
    databaseURL: "https://train-scheduler-e5510.firebaseio.com",
    projectId: "train-scheduler-e5510",
    storageBucket: "train-scheduler-e5510.appspot.com",
    messagingSenderId: "64889375999"
};
firebase.initializeApp(config);


var database = firebase.database();

var name = "";
var destination = "";
// var first_train = 0;
var frequency = 0;

// Capture Button Click
$("#add-train").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    // first_train = $("#first_train-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    // Code for handling the push
    database.ref().push({
        name: name,
        destination: destination,
        // first_train: first_train,
        frequency: frequency,
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.destination);
    // console.log(sv.first_train);
    console.log(sv.frequency);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#destination-display").text(sv.destination);
    // $("#first_train-display").text(sv.first_train);
    $("#frequency-display").text(sv.frequency);

    var newRow = $("<tr>").addClass("tableRow" + i);
    $(".tableBody").append(newRow);
    var newName = $("<td>");
    $(newName).text(sv.name);
    $(".tableRow" + i).append(newName);

    var newDestination = $("<td>");
    $(newDestination).text(sv.destination);
    $(".tableRow" + i).append(newDestination);

    var newFrequency = $("<td>");
    $(newFrequency).text(sv.frequency);
    $(".tableRow" + i).append(newFrequency);
    i++;

    // var newNextArrival = $("<td>");
    // $(newNextArrival.text(sv.name);
    // $(".tableRow").append(newNextArrival);

    // var newMinutesAway = $("<td>");
    // $(newMinutesAway).text(sv.name);
    // $(".tableRow").append(newMinutesAway);



    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});




    // // Assumptions
    // var tFrequency = 3;

    // // Time is 3:30 AM
    // var firstTime = "03:30";

    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));