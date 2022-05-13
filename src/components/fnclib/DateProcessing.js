export function getCurrentDate() {
    var dateToday = new Date();
    return (date2string(dateToday))
}

export function getPastDate(yearAgo) {
    var date5YearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - yearAgo));
    return (date2string(date5YearAgo))
}

export function date2string(date) {
    return date.getFullYear() 
    + "-" + ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : "0" + (date.getMonth() + 1))
    + "-" + (date.getDate() > 9 ? date.getDate().toString() : "0" + date.getDate().toString());
}