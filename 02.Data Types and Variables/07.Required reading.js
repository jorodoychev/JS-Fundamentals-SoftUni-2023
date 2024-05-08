function f(pagesCount, readingPages, daysToReadBook) {
    let totalTimeToRead = pagesCount / readingPages
    let requiredHoursPerDay = totalTimeToRead / daysToReadBook
    console.log(requiredHoursPerDay)
}

f(212,
    20,
    2
)