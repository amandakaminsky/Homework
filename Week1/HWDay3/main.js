//My Function
function get10FibNums() {
    let firstNum = 0;
    let secondNum = 1;
    let nextNum;
    console.log(firstNum);
    console.log(secondNum);
    for (let i = 0; i < 8; i++) {
        nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
        console.log(nextNum);
    }
}

console.log(get10FibNums());

//Sim's Function
function print_fibonacci_sequence(){
    num1 = 0;
    num2 = 1;
    nextTerm = num1 + num2;
    console.log(num1);
    console.log(num2);

    for(let i = 3; i <= 10; i++){
        console.log(nextTerm);
        num1 = num2;
        num2 = nextTerm;
        nextTerm = num1 + num2;
    }
}

print_fibonacci_sequence();



