function is_perfect(n) {
    let temp = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            temp += i;
        }
    }
    if (temp === n && temp !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

is_perfect(6);


