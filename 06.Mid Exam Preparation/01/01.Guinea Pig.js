function guineaPig(arr) {
    let input = arr.map(Number)

    let foodKg = input.shift()
    let hayKg = input.shift()
    let coverKg = input.shift()
    let guineaWeightKg = input.shift()

    for (let i = 1; i <= 30; i++) {
        foodKg -= 0.3
        if (i % 2 === 0) {
            hayKg -= foodKg * 0.05
        }
        if (i % 3 === 0) {
            coverKg -= guineaWeightKg / 3
        }

    }

    if (foodKg - 0 < 1e-3 || hayKg - 0 < 1e-3 || coverKg - 0 < 1e-3) {
        console.log(`Merry must go to the pet store!`)
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
    }

}

guineaPig(["10",
    "5",
    "5.2",
    "1"]
)