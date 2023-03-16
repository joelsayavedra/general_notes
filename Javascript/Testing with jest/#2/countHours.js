function countHours(year, holidays) {
    let bisiesto = year % 4 === 0 ? true : false;
    let fecha = new Date('01/01/' + year);
    let counter = 0;
    for (let i = 0, days = bisiesto ? 366 : 365; i < days; i++) {
        if (fecha.getDay() === 0 || fecha.getDay() === 6) {
            fecha.setDate(fecha.getDate() + 1);
            continue;
        }
        let formatted = String(fecha.getMonth() + 1).padStart(2, '0') +
            '/' + String(fecha.getDate()).padStart(2, '0');
        if (holidays.includes(formatted)) {
            counter += 2;
        }
        fecha.setDate(fecha.getDate() + 1);
    }
    // let cadena = counter === 1 ? counter+' día' : counter+' días'
    return counter;
}
module.exports = countHours;