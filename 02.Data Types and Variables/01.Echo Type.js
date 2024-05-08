function f(input) {
    if (typeof input === 'string') {
        console.log(`${typeof input} \n${input}`)
    } else if (typeof input === 'number') {
        console.log(`${typeof input} \n${input}`)
    } else {
        console.log(`${typeof input} \nParameter is not suitable for printing`)
    }
}

f('Hello Javascript!')
f(6)
f(null)