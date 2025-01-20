function checkAnswer() {
    // Correct answer
    var correctAnswer = "4";
    
    // Retrieve the selected user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Select the feedback element
    var feedbackElement = document.getElementById('feedback');
    
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
