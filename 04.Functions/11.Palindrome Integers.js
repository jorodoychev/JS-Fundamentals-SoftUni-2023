function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
       let str = arr[i].toString()
        let newStr = str.split('').reverse().join('')
        if (str === newStr){
            console.log(true)
        } else {
            console.log(false)
        }

    }
}

palindromeIntegers([123,323,421,121])