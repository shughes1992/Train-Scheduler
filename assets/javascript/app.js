
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

// Whenever a user clicks the click button
$("#submit-button").on("click", function () {

    var origin = $("#origin").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = moment($("#trainTime").val().trim(),"HH:mm".subtract(10,"years").format("x"));
    var frequency = $("#frequency").val().trim();


    console.log(trainTime)
});





$(document).ready(function () {

    $('#fade').hide().fadeIn(1500);
})

