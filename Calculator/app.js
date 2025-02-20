function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        if (expression.trim() === '') throw new Error("Empty Expression");
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        alert('Invalid Expression');
        clearDisplay();
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    let display = document.getElementById('display');
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLastChar();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    let button = document.querySelector('.dark-mode-toggle');
    button.textContent = document.body.classList.contains('dark-mode') ? 'Light' : 'Dark';
}