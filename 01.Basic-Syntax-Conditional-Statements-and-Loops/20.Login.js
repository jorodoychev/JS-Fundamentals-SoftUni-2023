function login(input) {
    let username = input.shift().toString();
    let password = input.pop().toString();
    let other = input.join(',').toString();
    let reversedPass = password.split('').reverse().join('');

    for (let i = 0; i < input.length; i++) {
        if (other !== reversedPass) {
            console.log(`Incorrect password. Try again.`);
        }
    }
    if (username === reversedPass) {
        console.log(`User ${username} logged in.`);
    } else if (username !== reversedPass) {
        console.log(`User ${username} blocked!`);
    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['momo', 'omom'])
