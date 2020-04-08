import React from 'react'
import WeatherLocation from './WeatherLocation'
import PropTypes from 'prop-types'
import './styles.css'

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
    <div className="locationList">
      {convertStrToComponents(cities)}
    </div>
  )
}
LocationList.protoTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func
}

export default LocationList
