function subtract() {
   
    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;

    let res = document.getElementById('result');

    let result = Number(firstNum) - Number(secondNum);

    res.textContent = result;
}