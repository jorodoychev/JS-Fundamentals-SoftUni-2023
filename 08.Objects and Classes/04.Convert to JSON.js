function convertToJSON(name, lastName, hairColor) {
    let person = {}

    person.name = name
    person.lastName = lastName
    person['hairColor'] = hairColor

    let jsonStr = JSON.stringify(person)
    console.log(jsonStr)

}

convertToJSON('George', 'Jones', 'Brown')