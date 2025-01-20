function checkAnswer() {
    // Correct answer
    var correctAnswer = "4";
    
    // Retrieve the selected user's answer
    var selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Select the feedback element
    var feedbackElement = document.getElementById('feedback');

    // Check if an answer was selected
    if (selectedOption) {
        var userAnswer = selectedOption.value;
        
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Positive feedback color
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Negative feedback color
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange"; // Prompt message color
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);



