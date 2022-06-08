export const validateDate = (date) => {
    let pattern = /^(3[0-1]|[12][0-9]|[1-9]|0[1-9])\.(1[0-2]|[1-9]|0[1-9])\.([0-9]{4})$/;
    if (pattern.test(date)) {
        let dateArray = date.split('.');
        return dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
    } else {
        return false;
    }
}

export const validateWeekday = (weekday) => {
    const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    if (weekdays.includes(weekday)) {
        return weekday;
    } else {
        return false;
    }
}

export const validateDuration = (duration) => {
    let pattern = /\d/;
    if (pattern.test(duration)){
        return duration;
    } else {
        return false;
    }
}