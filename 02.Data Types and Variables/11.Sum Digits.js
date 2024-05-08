function f(num) {
    let t = num.toString()
    let sum = 0
    for (let i = 0; i < t.length; i++) {
        sum += Number(t[i])
    }
    console.log(sum)
}

f(245678)

function solve(value) {

    let sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

    console.log(sum)


}

solve(543)