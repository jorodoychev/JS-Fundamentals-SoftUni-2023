function arrayModifier(array) {
    let numbers = array.shift().split(" ").map(Number)

    for (let i = 0; i < array.length; i++) {
        let [command, firstNum, secondNum] = array[i].split(" ")

        firstNum = Number(firstNum)
        secondNum = Number(secondNum)

        switch (command) {
            case "swap":
                swapElements(firstNum, secondNum)
                break
            case "multiply":
                multiplyElements(firstNum, secondNum)
                break
            case "decrease":
                decreaseElements()
                break
            case "end":
                break
        }
    }

    function swapElements(elOne, elTwo) {
        let temp = numbers[elOne]
        numbers[elOne] = numbers[elTwo]
        numbers[elTwo] = temp
    }

    function multiplyElements(elOne, elTwo) {
        numbers[elOne] = numbers[elOne] * numbers[elTwo]
    }

    function decreaseElements() {
        numbers = numbers.map((element) => element - 1
        )
    }

    console.log(numbers.join(", "))
}

arrayModifier( [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]
)