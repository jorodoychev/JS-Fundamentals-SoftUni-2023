function movingTarget(input) {
    let target = input.shift().split(` `).map(Number)

    let token = input.shift()

    while(token !== `End`) {
        let currentCommand =  token.split(` `)
        let command = currentCommand[0]
        let index =Number(currentCommand[1])
        let value = Number(currentCommand[2])

        if(command === `Shoot`) {
            shoot(index,value);
        } else if(command === `Add`) {
            add(index,value);
        } else if(command === `Strike`) {
            strike(index,value);
        }

        token = input.shift();
    }
    function shoot(index,power) {

        if(!(target[index] === undefined)) {
            let ind = target[index]
            ind = ind - power

            if(ind <= 0) {
                target.splice(index,1)
            } else {
                target.splice(index,1,ind)
            }
        }

    }

    function add(index,value) {
        if(!(target[index] === undefined)) {
            target.splice(index,0,value)
        } else {
            console.log(`Invalid placement!`)
        }

    }

    function strike(index, radius) {
        if (index + radius <= target.length - 1 && index - radius >= 0) {
            target.splice(index - radius, radius * 2 + 1);
        } else {
            console.log(`Strike missed!`);
        }
    }



    console.log(target.join(`|`));


}
movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]);