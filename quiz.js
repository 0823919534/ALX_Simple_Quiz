// Function to check the quiz answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, exit function
    if (!selectedOption) return;

    // Get the value of the selected option
    const userAnswer = selectedOption.value;

    // Feedback element
    const feedback = document.getElementById('feedback');

    // Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
