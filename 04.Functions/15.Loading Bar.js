function loadingBar(input) {

    let bar = ''
    let point = ''

    for (let i = 0; i < input / 10; i++) {
        bar += '%'

    }
    for (let i = 0; i < 10 - bar.length; i++) {
        point += '.'
    }
    if (input === 100) {
        console.log('100% Complete!')
    }

    if (input < 100) {
        console.log(`${input}% [${bar}${point}]`)
        console.log('Still loading...')

    }
}

loadingBar(30)