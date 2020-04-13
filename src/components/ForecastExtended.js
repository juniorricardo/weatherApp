import React, { Component } from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import './styles.css'
import ForecastItem from './ForecastItem'
import LinearProgress from '@material-ui/core/LinearProgress';
import transformForecast from './../services/transformForecast'

const api_key = '1a663d2e10908df23d8e0622c0fdedf9'
const url = 'https://api.openweathermap.org/data/2.5/forecast'

class ForescastExtended extends Component {
  constructor() {
    super()
    this.state = {
      forecastData: null
    }
  }

  componentDidMount() {
    this.updateCity(this.props.city)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.city) {
      this.setState({ forecastData: null })
      this.updateCity(nextProps.city)
    }
  }
  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`
    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const nuevo = transformForecast(weather_data)
        this.setState({ forecastData: nuevo })
      })
  }

  renderForecastItemsDays(forecastData) {
    return forecastData.map(day => (
      <ForecastItem
        weekDay={day.weekday}
        hour={day.hour}
        data={day.data}
        key={shortid.generate()}
      ></ForecastItem>
    ))
  }

  renderProgress = () => {
    return (
      <div className='container'>
        <LinearProgress />
      </div>
    )
  }

  render() {
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
