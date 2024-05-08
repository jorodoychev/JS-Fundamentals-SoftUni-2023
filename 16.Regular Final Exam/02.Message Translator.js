function messageTranslator(array) {
    let numberOfCommands = Number(array.shift())

    for (let i = 0; i < numberOfCommands; i++) {
        let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})]/g.exec(array[i])

        if (pattern) {
            let numbersASCII = []
            let command = pattern.groups.command
            let message = pattern.groups.message

            message.split('').forEach(char => numbersASCII.push(char.charCodeAt(0)))

            console.log(`${command}: ${numbersASCII.join(' ')}`)

        } else {
            console.log(`The message is invalid`)
        }
    }
}

messageTranslator(["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"])

