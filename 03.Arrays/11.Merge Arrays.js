function mergeArrays (arr1, arr2) {
let mergedArr = []
    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[i]
        let b = arr2[i]
        if (i % 2 === 0){
            a = Number(a)
            b = Number(b)
        }
        let result = a + b

        mergedArr.push(result)
    }

    console.log(mergedArr.join(' - '))
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)