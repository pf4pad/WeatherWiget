const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = 'ad39cc0bb3af2ec33bb9c97be853aaec'
const API_URL_GEOHELPER = 'https://geohelper.info/api/v1/'
const API_KEY_GEOHELPER = 'BsGrS1dItyIBMbFAiUFL1uZuahodeWx7'


export const fetchWeather = async (city) => {
  console.log(city);
  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`)
    if (!response.ok) {
      throw new Error("Ошибка запроса")
    }
    const data = await response.json()

    return { success: true, data }
  } catch (error) {
    return { success: false, error }
  }


}

export const fetchForecast = async (city) => {


  try {
    const response = await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`)
    if (!response.ok) {
      throw new Error("Ошибка запроса")
    }
    const data = await response.json()



    return { success: true, data }
  } catch (error) {
    return { success: false, error }
  }
}


export const getCity = async () => {
  const url = 'https://ipapi.co/city/'


  try {
    const response = await fetch(url)


    if (!response.ok) {
      throw new Error('Город не получен')
    }

    const city = await response.text()

    return { success: true, city }
  }

  catch (error) {

    return { success: false, error }
  }
}

// export const fetchGeoHelper = async () => {

//   try {
//     const response = await fetch(`${API_URL_GEOHELPER}cities?apiKey=${API_KEY_GEOHELPER}&locale%5Blang%5D=ru`)

//     if (!response.ok) {
//       throw new Error("Ошибка запроса")
//     }
//     const cities = await response.json()
//     console.log(cities);
//     return { success: true, cities }
//   } catch (error) {
//     return { success: false, error }
//   }


// }