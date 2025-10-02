// Function Declaration
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, do nothing
    if (!selectedOption) return;

    const userAnswer = selectedOption.value;

    // Retrieve feedback element
    const feedback = document.getElementById('feedback');

    // Compare user answer with correct answer and display feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Retrieve submit button and add event listener
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
