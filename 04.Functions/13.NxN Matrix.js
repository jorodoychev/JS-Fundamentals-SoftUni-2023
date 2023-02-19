function nxNMatrix(n) {

    for (let i = 0; i < n; i++) {
        let matrix = n.toString() + ' '
        console.log(matrix.repeat(n))
    }
}

nxNMatrix(3)