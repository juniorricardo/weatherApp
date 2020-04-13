import React from 'react'
import WeatherData from './../WeatherLocation/WeatherData'
import { PropTypes } from 'prop-types'

const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
    <h2 className='display-4'>
      {weekDay} - {hour}
    </h2>
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
