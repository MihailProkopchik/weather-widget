import { fetchWeather } from './APIservise.js';
import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from './render.js';

export const startWidget = async () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather('Калининград');

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else {
        console.log('Ошибка');
    }

    renderWidgetForecast(widget);

    return widget;
};
