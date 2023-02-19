function maxNumber(arr = []) {
    let result = []


    for (let i = 0; i < arr.length; i++) {
        let isTopInt = true
        let currentElement = arr[i]
        let rightElementsArray = arr.slice(i + 1)

        for (let j = 0; j < rightElementsArray.length; j++) {
            if (currentElement <= rightElementsArray[j]) {
                isTopInt = false
                break
            }

        }
        if (isTopInt) {
            result.push(currentElement)
        }

    }
    console.log(result.join(' '))
}

maxNumber([1, 4, 3, 2])