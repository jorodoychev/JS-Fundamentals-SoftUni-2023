function f(number, precision) {
    let a = Number(number);
    let b = Number(precision);

    if(b > 15) {
        b = 15;
    }
    a = a.toFixed(b);
    console.log(parseFloat(a));

}

f(3.1415926535897932384626433832795, 2)