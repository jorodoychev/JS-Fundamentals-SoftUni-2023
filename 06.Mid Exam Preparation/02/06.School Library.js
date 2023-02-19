function schoolLibrary(input) {
    let initialBooks = input.shift().split('&')

    const addBook = (bookName) => {
        if (!initialBooks.includes(bookName)) {
            initialBooks.unshift(bookName)
        }
    }

    const takeBook = (bookName) => {
        let index = initialBooks.indexOf(bookName)
        if (index !== -1) {
            initialBooks.splice(index, 1)
        }
    }

    const swapBooks = (book1, book2) => {
        let indexOne = initialBooks.indexOf(book1)
        let indexTwo = initialBooks.indexOf(book2)

        if (indexOne !== -1 && indexTwo !== -1) {
            let temp = initialBooks[indexOne]
            initialBooks[indexOne] = initialBooks[indexTwo]
            initialBooks[indexTwo] = temp
        }
    }

    const insertBook = (bookName) => {
        if (!initialBooks.includes(bookName)) {
            initialBooks.push(bookName)
        }
    }

    const checkBook = (index) => {
        index = Number(index)

        if (index >= 0 && index < initialBooks.length) {
            console.log(initialBooks[index])
        }
    }

    for (const line of input) {
        const [command, token, tokenTwo] = line.split(' | ')

        if (command === 'Add Book') {
            addBook(token)
        } else if (command === 'Take Book') {
            takeBook(token)
        } else if (command === 'Insert Book') {
            insertBook(token)
        } else if (command === 'Check Book') {
            checkBook(token)
        } else if (command === 'Swap Books') {
            swapBooks(token, tokenTwo)
        } else if (command === 'Done') {
            break
        }
    }

    console.log(initialBooks.join(', '))

}

schoolLibrary(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    'Insert Book | Alice Adventures in Wonderland',
    'Check Book | 3',
    'Done'])