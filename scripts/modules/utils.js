const addZero = n => (n < 10 ? `0${n}` : n);

export const getCurrentDateTime = () => {
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пят ница', 'суббота'];

    const date = new Date();
    const dayofMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayofWeek = weekdays[date.getDay()];

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return { dayofMonth, month, year, hours, minutes, dayofWeek };
};
