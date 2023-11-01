
let numberOne = [];
let numberTwo = [];
let operator = [];
let history = "";

const currentDisplay = document.querySelector('#current');
const historyDisplay = document.querySelector('#showHistory');
const allButtons = document.querySelectorAll('button');
const showOperator = document.querySelector('#showOperator')

allButtons.forEach((button)=>{
    console.log(button.textContent);
    button.addEventListener('click',(btn)=>{
        arrayLength = numberOne.length - 1;
        x = btn.target.textContent;
        // console.log("x = ",x);
        // console.log('target class=',btn.target.className)


        //button actions
        if (btn.target.className=='number' && operator.length==0){
            if (numberOne.includes('.') && (x == '.')){
                //do nothing
            }else{
                numberOne.push(x);
            }
            history = "";
            currentDisplay.textContent=numberOne.join("");
        }else if (btn.target.className=='number' && !(operator.length==0)){
            if (numberTwo.includes('.') && (x == '.')){
                //do nothing
            }else{
                numberTwo.push(x);
            }
        }else if (btn.target.className=='operator'){
            if ((numberOne.length==0)&&(history.length!=0)){
                numberOne = [history];
            }else if (numberOne.length>0 && numberTwo.length>0){
                numberOne = [calculate()];
                operator = [x];
                numberTwo = [];
            }
            const a =numberOne.join("");
            operator = [x];
            showOperator.textContent=a+" "+x;
        }else if (btn.target.className=='clearAll'){
            numberOne = [];
            numberTwo = [];
            operator = [];
            history = [];
            historyDisplay.textContent="";
            showOperator.textContent='';
        }else if (btn.target.className=='clear'){
            if(operator.length==0){
                numberOne=[];
            }else{
                numberTwo=[];
            }
        }else if ((btn.target.className=='calculate')&&(numberOne.length>0)&&(numberTwo.length>0)&&(operator.length>0)){
            //console.log("TIME TO CALCULATE");
            calculate();
            clear();
        }else{
            console.log('Error!')
        }


        //currentDisplay
        if(operator.length==0){
            if (numberOne.length==0){
                currentDisplay.textContent=0;
            }else{
                currentDisplay.textContent=numberOne.join("");
            }
        }
        else{
            if (numberTwo.length==0){
                currentDisplay.textContent=0;
            }else{
                currentDisplay.textContent=numberTwo.join("");
            }
            
        }
        
    });
    
});

function calculate(calculateArray){
    const operandOne = Number(numberOne.join(""));
    const operandTwo = Number(numberTwo.join(""));
    const op = operator[0];
    let result = 0;

    switch(op){
        case "+":
            result = (operandOne + operandTwo);
            break;
        case "-":
            result = (operandOne - operandTwo);
            console.log('subtract');
            break;
        case "*":
            result = (operandOne * operandTwo);
            console.log('multiply');
            break;
        case "/":
            result = (operandOne / operandTwo);
            console.log('dividing');
            break;
    }
    console.log('Result = '+result);
    historyDisplay.textContent ="History:"+ result;
    history = result;
    return result;
}

function clear(){
    numberOne = [];
    numberTwo = [];
    operator = [];
    showOperator.textContent='';
}

