function f(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log('yes')
    } else {
        console.log('no')
    }

}

f(1984)
f(2003)
f(4)