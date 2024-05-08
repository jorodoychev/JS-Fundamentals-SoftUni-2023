function bonusScoringSystem(arr) {
    let input = arr.map(Number)

    let studentsCount = input.shift()
    let lecturesCount = input.shift()
    let additionalBonus = input.shift()

    let highest = 0
    let attendedLectures = 0

    for (let i = 0; i < studentsCount; i++) {

        let attendance = input.shift()
        let totalBonus = Math.round(attendance / lecturesCount * (5 + additionalBonus))

        if (totalBonus >= highest) {
            highest = totalBonus
            attendedLectures = attendance
        }
    }
    console.log(`Max Bonus: ${highest}.`)
    console.log(`The student has attended ${attendedLectures} lectures.`)

}

bonusScoringSystem([
        '5', '25', '30',
        '12', '19', '24',
        '16', '20'
    ]
)