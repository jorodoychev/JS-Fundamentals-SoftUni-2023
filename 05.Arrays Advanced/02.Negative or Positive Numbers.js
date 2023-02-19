function negativeOrPositiveNumbers(arr) {
    let result = []
    for (const arrElement of arr) {
        if (Number(arrElement) < 0) {
            result.unshift(arrElement)
        }
        else {
            result.push(arrElement)
        }
    }

    return result.join('\n')
}

console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']))