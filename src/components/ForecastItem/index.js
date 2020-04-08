import React from 'react'
import WeatherData from './../WeatherLocation/WeatherData'
import { PropTypes } from 'prop-types'

const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
    <div>
      {weekDay} Hora: {hour}
    </div>
    <WeatherData data={data}></WeatherData>
  </div>
)

ForecastItem.protoType = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
}

export default ForecastItem
