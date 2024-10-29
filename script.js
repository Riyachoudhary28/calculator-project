function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;

    // Add throw animation
    const button = event.target;
    button.classList.add('throw');
    setTimeout(() => {
        button.classList.remove('throw');
    }, 500);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
