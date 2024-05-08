function oddAndEvenSum(num) {
    let str = num.toString()
    let even = []
    let odd = []
    let sumEven = 0
    let sumOdd = 0


    for (let i = 0; i < str.length; i++) {
       if (str[i] % 2 === 0){
           even.push(parseInt(str[i]))
       }else{
           odd.push(parseInt(str[i]))
       }
    }


    for (let i = 0; i < odd.length; i++) {
        sumOdd +=odd[i]
    }

    for (let i = 0; i < even.length; i++) {
        sumEven +=even[i]
    }


    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

oddAndEvenSum(1000435)