function guessANumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let computerGuess = Math.floor(Math.random() * 100)
    let guess
    let answerText


    let recursiveAsyncReadLine = function () {
        readline.question('Guess a number (0-100): ', number => {
            guess = Number(number)

            if (guess <= 100 && guess >= 0) {
                if (guess === computerGuess) {
                    console.log('You guess it!')
                    readline.question('Do you want to play again? (y/n) ', answer => {
                        answerText = (answer)
                        if (answerText === 'y') {
                            recursiveAsyncReadLine()
                        } else {
                            console.log('Goodbye!')
                            return readline.close()
                        }
                    })

                } else if (guess < computerGuess) {
                    console.log('Too Low!')
                    recursiveAsyncReadLine()
                } else if (guess > computerGuess) {
                    console.log('Too High!')
                    recursiveAsyncReadLine()
                } else {
                    console.log('Invalid input! Try again...')
                    recursiveAsyncReadLine()
                }
            }
        })

    }
    recursiveAsyncReadLine()
}

guessANumber()