const firstValue = document.getElementById("firstValue");
const secondValue = document.getElementById("secondValue");
const operand = document.getElementById("operand");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const firstNumber = parseInt(firstValue.value);
    const secondNumber = parseInt(secondValue.value);

    let result = 0;

    switch (operand.value) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                result = "Division par 0 est impossible";
            }
            break;
        default:
            result = "Opérateur non valide"
            break;
    }
    resultDiv.innerHTML = result;
})