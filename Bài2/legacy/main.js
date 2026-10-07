const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.calc-keys .btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;
        const currentDisplay = display.innerText;

        if (value === 'Clear') {
            display.innerText = '0';
        } 
        else if (value === '=') {
            try {
                if (currentDisplay !== '0' && currentDisplay !== '') {
                    let expression = currentDisplay.replace(/×/g, '*').replace(/÷/g, '/');
                    display.innerText = eval(expression); 
                }
            } catch (error) {
                display.innerText = 'Lỗi';
            }
        } 
        else {
            if (currentDisplay === '0' || currentDisplay === 'Lỗi') {
                if (['+', '-', '×', '÷'].includes(value)) {
                    display.innerText = '0' + value;
                } else {
                    display.innerText = value;
                }
            } else {
                display.innerText += value;
            }
        }
    });
});