function blackFlag(input) {
    let daysOfThePlunder = Number(input[0])
    let dailyPlunder = Number(input[1])
    let expectedPlunder = Number(input[2])

    let plunder = 0
    let losePlunder = 0.3


    for (let i = 1; i <= daysOfThePlunder; i++) {
        if (i % 3 === 0){
            plunder += dailyPlunder / 2
        }

        plunder += dailyPlunder

        if (i % 5 === 0){
            plunder -= plunder * losePlunder
        }

    }

    if (plunder >= expectedPlunder){
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${((plunder / expectedPlunder)* 100).toFixed(2)}% of the plunder.`)
    }

}

blackFlag(["5",
    "40",
    "100"])

blackFlag((["10",
    "20",
    "380"])
)
