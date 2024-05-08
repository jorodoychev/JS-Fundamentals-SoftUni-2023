function cats(arr) {
    let cats = []

    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ')
        cats.push(new Cat(catData[0], catData[1]))
    }

    for (const cat of cats) {
       cat.meow()
    }
}

cats(['Mellow 2', 'Tom 5'])