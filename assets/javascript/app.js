
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

//creating initial value of 100 for databse since 0 is technically '1'?

var initialValue = 100;
// Use the below variable submitCounter to keep track of the clicks.
var submitCounter = initialValue;


// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes within Firebase's database.
database.ref().on("value", function (snapshot) {
    // We are now inside our .on function...

    // Console.log the "snapshot" value (a point-in-time representation of the database)
    console.log(snapshot.val());
    // This "snapshot" allows the page to get the most current values in firebase.

    // Change the value of our clickCounter to match the value in the database
    submitCounter = snapshot.val().Count;

    // Console Log the value of the clickCounter
    console.log(submitCounter);

    // // Change the HTML using jQuery to reflect the updated clickCounter value
    // $("#submit-value").text(snapshot.val().submitCount);
    // // Alternate solution to the above line
    $("#submit-value").html(submitCounter);

    // If any errors are experienced, log them to console.
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});



// Whenever a user clicks the click button
$("#submit-button").on("click", function () {

    // add the clickCounter by 1
    submitCounter++;

    // Alert User and reset the counter
    if (submitCounter === 10) {
        alert("Phew! You made it! That sure was a lot of clicking.");
        submitCounter = initialValue;
    }

    // Save new value to Firebase
    database.ref().set({
        clickCount: submitCounter
    });

    // Log the value of clickCounter
    console.log(submitCounter);

});


$(document).ready(function () {

    $('#fade').hide().fadeIn(1500);
})

