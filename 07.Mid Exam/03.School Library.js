function schoolLibrary(input) {
    let books = input.shift().split('&')

    const addBook = (bookName) => {
        if (!books.includes(bookName)) {
            books.unshift(bookName)
        }
    }

    const takeBook = (bookName) => {
        let index = books.indexOf(bookName)
        if (index !== -1) {
            books.splice(index, 1)
        }
    }

    const swapBooks = (book1, book2) => {
        let indexOne = books.indexOf(book1)
        let indexTwo = books.indexOf(book2)

        if (indexOne !== -1 && indexTwo !== -1) {
            let temp = books[indexOne]
            books[indexOne] = books[indexTwo]
            books[indexTwo] = temp
        }
    }

    const insertBook = (bookName) => {
        if (!books.includes(bookName)) {
            books.push(bookName)
        }
    }

    const checkBook = (index) => {
        index = Number(index)

        if (index >= 0 && index < books.length) {
            console.log(books[index])
        }
    }

    for (let i = 0; i < input.length; i++) {
        const [command, data, dataTwo] = input[i].split(' | ')

        if (command === 'Add Book') {
            addBook(data)
        } else if (command === 'Take Book') {
            takeBook(data)
        } else if (command === 'Insert Book') {
            insertBook(data)
        } else if (command === 'Check Book') {
            checkBook(data)
        } else if (command === 'Swap Books') {
            swapBooks(data, dataTwo)
        } else if (command === 'Done') {
            break
        }
    }

    console.log(books.join(', '))

}



schoolLibrary((["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"])
)

schoolLibrary((["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])
)

schoolLibrary((["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])
)