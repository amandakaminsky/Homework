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