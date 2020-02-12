let mathIQ = 0; // Set Math IQ to 0
let score = 0; // Initialize Score
let total = 10; // Total Number Of Questions
let point = 10; // Points Per Corrent Answer
let highest = total * point; // Highest Possible Math IQ
let lowest = 0; // Lowest Possible Score
let userLastQuestion = false; // Did the user get to the last question?

function initialize() {
  //sets correct answer (session varaible = in our case, key and value)
  sessionStorage.setItem("a1", "a");
  sessionStorage.setItem("a2", "b");
  sessionStorage.setItem("a3", "d");
  sessionStorage.setItem("a4", "a");
  sessionStorage.setItem("a5", "c");
  sessionStorage.setItem("a6", "b");
  sessionStorage.setItem("a7", "a");
  sessionStorage.setItem("a8", "d");
  sessionStorage.setItem("a9", "c");
  sessionStorage.setItem("a10", "d");

  resultsOutput = document.getElementById("results");
  userInputs = [];
  statements = ["are Homo Erectus Level (c'mon, you could do better)", "are an Absolute Moron (you're not much better than your ancient homo erectus ancestors)", "have a Mathematical Deficiency", "are not mathy", "are Borderline Good at Math", "are Average at Math", "have Just Above Average Math Skills", "have Superior Mathematical Intelligence", "are Better at Math than Most People Around you", "are Gifted in your mathematical abilities", "are a math prodogy (Einstein level!)"];
}

// NOTE: DOCUMENT.READY FUNCTION - WAITS UNTIL THE PAGE IS LOADED AND THEN RUNS WHATEVER...
$(document).ready(function() { //SELF-CALLING Function
  //HIDE ALL QUESTIONS
  $(".questionForm").hide();

  //HOWEVER, WE MUST SHOW THE FIRST QUESTION TO THE USER
  $("#q1").show();


  // jquery EVENTS

  $("#q1 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(1);
    //TRANSITIONS INTO QUESTION 2
    $("#q2").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });


  $("#q2 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(2);
    //TRANSITIONS INTO QUESTION 3
    $("#q3").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON  (stops the call-back execution)
    return false;
  });

  $("#q3 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(3);
    //TRANSITIONS INTO QUESTION 4
    $("#q4").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });

  $("#q4 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(4);
    //TRANSITIONS INTO QUESTION 5
    $("#q5").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });

  $("#q5 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(5);
    //TRANSITIONS INTO QUESTION 6
    $("#q6").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });

  $("#q6 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(6);
    //TRANSITIONS INTO QUESTION 7
    $("#q7").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });

  $("#q7 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(7);
    //TRANSITIONS INTO QUESTION 8
    $("#q8").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });

  $("#q8 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(8);
    //TRANSITIONS INTO QUESTION 9
    $("#q9").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });

  $("#q9 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(9);
    //TRANSITIONS INTO QUESTION 10
    $("#q10").fadeIn(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });

  $("#q10 #submitBtn").click(function() {
    $(".questionForm").hide();
    checkAns(10);
    calculateResults();
    //TRANSITIONS INTO USER RESULTS
    $("#results").slideDown(295);
    //WE RETURN FALSE BECAUSE WE DON'T WANT THE BUTTON TO DO ANYTHING ELSE (stops the call-back execution)
    return false;
  });
});

function checkAns(number) {
  var radio = document.getElementsByName("q" + number + "");
  for (var i = 1; i <= 4; i++) {
    if (radio[i - 1].checked == true) {
      var userInput = radio[i - 1].value;
      userInputs.push(userInput);
      // loop does not need to check for additional values
      break;
    }
  }

  if (userInput == undefined) {
    alert("You have incomplete answers. Do you wish to continue?");
  }


  if (userInput == sessionStorage.getItem("a" + number + "")) {
    score++;
  }

  if (number == total) {
    userLastQuestion = true;
  }
}

function calculateResults() {
  mathIQ = point * score; // calculate Math IQ

  if (userLastQuestion) {
    resultsOutput.innerHTML = "<h3>Your final score is " + score + " out of " +
      total + "</h3> <h4 id = 'statement'> Your General Math IQ is " + mathIQ + ", which means that you " + getMathStatement() + "</h4> <a href='mathQuiz.html'> Would you like to Take This Quiz Again?</a >";

    for (var i = 0; i < 10; i++) {
      document.getElementById("uA" + (i + 1)).innerHTML = document.getElementById("uA" + (i + 1)).innerHTML + userInputs[i];
    }
    // document.getElementById("uA1").innerHTML = document.getElementById("uA1").innerHTML + userInputs[0];
    // document.getElementById("uA2").innerHTML = document.getElementById("uA2").innerHTML + userInputs[1];
    // document.getElementById("uA3").innerHTML = document.getElementById("uA3").innerHTML + userInputs[2];
    // document.getElementById("uA4").innerHTML = document.getElementById("uA4").innerHTML + userInputs[3];
    // document.getElementById("uA5").innerHTML = document.getElementById("uA5").innerHTML + userInputs[4];
    // document.getElementById("uA6").innerHTML = document.getElementById("uA6").innerHTML + userInputs[5];
    // document.getElementById("uA7").innerHTML = document.getElementById("uA7").innerHTML + userInputs[6];
    // document.getElementById("uA8").innerHTML = document.getElementById("uA8").innerHTML + userInputs[7];
    // document.getElementById("uA9").innerHTML = document.getElementById("uA9").innerHTML + userInputs[8];
    // document.getElementById("uA10").innerHTML = document.getElementById("uA10").innerHTML + userInputs[9];

    document.getElementById("results-container").style.display = "inline";
    document.getElementById("reset").style.display = "none";
  }

  if (mathIQ == highest) {
    document.getElementById("statement").style.color = "green";
  }
  if (mathIQ == lowest) {
    document.getElementById("statement").style.color = "tomato";
  }
}


function getMathStatement() {
  for (var i = 0; i <= 10; i++) {
    if (score == i) {
      return statements[i]; // Now, when this function is called, it will be equal of the statement of index i
    }
  }
}

function resetTest() {
  // //HIDE ALL QUESTIONS
  // $(".questionForm").hide();
  //
  // //HOWEVER, WE MUST SHOW THE FIRST QUESTION TO THE USER
  // $("#q1").show();
  //
  // //CLEARING RESULTS
  // $("#results").hide();
  //
  // // CLEARING USER SCORE, INPUTS ... ETC
  // mathIQ = 0; // Reset Math IQ
  // score = 0; // Reset Score
  // userLastQuestion = false; // Did the user get to the last question?
  // userInputs = [];
  //
  // for (var i = 1; i <= 10; i++) {
  //   var radio = document.getElementsByName("q" + i + "");
  //   for (var i = 0; i < 4; i++) {
  //     if (radio[i].checked == true) {
  //       radio[i].checked = false;
  //     }
  //   }
  // }
  location.reload(true);
}