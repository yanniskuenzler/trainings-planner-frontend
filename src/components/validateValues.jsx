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

export const validateDuration = (duration) => {
    let pattern = /^\d{1,3}$/;
    if (pattern.test(duration)){
        return {status: true, duration: duration};
    } else {
        return {status: false, msg: "Bitte gib eine gültige Zeitdauer an (nicht länger als 999 Minuten)"};
    }
}

export const validateSectionValue = (trainingBody) => {
    let foundEmptyElement = false;
    trainingBody.forEach((section) => {
        if (section.sectionValue === "") {
            console.log("false");
            foundEmptyElement = true;
        }
    });
    return (foundEmptyElement ?
        {status: false, msg: "Bitte lasse kein Feld bei den Trainingseinheiten leer"} :
        {status: true, trainingBody: trainingBody});
}