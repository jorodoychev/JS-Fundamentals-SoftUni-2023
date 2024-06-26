function pointsValidation(arr) {

    let points = [[0, 0]]; //Двумерен масив за координатите на точките. Центъра на координатната система е първа точка

    //Добавя в масива останалите точки
    for (let index = 0; index < arr.length; index++) {
        points.push([arr[index], arr[++index]]);
    }

    // Избира първа точка от началото на масива до предпоследната
    for (let firstPoint = 0; firstPoint < points.length - 1; firstPoint++) {


        // Избира втора точка, от следващата до последната в масива
        for (let secondPoint = firstPoint + 1; secondPoint < points.length; secondPoint++) {

            let sectionLength = checkSection(firstPoint, secondPoint); // изчислява дължината на отсечката между двете точки

            //Проверка и печат (втората проверка е за да се обърне последователността на точките при принтиране)
            if (sectionLength === Math.trunc(sectionLength)) {
                if (firstPoint === 0) {
                    console.log(`{${points[secondPoint][0]}, ${points[secondPoint][1]}} to {${points[firstPoint][0]}, ${points[firstPoint][1]}} is valid`);
                } else {
                    console.log(`{${points[firstPoint][0]}, ${points[firstPoint][1]}} to {${points[secondPoint][0]}, ${points[secondPoint][1]}} is valid`);
                }

            } else {
                if (firstPoint === 0) {
                    console.log(`{${points[secondPoint][0]}, ${points[secondPoint][1]}} to {${points[firstPoint][0]}, ${points[firstPoint][1]}} is invalid`);
                } else {
                    console.log(`{${points[firstPoint][0]}, ${points[firstPoint][1]}} to {${points[secondPoint][0]}, ${points[secondPoint][1]}} is invalid`);
                }
            }

        }

    }

    function checkSection(firstPoint, secondPoint) {
        return Math.sqrt(Math.pow(points[secondPoint][0] - points[firstPoint][0], 2) + Math.pow(points[secondPoint][1] - points[firstPoint][1], 2));
    }

}

pointsValidation([2, 1, 1, 1])