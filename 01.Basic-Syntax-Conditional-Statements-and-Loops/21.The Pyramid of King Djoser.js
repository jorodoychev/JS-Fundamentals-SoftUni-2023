function thePyramidOfKingDjoser(base, increments) {
    let stone = 0;
    let marable = 0;
    let gold = 0;
    let steps = 0;

    let totalStone = 0;
    let totalMarbel = 0;
    let totalLap = 0;

    while (base > 2) {
        marable = base * 4 - 4;
        stone = base * base - marable;
        totalStone += stone;

        steps++;
        if (steps % 5 === 0) {
            totalLap += marable;
        } else {
            totalMarbel += marable;
        }

        base -= 2;
    }
    steps++;
    gold = base * base;

    stone = Math.ceil(totalStone * increments);
    marable = Math.ceil(totalMarbel * increments);
    totalLap = Math.ceil(totalLap * increments);
    gold = Math.ceil(gold * increments);
    steps = Math.floor(steps * increments);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marable}`);
    console.log(`Lapis Lazuli required: ${totalLap}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${steps}`);
}


thePyramidOfKingDjoser(11, 1)