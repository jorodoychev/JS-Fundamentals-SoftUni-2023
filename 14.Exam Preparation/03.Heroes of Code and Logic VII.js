function heroesOfCodeAndLogicVII(input) {
    const heroes = [];
    const maxHP = 100;
    const maxMP = 200;

    // parse input
    const n = parseInt(input[0]);
    for (let i = 1; i <= n; i++) {
        const [name, hp, mp] = input[i].split(' ');
        heroes.push({ name, hp: parseInt(hp), mp: parseInt(mp) });
    }

    // process commands
    let i = n + 1;
    while (input[i] !== 'End') {
        const [command, heroName, ...args] = input[i].split(' – ');
        const hero = heroes.find(h => h.name === heroName);

        switch (command) {
            case 'CastSpell': {
                const [mpNeeded, spellName] = args;
                const mp = parseInt(mpNeeded);
                if (hero.mp >= mp) {
                    hero.mp -= mp;
                    console.log(`${hero.name} has successfully cast ${spellName} and now has ${hero.mp} MP!`);
                } else {
                    console.log(`${hero.name} does not have enough MP to cast ${spellName}!`);
                }
                break;
            }
            case 'TakeDamage': {
                const [damage, attacker] = args;
                const hp = parseInt(damage);
                hero.hp -= hp;
                if (hero.hp > 0) {
                    console.log(`${hero.name} was hit for ${hp} HP by ${attacker} and now has ${hero.hp} HP left!`);
                } else {
                    heroes.splice(heroes.indexOf(hero), 1);
                    console.log(`${hero.name} has been killed by ${attacker}!`);
                }
                break;
            }
            case 'Recharge': {
                const amount = parseInt(args[0]);
                const recovered = Math.min(maxMP - hero.mp, amount);
                hero.mp += recovered;
                console.log(`${hero.name} recharged for ${recovered} MP!`);
                break;
            }
            case 'Heal': {
                const amount = parseInt(args[0]);
                const recovered = Math.min(maxHP - hero.hp, amount);
                hero.hp += recovered;
                console.log(`${hero.name} healed for ${recovered} HP!`);
                break;
            }
        }

        i++;
    }
}



heroesOfCodeAndLogicVII([
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
    ]

)