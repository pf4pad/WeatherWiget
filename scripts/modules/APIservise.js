const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = 'ad39cc0bb3af2ec33bb9c97be853aaec'

export const fetchWeather = async (city) => {

  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`)
    if (!response.ok) {
      throw new Error("Ошибка запроса")
    }
    const data = await response.json()

    return { succes: true, data }
  } catch (error) {
    return { succes: false, error }
  }


}

export const fetchForecast = async (city) => {

  try {
    const response = await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`)
    if (!response.ok) {
      throw new Error("Ошибка запроса")
    }
    const data = await response.json()

    return { succes: true, data }
  } catch (error) {
    return { succes: false, error }
  }


}