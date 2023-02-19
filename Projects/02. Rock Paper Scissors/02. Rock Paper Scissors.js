function rockPaperScissors() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let isInvalidArg = false

    const rock = 'rock'
    const paper = 'paper'
    const scissors = 'scissors'

    let playerTurn
    let computerMove

    let recursiveAsyncReadLine = function () {
        readline.question('You turn: (rock, paper, scissors - r, p, s) - ', input => {
            playerTurn = input

            if (playerTurn === 'r' || playerTurn === 'rock') {
                playerTurn = rock;
            } else if (playerTurn === 'p' || playerTurn === 'paper') {
                playerTurn = paper;
            } else if (playerTurn === 's' || playerTurn === 'scissors') {
                playerTurn = scissors;
            } else {
                isInvalidArg = true
                console.log('Invalid input!')
                readline.question('Do you want to play again? (y/n) ', answer => {
                    let answerText = (answer)
                    if (answerText === 'y') {
                        isInvalidArg = false
                        recursiveAsyncReadLine()
                    } else {
                        console.log('Goodbye!')
                        return readline.close()
                    }
                })

            }

            let computerRandomNumber = Math.floor(Math.random() * 3) + 1

            if (isInvalidArg !== true) {
                switch (computerRandomNumber) {
                    case 1:
                        computerMove = rock
                        break
                    case 2:
                        computerMove = paper
                        break
                    case 3:
                        computerMove = scissors
                        break
                }
                console.log(`The computer chooses ${computerMove}`);
            }

            if (isInvalidArg !== true) {
                if ((playerTurn === rock && computerMove === scissors) ||
                    (playerTurn === paper && computerMove === rock) ||
                    (playerTurn === scissors && computerMove === paper)) {
                    console.log('You win!')
                    recursiveAsyncReadLine()
                } else if ((computerMove === rock && playerTurn === scissors) ||
                    (computerMove === scissors && playerTurn === paper) ||
                    (computerMove === paper && playerTurn === rock)) {
                    console.log('You lose!')
                    recursiveAsyncReadLine()

                } else {
                    console.log('This game was a draw!')
                    recursiveAsyncReadLine()
                }


            }

        })

    }
    recursiveAsyncReadLine()

}

rockPaperScissors()