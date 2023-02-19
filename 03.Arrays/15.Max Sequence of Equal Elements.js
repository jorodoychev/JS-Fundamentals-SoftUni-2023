function solve(arr) {

    let longestSeqLength = 1;
    let longestSeqStart = 0;
    let currentSeqLength = 1;
    let currentSeqStart = 0;
    let output = '';

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentSeqLength++;

            if (currentSeqLength > longestSeqLength) {
                longestSeqLength = currentSeqLength;
                longestSeqStart = currentSeqStart;
            }
        } else {
            currentSeqLength = 1;
            currentSeqStart = i;
        }
    }

    for (let i = longestSeqStart; i < longestSeqStart + longestSeqLength; i++) {

        output += arr[i] + ' ';

    }
    console.log(output);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
