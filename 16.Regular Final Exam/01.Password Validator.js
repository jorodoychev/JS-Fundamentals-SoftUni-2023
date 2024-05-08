function manipulatePassword(input) {
    let password = input.shift()

    for (let command of input) {
        let tokens = command.split(" ")
        let action = tokens[0]

        if (action === "Complete") {
            break
        }

        if (action === "Make") {
            let index = Number(tokens[2])
            let char = password.charAt(index)

            if (tokens[1] === "Upper") {
                password = password.substring(0, index) + char.toUpperCase() + password.substring(index + 1)
            } else if (tokens[1] === "Lower") {
                password = password.substring(0, index) + char.toLowerCase() + password.substring(index + 1)
            }
            console.log(password)

        } else if (action === "Insert") {
            let index = Number(tokens[1])

            if (index >= 0) {
                let char = tokens[2]
                password = password.substring(0, index) + char + password.substring(index)
                console.log(password)
            }

        } else if (action === "Replace") {
            let char = tokens[1]
            if (password.includes(char)) {
                let value = Number(tokens[2])
                let newChar = String.fromCharCode(char.charCodeAt(0) + value)
                password = password.split(char).join(newChar)
                console.log(password)
            }

        } else if (action === "Validation") {
            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!")
            }

            if (!/^[a-zA-Z0-9_]+$/.test(password)) {
                console.log("Password must consist only of letters, digits and _!")
            }

            if (!/[A-Z]/.test(password)) {
                console.log("Password must consist at least one uppercase letter!")
            }
            if (!/[a-z]/.test(password)) {
                console.log("Password must consist at least one lowercase letter!")
            }
            if (!/\d/.test(password)) {
                console.log("Password must consist at least one digit!")
            }

        }

    }
}

// Example usage:
manipulatePassword([
    '123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete',
]);

console.log('-------------------------')

manipulatePassword([
    'aE3456',
    'Make Upper 0',
    'Make Lower 1',
    'Insert 0 T',
    'Validation',
    'Complete',
]);


