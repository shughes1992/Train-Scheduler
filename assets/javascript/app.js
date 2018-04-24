console.log("this is working")
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKLXriM3XzN-4FhgzZzbgcFA_LBR7pInU",
    authDomain: "train-scheduler-56f64.firebaseapp.com",
    databaseURL: "https://train-scheduler-56f64.firebaseio.com",
    projectId: "train-scheduler-56f64",
    storageBucket: "train-scheduler-56f64.appspot.com",
    messagingSenderId: "19726156910"
};
firebase.initializeApp(config);

// Creating a variable to reference the database subset of Firebase (there are multiple i.e. auth,storage etc.)
var database = firebase.database();

database.ref().on("child_added", function(snapshot) {
console.log(snapshot.val())

var originData = snapshot.val().origin;
var destinationData = snapshot.val().destination;
var firstArrivalData = snapshot.val().firstArrival;
var frequencyData = snapshot.val().frequency;

var timeArray = firstArrivalData.split(":")
var trainTime = moment().hours(timeArray[0]).minutes(timeArray[1])

console.log(trainTime);

var minutesAway = 42;
var nextArrival = 0913;
var newRow = "<tr><td>" + originData + "</td><td>" + destinationData + "</td><td>" + firstArrivalData + "</td><td>" + frequencyData + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>"

$(".table").append(newRow);
})

// Whenever a user clicks the click button
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    var origin = $("#origin").val().trim();
    var destination = $("#destination").val().trim();
    var frequency = $("#frequency").val().trim();
    var firstArrival = $("#firstArrival").val().trim();



    database.ref().push({
        origin: origin,
        destination: destination,
        firstArrival: firstArrival,
        frequency: frequency
    }) 
});





$(document).ready(function () {

    $('#fade').hide().fadeIn(1500);
})

