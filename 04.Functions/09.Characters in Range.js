function charactersInRange(chr1, chr2) {
    let start = chr1.charCodeAt(0)
    let end = chr2.charCodeAt(0)
    let text = ''


    if (start < end){
        for (let i = start + 1; i < end; i++) {
            text += String.fromCharCode(i) + ' '

        }
    } else if(start > end){
        for (let i = end + 1; i < start; i++) {
            text += String.fromCharCode(i) + ' '

        }
    }

    console.log(text)

}

charactersInRange('C',
    '#'
)