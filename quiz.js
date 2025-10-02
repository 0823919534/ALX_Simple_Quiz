document.addEventListener("DOMContentLoaded", function() {

    // Select the Submit button and feedback paragraph
    const submitBtn = document.getElementById("submit-answer");
    const feedback = document.getElementById("feedback");

    // Function to check the answer
    function checkAnswer() {
        const correctAnswer = "4";

        // Get the selected radio button
        const selectedOption = document.querySelector('input[name="quiz"]:checked');

        if (!selectedOption) {
            feedback.textContent = "Please select an answer before submitting!";
            feedback.style.color = "#dc3545";
            return;
        }

        const userAnswer = selectedOption.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "#28a745";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "#dc3545";
        }
    }

    // Add click event listener to the button
    submitBtn.addEventListener("click", checkAnswer);

});
