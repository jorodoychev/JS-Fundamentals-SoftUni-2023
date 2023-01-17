function solve(peopleCount, typeGroup, day) {
    let totalPrice;
    let personPrice = 0;

    if (typeGroup === 'Students') {
        if (day === 'Friday') {
            personPrice = 8.45;
        } else if (day === 'Saturday') {
            personPrice = 9.80;
        } else if (day === 'Sunday') {
            personPrice = 10.46;
        }
    }
    if (typeGroup === 'Business') {
        if (day === 'Friday') {
            personPrice = 10.90;
        } else if (day === 'Saturday') {
            personPrice = 15.60;
        } else if (day === 'Sunday') {
            personPrice = 16;
        }
    }
    if (typeGroup === 'Regular') {
        if (day === 'Friday') {
            personPrice = 15;
        } else if (day === 'Saturday') {
            personPrice = 20;
        } else if (day === 'Sunday') {
            personPrice = 22.50;
        }
    }

    totalPrice = personPrice * peopleCount;

    if (peopleCount >= 30 && typeGroup === 'Students') {
        totalPrice = personPrice * peopleCount;
        let discount = totalPrice * 0.15;
        totalPrice -= discount;

    } else if (peopleCount >= 100 && typeGroup === 'Business') {
        peopleCount -= 10;
        totalPrice = personPrice * peopleCount;

    } else if (peopleCount >= 10 && peopleCount <= 20 && typeGroup === 'Regular') {
        totalPrice = personPrice * peopleCount;
        let discount = totalPrice * 0.05;
        totalPrice -= discount;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40,
    "Regular",
    "Saturday"
)