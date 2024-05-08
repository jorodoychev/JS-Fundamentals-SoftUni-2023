function dictionary(input) {

    let notebook = {}

    input[0].split(" | ").forEach(pair => {
        let [word, definition] = pair.split(": ")
        if (!notebook[word]) {
            notebook[word] = []
        }
        notebook[word].push(definition)
    })

    let testWords = input[1].split(" | ")
    let command = input[2]

    if (command === "Test") {
        testWords.forEach(word => {
            if (notebook[word]) {
                console.log(`${word}:`)
                notebook[word].forEach(definition => {
                    console.log(`-${definition}`)
                })
            }
        })
    } else if (command === "Hand Over") {
        console.log(Object.keys(notebook).join(" "))
    }
}

dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",

    "fish | domino",

    "Hand Over"])

dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",

    "bit | code | tackle",

    "Test"])