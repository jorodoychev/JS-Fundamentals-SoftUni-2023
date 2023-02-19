function f(num) {
    let day = ''
    switch (num) {
        case 1:
            day = 'Monday'
            break
        case 2:
            day = 'Tuesday'
            break
        case 3:
            day = 'Wednesday'
            break
        case 4:
            day = 'Thursday'
            break
        case 5:
            day = 'Friday'
            break
        case 6:
            day = 'Saturday'
            break
        case 7:
            day = 'Sunday'
            break
        default:
            day = 'Invalid day!'

    }

    console.log(day)
}

function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day >= 1 && day <= 7)
        console.log(days[day - 1]);
    else
        console.log("Invalid day!");
}


f(2)
dayOfWeek(5)