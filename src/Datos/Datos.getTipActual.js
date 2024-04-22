export const getTipActual = () => {
    const currentDate = new Date();
    const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const differenceMs = currentDate - firstDayOfYear;
    const daysElapsed = Math.floor(differenceMs / (1000 * 60 * 60 * 24)) + 1;
    let tipActual = 0;
    for(let numeroTip = 22; numeroTip < daysElapsed; numeroTip += 15) {
            tipActual += 1;
    }
    return tipActual;
};