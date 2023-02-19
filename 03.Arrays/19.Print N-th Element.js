function solve(arr) {

    let lastNum = arr.pop();
    let resultArr = [];

    for (let i in arr) {
        if (i % lastNum === 0) {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join(' '));
}

solve(['5', '20', '31', '4', '20', '2'])