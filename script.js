let display = document.getElementById("display");

function calculator(input) {
    switch(input) {
        case '+':
            display.value += '+';
            break;
        case '-':
            display.value += '-';
            break;
        case '*':
            display.value += '*';
            break;
        case '/':
            display.value += '/';
            break;
        case '=':
            let result = eval(display.value); //Funkce eval() vyhodnotí kód JavaScriptu reprezentovaný jako řetězec a vrátí jeho hodnotu dokončení.
            display.value = result;
            break;
        case 'C':
            display.value = '';
            break;
        default:
            display.value += input;
    }
}