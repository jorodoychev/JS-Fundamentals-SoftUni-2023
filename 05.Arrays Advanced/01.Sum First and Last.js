function sumFirstAndLast(arr) {
    let firstEl = +arr.shift()
    let lastEl = +arr.pop()
    return firstEl + lastEl
}

console.log(sumFirstAndLast(['20', '30', '40']))