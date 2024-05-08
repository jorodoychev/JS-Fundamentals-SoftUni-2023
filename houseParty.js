function houseParty(arr) {
    let list = []

    for (const listElement of arr) {
        const commands = listElement.split(' is ')
        const name = commands[0]
        const command = commands[1]

        if (command === 'going!') {
            if (list.indexOf(name) === -1) {
                list.push(name)
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (list.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`)
            } else {
                list.splice(list.indexOf(name), 1)
            }
        }


    }
    console.log(list.join('\n'))

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)