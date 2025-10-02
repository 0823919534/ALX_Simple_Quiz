// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // handle division by zero
    if (number2 === 0) {
        return null; // caller will show error
    }
    return number1 / number2;
}

// Helper to get input values (returns floats, default 0)
function getInputs() {
    const n1 = parseFloat(document.getElementById('number1').value);
    const n2 = parseFloat(document.getElementById('number2').value);
    return {
        number1: isNaN(n1) ? 0 : n1,
        number2: isNaN(n2) ? 0 : n2
    };
}

// Helper to display result or error
function displayResult(value) {
    const el = document.getElementById('calculation-result');
    if (value === null) {
        el.textContent = 'Error';
        el.style.color = '#dc3545';
    } else {
        // show numeric result, trim trailing zeros if necessary
        const text = Number.isFinite(value) ? (Math.round((value + Number.EPSILON) * 100000000) / 100000000).toString() : 'NaN';
        el.textContent = text;
        el.style.color = '#000';
    }
}

// Attach event listeners
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputs();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputs();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputs();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputs();
    const result = divide(number1, number2);
    if (result === null) {
        // division by zero
        const el = document.getElementById('calculation-result');
        el.textContent = 'Cannot divide by zero';
        el.style.color = '#dc3545';
    } else {
        displayResult(result);
    }
});
s