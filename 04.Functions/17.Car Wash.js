function carWash(input) {
    let price = 0


    for (const command of input) {
        switch (command) {
            case 'soap':
                price += 10
                break
            case 'water':
                price += price * 0.20
                break
            case 'vacuum cleaner':
                price += price * 0.25
                break
            case 'mud':
                price -= price * 0.1
        }
    }

    console.log(`The car is ${price.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])