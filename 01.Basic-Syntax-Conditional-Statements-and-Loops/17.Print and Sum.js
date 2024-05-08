function solve(num1, num2) {
    let num = '';
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        num +=i + ' ';
        sum += i;

    }
    console.log(`${num}\nSum: ${sum}`);
}

solve(0, 26);