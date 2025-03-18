let display = document.getElementById('result');
display.value = '';

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace × with * for calculation
        let expression = display.value.replace('×', '*');
        
        // Handle percentage calculations
        if (expression.includes('%')) {
            expression = expression.replace('%', '/100');
        }
        
        // Evaluate the expression and round to 8 decimal places
        let result = eval(expression);
        
        // Check if result is a finite number
        if (!isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        
        // Format the result
        display.value = Number(result.toFixed(8)).toString();
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 1500);
    }
} 