import React, { Component } from 'react'
import PropTypes from 'prop-types'
import transformForecast from './../services/transformForecast'
import ForecastItem from './ForecastItem'
import './styles.css'

// const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']

// const data = {
//   temperature: 10,
//   weatherState: 'nublado',
//   humidity: 10,
//   wind: 'fuerte'
// }
const api_key = '1a663d2e10908df23d8e0622c0fdedf9'
const url = 'https://api.openweathermap.org/data/2.5/forecast'

class ForescastExtended extends Component {
  constructor () {
    super()
    this.state = {
      forecastData: null
    }
  }

  componentDidMount () {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`
    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        console.log(weather_data)
        const forecastData = transformForecast(weather_data)
        console.log(forecastData)
        this.setState({
          forecastData
        })
      })
  }

  renderForecastItemsDays (forecastData) {
    return forecastData.map(day => (
      <ForecastItem
        weekDay={day.weekday}
        hour={day.hour}
        data={day.data}
      ></ForecastItem>
    ))
  }

  renderProgress = forecastData => {}

  render () {
    const { city } = this.props
    const { forecastData } = this.state
    return (
      <div>
        <h2 className='forcast-title'>Pronostico Extendido de {city}</h2>
        {forecastData
          ? this.renderForecastItemsDays(forecastData)
          : this.renderProgress()}
      </div>
    )
  }
}

ForescastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForescastExtended
