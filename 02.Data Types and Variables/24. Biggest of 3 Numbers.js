function f(num1, num2, num3) {
let biggestNum = num1
    if (biggestNum < num2){
        biggestNum = num2
        if (biggestNum < num3){
            biggestNum = num3

        }
    }
    console.log(biggestNum)
}

f(-2, 7, 3)
f(43,
    43.2,
    43.1
)
f(2,
    2,
    2
)