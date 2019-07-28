
let addBusinessTime = function (holiday, time, duration) {
    const durationInMiliseconds = duration * 1000;

    const startTime = time.getTime();
    const endTime = startTime + durationInMiliseconds;

    const holidayEndTime = holiday.end.getTime();
    const holidayStartTime = holiday.start.getTime();

    let answerWihtouHoliday = new Date(endTime);

    if (startTime > endTime && holidayEndTime > startTime) {
        return new Date(holidayStartTime + durationInMiliseconds);
    }

    if (startTime <= holidayStartTime && endTime >= holidayStartTime) { // holiday starts beetween dates
        return new Date(endTime + holidayEndTime - holidayStartTime);
    }

    if (startTime >= holidayStartTime && endTime <= holidayEndTime) { // holiday is grater than start and end
        return new Date(holidayEndTime + endTime - startTime);
    }

    return answerWihtouHoliday;
}


