import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { Box } from '@material-ui/core';
import WeatherLocation from './WeatherLocation'

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = city => {
    console.log('handleWeatherLocationClick')
    onSelectedLocation(city)
  }

  const convertStrToComponents = cities =>
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
      />
    ))

  return (
    <div className="location-list">
      <Box width="100%">
        {convertStrToComponents(cities)}
      </Box>
    </div>
  )
}
LocationList.protoTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
}

export default LocationList
