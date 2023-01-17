function solve(data) {
    let priceGold = 67.51
    let priceBitcoin = 11949.16
    let bitcoinCount = 0
    let firstDay
    let totalMoney = 0

    for (let i = 1; i <= data.length; i++) {
        let goldMined = data[i - 1];

        if (i % 3 === 0) {
            goldMined *= 0.7;
            totalMoney += goldMined * priceGold;
        } else {
            totalMoney += goldMined * priceGold;
        }
        if (totalMoney >= priceBitcoin) {
            if (firstDay === undefined) {
                firstDay = i;
            }
            bitcoinCount += parseInt(totalMoney / priceBitcoin);
            totalMoney -= parseInt(totalMoney / priceBitcoin) * priceBitcoin;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstDay !== undefined) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}

solve([100, 200, 300])