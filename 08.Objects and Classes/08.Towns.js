function towns(arr) {
    let towns = []

    class Town {
        constructor(name, latitude, longitude) {
            this.name = name
            this.latitude = latitude
            this.longitude = longitude
        }

    }

    for (let i = 0; i < arr.length; i++) {
        let [name, latitude, longitude] = arr[i].split(' | ')
        let town = new Town(name, Number(latitude), Number(longitude))
        towns.push(town)
    }

    return towns.forEach((i)=>console.log(`{ town: '${i.name}', latitude: '${i.latitude.toFixed(2)}', longitude: '${i.longitude.toFixed(2)}' }`))
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)