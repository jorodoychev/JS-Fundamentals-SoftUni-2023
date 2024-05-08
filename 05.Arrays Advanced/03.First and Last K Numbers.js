function firstAndLastKNumbers(arr) {
    arr = arr.map(Number);
    let k = arr.shift()

    let firstK = arr.slice(0, k).join(' ')
    let lastK = arr.slice((arr.length - k), arr.length).join(' ')

    console.log(firstK)
    console.log(lastK)

}

console.log(firstAndLastKNumbers([2, 7, 8, 9]))
console.log(firstAndLastKNumbers([3, 6, 7, 8, 9]))