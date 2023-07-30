const addZero = (n) => n < 10 ? `0${n}` : n

export const getCurrentDateTime = () => {
  const month = [

    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',

  ]
  const weekDays = [
    'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'
  ]

  const date = new Date()
  const dayOfMonth = date.getDate()
  const numMonth = month[date.getMonth()]
  const year = date.getFullYear()

  const dayOfWeek = weekDays[date.getDay()]

  const hours = addZero(date.getHours())
  const minutes = addZero(date.getMinutes())

  // setTimeout(hours, minutes)


  return { dayOfMonth, numMonth, year, hours, minutes, dayOfWeek }

}
// Вращение стрелки
// export const getWindDirection = (deg) => {
//   console.log(deg);
//   const directions = [
//     '&#8593;',
//     '&#8598',
//     '&#8592',
//     '&#8601',
//     '&#8595',
//     '&#8600',
//     '&#8594',
//     '&#8599',
//   ]

//   const i = Math.round(deg / 45) % 8
//   return directions[i]
// }

export const calculateDewPoint = (temp, humidity) => {
  const a = 17.27
  const b = 237.7

  const ft = (a * temp) / (b + temp) + Math.log(humidity / 100)
  const dewPointTP = (b * ft) / (a - ft)


  return dewPointTP.toFixed(1)
}

export const convertPressure = (pressure) => {
  const mmHg = pressure * 0.750063755419211
  return mmHg.toFixed(2)
}

export const getWeatherForecastData = (data) => {
  const currentDate = new Date();

  const dateUTC = new Date(currentDate.getTime() + currentDate.getTimezoneOffset() * 60000);

  console.log(data);
  const forecast = data.list.filter(

    (item) =>


      new Date(item.dt_txt).getHours() === 12 &&
      // new Date(item.dt_txt).getDate() > new Date().getDate() &&
      new Date(item.dt_txt).getDate() < dateUTC.getDate() + 5

  )
  console.log(forecast)
  const forecastData = forecast.map((item) => {
    const date = new Date(item.dt_txt)
    const weekDaysShort = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

    const dayOfWeek = weekDaysShort[date.getDay()]
    const weatherIcon = item.weather[0].icon

    let minTemp = Infinity
    let maxTemp = -Infinity


    for (let i = 0; i < data.list.length; i++) {

      const temp = data.list[i].main.temp
      const tempDate = new Date(data.list[i].dt_txt)

      if (tempDate.getDate() === date.getDate()) {

        if (temp < minTemp) {
          minTemp = temp
        }

        if (temp > maxTemp) {
          maxTemp = temp
        }
      }



      // Второй вариант
      // if (tempDate.getDate() === date.getDate() && temp < minTemp) {
      //   minTemp = temp
      // } else if (tempDate.getDate() === date.getDate() && temp < maxTemp) {
      //   maxTemp = temp
      // }
    }


    return {
      dayOfWeek,
      weatherIcon,
      minTemp,
      maxTemp,
    }

  })

  return forecastData

}





