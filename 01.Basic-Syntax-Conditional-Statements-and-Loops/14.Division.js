function f(number) {
    let division = 0;
    let flag = false;

    if (number % 10 === 0) {
        division = 10;
        flag = true;
    } else if (number % 7 === 0) {
        division = 7;
        flag = true;
    } else if (number % 6 === 0) {
        division = 6;
        flag = true;
    } else if (number % 3 === 0) {
        division = 3;
        flag = true;
    } else if (number % 2 === 0) {
        division = 2;
        flag = true;
    }

    if (flag) {
        console.log(`The number is divisible by ${division}`);
    } else {
        console.log('Not divisible')
    }

}


f(30)