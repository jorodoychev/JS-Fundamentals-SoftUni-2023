function addAndSubtract(arr) {
    let modifiedArr = []
    let sum = 0
    let modSum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] % 2 === 0) {
            modifiedArr.push(arr[i] + i)
        } else {
            modifiedArr.push(arr[i] - i)
        }

    }

    for (const modifiedArrElement of modifiedArr) {
        modSum += modifiedArrElement
    }
    console.log(modifiedArr)
    console.log(sum)
    console.log(modSum)
}

addAndSubtract([5, 15, 23, 56, 35])