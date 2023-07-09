import { fetchForecast, fetchWeather, getCity } from './APIservise.js';
import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from './render.js';

export const startWidget = async (city, widget) => {
    if (!city) {
        const dataCity = await getCity();
        if (dataCity.success) {
            city = dataCity.city;
        }
    }
    if (!widget) {
        widget = document.createElement('div');
        widget.classList.add('widget');
    }

    const dataWeather = await fetchWeather(city);

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else {
        console.log('Ошибка');
    }

    const dataForecast = await fetchForecast(city);

    if (dataForecast.success) {
        renderWidgetForecast(widget, dataForecast.data);
    } else {
        console.log('Ошибка');
    }

    return widget;
};
