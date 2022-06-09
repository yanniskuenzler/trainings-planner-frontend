export const validateDate = (date) => {
    let pattern = /^(3[0-1]|[12][0-9]|0[1-9])\.(1[0-2]|0[1-9])\.([0-9]{4})$/;
    if (pattern.test(date)) {
        let dateArray = date.split('.');
        date = dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
        return {status: true, date: date}
    } else {
        return {status: false, msg: "Bitte gib das Datum im Format 'dd.mm.yyyy' an"};
    }
}

export const validateWeekday = (weekday) => {
    const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    if (weekdays.includes(weekday)) {
        return {status: true, weekday: weekday};
    } else {
        return {status: false, msg: "Bitte gib einen gültigen Wochentag an"};
    }
}

export const validateDuration = (duration) => {
    let pattern = /^\d+$/;
    if (pattern.test(duration)){
        return {status: true, duration: duration};
    } else {
        return {status: false, msg: "Bitte gib eine gültige Zeitdauer an"};
    }
}