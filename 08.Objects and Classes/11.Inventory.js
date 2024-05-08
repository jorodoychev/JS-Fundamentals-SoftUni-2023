function inventory(input) {
    let heroes = []

    class Hero {
        constructor(heroName, heroLevel, items) {
            this.heroName = heroName
            this.heroLevel = Number(heroLevel)
            this.items = items

        }
    }

    for (const el of input) {
        let token = el.split(' / ')
        let [name, level, ...items] = token

        heroes.push(new Hero(name, level, items))

    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel)

    for (const hero of heroes) {
        console.log(`Hero: ${hero.heroName}`)
        console.log(`level => ${hero.heroLevel}`)
        console.log(`items => ${hero.items}`)
    }
}

inventory([
        'Batman / 2 / Banana, Gun',
        'Superman / 38 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
)

