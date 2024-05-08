function solve(startYield) {
    let yieldSpice = startYield
    let days = 0
    let extractedSpice = 0
    let crewConsumptionPerDay = 26
    let endOfShiftConsumption = 26;

    while (yieldSpice >= 100) {
        extractedSpice += yieldSpice
        extractedSpice -= crewConsumptionPerDay
        if (extractedSpice < 0) {
            extractedSpice = 0
        }
        days++
        yieldSpice -= 10
    }

    if (yieldSpice < 100) {
        extractedSpice -= endOfShiftConsumption;
        if (extractedSpice < 0) {
            extractedSpice = 0;
        }
    }
    console.log(days);
    console.log(extractedSpice);

}

solve(111)