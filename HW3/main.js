function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "You beat the final boss of the game you feel good about. But you recive a email saying you've failed the quiz because you didnt show up. You have work later do you attempt to go or just stay home.";
        document.getElementById("choice1").innerHTML = "Stay home";
        document.getElementById("choice2").innerHTML = "Go to work";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "You attend class and come to your suprise the quiz was easy you go back home do you stay home or got to work'";
        document.getElementById("choice1").innerHTML = "Stay home";
        document.getElementById("choice2").innerHTML = "Go to work";
    } else if (choice == 1 && answer1 == "Stay home") {
        document.getElementById("story").innerHTML = "You decide to stay home and call in to work saying your sick. You call up your friend seeing if He/She can come over. Do you go out to party or stay home and watch a movie?";
        document.getElementById("choice1").innerHTML = "Party";
        document.getElementById("choice2").innerHTML = "Movie";
    } else if (choice == 2 && answer2 == "Movie") {
        document.getElementById("story").innerHTML = "You catch up with a movie you've been wanting to watch and stay up til 3AM. Do you go to sleep.";
        document.getElementById("choice1").innerHTML = "Sleep";
        document.getElementById("choice2").innerHTML = "Stay Up";
    } else if (choice == 1 && answer1 == "Sleep") {
        document.getElementById("story").innerHTML = "You go to sleep waking up refreshed and thinking should I ditch class'";
        document.getElementById("choice1").innerHTML = "Yes again";
        document.getElementById("choice2").innerHTML = "Defintley not";
    } else if (choice == 1 && answer1 == "Yes again") {
        document.getElementById("story").innerHTML = "In doing that you got kicked out of class?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "Attempt to talk to school";
    } else if (choice == 2 && answer2 == "Go to work") {
        document.getElementById("story").innerHTML = "You had a very filling day" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Stay Up") {
        document.getElementById("story").innerHTML = "Due to you staying up do you wanna study or Game some more."
        document.getElementById("choice1").innerHTML = "Game";
        document.getElementById("choice2").innerHTML = "Study";
    } else if (choice == 2 && answer2 == "Stay Up") {
        document.getElementById("story").innerHTML = "Because you studied all night even though you get 20% of the quizes credit taken off you aceded the quiz" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Game") {
        document.getElementById("story").innerHTML = "Because you stayed up to game you got no motatvation to go to class and endup skipping another which made you fail the class." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Party") {
        document.getElementById("story").innerHTML = "The Party leaves you exhasuted and past out for almost a whole day. You come to find your boss fired you cause you didnt show up." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Defintley not") {
        document.getElementById("story").innerHTML = "You attend class your teacher gives you the chance to take the quiz again but for 20% credit" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Attempt to talk to school") {
        document.getElementById("story").innerHTML = "You are fastly rejected and regret your Decisions" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "This is our first few months in college and job can you manage to make resposible Decisions?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "This was your Decisions!";

    }


}