function tripleLetters(n) {
    for (let i = 0; i < Number(n); i++) {
        let firstLetter = String.fromCharCode(i + 97);
        for (let j = 0; j < Number(n); j++) {
            let secondLetter = String.fromCharCode(j + 97);
            for (let k = 0; k < Number(n); k++) {
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

tripleLetters(3)