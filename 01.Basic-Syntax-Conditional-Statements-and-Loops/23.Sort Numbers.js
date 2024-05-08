function sortNumbers(...nums) {

    let reversedNums = nums.sort().reverse();

    for (let i = 0; i < reversedNums.length; i++) {
        console.log(reversedNums[i])
    }
}

sortNumbers(2, 1, 3);