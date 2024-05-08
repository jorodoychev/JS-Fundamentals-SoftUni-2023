function secretChat(input) {
    let message = input.shift()
    let command = input.shift()
    while (command !== "Reveal") {
        let [operation, ...args] = command.split(":|:")
        switch (operation) {
            case "InsertSpace":
                let index = Number(args[0])
                message = message.slice(0, index) + " " + message.slice(index)
                console.log(message)
                break;
            case "Reverse":
                let substring = args[0]
                if (message.includes(substring)) {
                    let reversed = substring.split("").reverse().join("")
                    message = message.replace(substring, "")
                    message += reversed
                    console.log(message)
                } else {
                    console.log("error")
                }
                break;
            case "ChangeAll":
                let target = args[0]
                let replacement = args[1]
                message = message.split(target).join(replacement)
                console.log(message)
                break;
        }
        command = input.shift()
    }
    console.log(`You have a new text message: ${message}`)
}

secretChat([
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]
)
