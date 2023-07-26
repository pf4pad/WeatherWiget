import { fetchWeather } from "./APIservise.js"
import {
  renderWidgetForecast,
  renderWidgetOther,
  renderWidgetToday
} from "./render.js"

export const startWiget = async () => {

  const widget = document.createElement('div')
  widget.classList.add('widget')

  const dataWeather = await fetchWeather('Киев')

  if (dataWeather.succes) {
    renderWidgetToday(widget, dataWeather.data)
    renderWidgetOther(widget, dataWeather.data)
  } else {
    showError()
  }


  renderWidgetForecast(widget)

  return widget
}