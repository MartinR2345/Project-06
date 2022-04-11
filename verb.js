// Create a function named "result" with no parameters
// Inside this function I used an if statement to create a condition where it will find the correct answer and display whether or not if its right or if its wrong
// For the first if statement, I grabbed the id name of "correct1" from the DOM with the document.getElementById() and I used the .checked property basically to assign true without casting. This will checked as the right answer then access the innerHTML of my "number_correct1" and display whether the user is right or wrong 
// For the second if statement, I grabbed the id name of "correct2" from the DOM with the document.getElementById() and I used the .checked property basically to assign true without casting. This will checked as the right answer then access the innerHTML of my "number_correct2" and display whether the user is right or wrong 
// For the third if statement, I grabbed the id name of "correct3" from the DOM with the document.getElementById() and I used the .checked property basically to assign true without casting. This will checked as the right answer then access the innerHTML of my "number_correct3" and display whether the user is right or wrong 
// Grab the id name of "after_submit1" from the DOM with the document.getElementById() then access the style visibility and assigned it to the "visible". This will make my element visible or seen.
// Grab the id name of "after_submit2" from the DOM with the document.getElementById() then access the style visibility and assigned it to the "visible". This will make my element visible or seen.
// Grab the id name of "after_submit3" from the DOM with the document.getElementById() then access the style visibility and assigned it to the "visible". This will make my element visible or seen.

function result() {
    if (document.getElementById('correct1').checked) 
    {
        document.getElementById('number_correct1').innerHTML = "You are right!"
    } else {
        document.getElementById('number_correct1').innerHTML = "You are wrong!"
    }

    if (document.getElementById('correct2').checked) 
    {
        document.getElementById('number_correct2').innerHTML = "You are right!"
    } else {
        document.getElementById('number_correct2').innerHTML = "You are wrong!"
    }

    if (document.getElementById('correct3').checked) 
    {
        document.getElementById('number_correct3').innerHTML = "You are right!"
    } else {
        document.getElementById('number_correct3').innerHTML = "You are wrong!"
    }

    document.getElementById('after_submit1').style.visibility = "visible";
    document.getElementById('after_submit2').style.visibility = "visible";
    document.getElementById('after_submit3').style.visibility = "visible";

}

// Create a function named "fun()" with no parameters
// Inside this function, I will select the id name of "quiz" from the DOM with the document.getElementById() and use the reset() property.
// Select the id name of "number_correct1" from the DOM with the document.getElementById() and accessed the inner HTML content of that element and assigned it to an empty strings. This will actually reset the data.
// Select the id name of "number_correct2" from the DOM with the document.getElementById() and accessed the inner HTML content of that element and assigned it to an empty strings. This will actually reset the data.
// Select the id name of "number_correct3" from the DOM with the document.getElementById() and accessed the inner HTML content of that element and assigned it to an empty strings. This will actually reset the data.

function fun(){
    document.getElementById('quiz').reset();
    document.getElementById('number_correct1').innerHTML = "";
    document.getElementById('number_correct2').innerHTML = "";
    document.getElementById('number_correct3').innerHTML = "";
}
