import { fetchForecast, fetchWeather } from "./APIservise.js"
import {
  renderWidgetForecast,
  renderWidgetOther,
  renderWidgetToday,
  showError
} from "./render.js"

export const startWiget = async () => {

  const city = 'Киев'
  const widget = document.createElement('div')
  widget.classList.add('widget')

  const dataWeather = await fetchWeather(city)

  if (dataWeather.succes) {
    renderWidgetToday(widget, dataWeather.data)
    renderWidgetOther(widget, dataWeather.data)
  } else {
    showError(dataWeather.error)
  }

  const dataForecast = await fetchForecast(city)


  if (dataForecast.succes) {

    renderWidgetForecast(widget, dataForecast.data)
  } else {
    showError(dataForecast.error)
  }


  return widget
}