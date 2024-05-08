function dictionary(arrayOfJSONs) {
    let result = arrayOfJSONs.reduce((acc, json) => {
        const obj = JSON.parse(json)
        return {...acc, ...obj}
    }, {});

    result = sortObjectByKeys(result);

    for (let term in result) {
        console.log(`Term: ${term} => Definition: ${result[term]}`)
    }

    function sortObjectByKeys(obj) {
        return Object.keys(obj).sort().reduce((result, key) => {
            result[key] = obj[key];
            return result;
        }, {});
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
