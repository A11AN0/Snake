        
        
const numberButtons = document.querySelectorAll(".key__number");
const operatorButtons = document.querySelectorAll(".key__operator");
const calculatorDisplay = document.querySelector(".calculator__display");
const historyDisplay = document.querySelector(".history__display");
const operatorDisplay = document.querySelector(".operator__display");
const equalKey = document.querySelector(".key__equal");



//Functions to perform mathemagical calculations lol, each takes 2 parameters the firstNumber and the second Number
//------------------------------------------------------------------------------------------
//Addition function
function addNumbers(firstNumber, secondNumber){
calculatorDisplay.innerText= Number(firstNumber) + Number(secondNumber);
}

//Subtraction function
function subtractNumbers(firstNumber, secondNumber){
    calculatorDisplay.innerText= Number(secondNumber) - Number(firstNumber);
}

//Division Function
function divideNumbers(firstNumber, secondNumber){
    calculatorDisplay.innerText= Number(secondNumber)/Number(firstNumber);
}

//Multiplication Function
function multiplyNumbers(firstNumber, secondNumber){
    calculatorDisplay.innerText= Number(firstNumber)*Number(secondNumber);
}



//Functions which manage/save the numbers and operators
//------------------------------------------------------------------------------------------



//A function which prints a number onto the calculator display
function printOuput(number){
    calculatorDisplay.innerText = number;
}

//A function which will print a number onto the history display
function printHistory(number){
    historyDisplay.innerText = number;
}

//A function which will save an operator in a area of the page lol
function saveOperator(operator){
    operatorDisplay.innerText = operator;
}
     


//For Loops which log the number and operator keys
//------------------------------------------------------------------------------------------------


//A for-loop to log the numbers being pressed 
for(index = 0; index<numberButtons.length; index++){
    numberButtons[index].addEventListener("click", ()=>{
        
        const keyNumber = event.target.innerText //value within the pressed number button
        const displayValue = calculatorDisplay.innerText //calculator display number
        
    
        if(Number(displayValue) != NaN){
            var number = displayValue + keyNumber;
            printOuput(number);
        }


    })
}

        
//A for-loop to log the operator keys being pressed
for(index = 0; index<operatorButtons.length; index++){
    operatorButtons[index].addEventListener("click", ()=>{
        
        const symbol = event.target.innerText;
        const keyValue = event.target.innerText;
        const currentDisplay = calculatorDisplay.innerText
        const savedOperator = operatorDisplay.innerText
        console.log(keyValue);


        if(calculatorDisplay.innerText != ""){

            printHistory(currentDisplay); //will save the current value to history
            printOuput(""); //will reset the output to nothing
            operatorDisplay.classList.remove("hidden");
            historyDisplay.classList.remove("hidden");
            switch(symbol){
                case "+":
                case "-":
                case "÷":
                case "x":
                    if(savedOperator != ""){
                    } else{
                        saveOperator(symbol);
                        console.log("operator saved");
                        }
                    break;

                case "C":
                    printOuput("");
                    printHistory("");
                    saveOperator("");
                    break;
            }
        }
    })
}



//Procedure for determining what calculations are performed when the equal key is pressed, depending on the 'saved operator'
//------------------------------------------------------------------------------------------


//Event listener added to determine what happens when equal key is pressed
equalKey.addEventListener("click", ()=>{

    const currentNumber = calculatorDisplay.innerText;
    const firstNumber = historyDisplay.innerText;
    const operator = operatorDisplay.innerText;

    if(currentNumber != "" && firstNumber != "" && operator != ""){

        switch(operator){
            case "+":
                addNumbers(currentNumber, firstNumber);
                break;
            case "-":
                subtractNumbers(currentNumber, firstNumber);
                break;
            case "x":
                multiplyNumbers(currentNumber, firstNumber);
                break;
            case "÷":
                divideNumbers(currentNumber, firstNumber);
                break;
        }
        saveOperator("");
        operatorDisplay.classList.add("hidden");
        historyDisplay.classList.add("hidden");
        
        
    }

})
