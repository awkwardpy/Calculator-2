function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        const expression = document.getElementById("display").value;
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
