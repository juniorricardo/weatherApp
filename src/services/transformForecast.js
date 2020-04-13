import moment from 'moment'
import 'moment/locale/es'
import transformWeather from './transformWeather'

const transformForecast = data => {
  const newData = data.list
    .filter(
      item =>
        moment
          .unix(item.dt)
          .utc()
          .hour() === 6 ||
        moment
          .unix(item.dt)
          .utc()
          .hour() === 12 ||
        moment
          .unix(item.dt)
          .utc()
          .hour() === 18
    )
    .map(item => ({
      weekday: moment.unix(item.dt).format('dddd'),
      hour: moment
        .unix(item.dt)
        .utc()
        .hour(),
      data: transformWeather(item)
    }))
  return newData
}

export default transformForecast
