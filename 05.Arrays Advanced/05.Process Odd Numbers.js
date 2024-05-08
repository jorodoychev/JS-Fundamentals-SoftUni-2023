function processOddNumbers(arr) {
    return arr
        .filter((num, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ')

}

console.log(processOddNumbers([10, 15, 20, 25]))