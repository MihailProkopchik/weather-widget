export const getCurrentDateTime = () => {
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пят ница', 'суббота'];

    const date = new Date();
    const dayofMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayofWeek = weekdays[date.getDay()];

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return { dayofMonth, month, year, hours, minutes, dayofWeek };
};
