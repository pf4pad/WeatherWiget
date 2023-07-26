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
    'воскр', 'понед', 'вторн', 'сред', 'четв', 'пятн', 'суб'
  ]

  const date = new Date()
  const dayOfMonth = date.getDate()
  const numMonth = month[date.getMonth()]
  const year = date.getFullYear()

  const dayOfWeek = weekDays[date.getDay()]

  const hours = addZero(date.getHours())
  const minutes = addZero(date.getMinutes())

  setTimeout(hours, minutes)


  return { dayOfMonth, numMonth, year, hours, minutes, dayOfWeek }

}

export const getWindDirection = (deg) => {
  const directions = [
    '&#8593;',
    '&#8598',
    '&#8592',
    '&#8601',
    '&#8595',
    '&#8600',
    '&#8594',
    '&#8599',
  ]


  const i = Math.round(deg / 45) % 8
  return directions[i]
}

export const calculateDewPoint = (temp, humidity) => {
  const a = 17.27
  const b = 237.7

  const ft = (a * temp) / (b + temp) + Math.log(humidity / 100)
  const dewPointTP = (b * ft) / (a - ft)


  return dewPointTP.toFixed(1)
}