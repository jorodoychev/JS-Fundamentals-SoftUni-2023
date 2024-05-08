function coffeeLover(arr) {
    let line = arr.shift().split(' ')
    let countOfCommands = Number(arr.shift())

    const include = (item) => {
        line.push(...item)
    }

    const removeElem = (items) => {
        if (line.length > 1) {
            let [action, count] = items
            count = Number(count)

            if (action === 'first') {
                line.splice(0, count)
            } else if (action === 'last') {
                line.splice(-count)
            }
        }
    }

    const prefer = (items) => {
        items = items.map(Number).sort((a, b) => a - b)

        let isInvalid = items.some((x) => x < 0 || x > line.length - 1)
        if (isInvalid) {
            return
        }

        let index1 = items[0];
        let index2 = items[1];
        let elem1 = line.splice(index1, 1)
        let elem2 = line.splice(index2 - 1, 1)
        line.splice(index1, 0, elem2[0])
        line.splice(index2, 0, elem1[0])
    }
    const reverse = () => {
        line.reverse()
    }

    for (let i = 0; i < countOfCommands; i++) {
        let [command, ...elems] = arr[i].split(' ')
        if (command === 'Include') {
            include(elems)
        } else if (command === 'Remove') {
            removeElem(elems)
        } else if (command === 'Prefer') {
            prefer(elems)
        } else if (command === 'Reverse') {
            reverse()
        }
    }

    console.log(`Coffees:\n${line.join(' ')}`)
}

coffeeLover((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"])
)

coffeeLover((["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])
)

coffeeLover((["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"])
)