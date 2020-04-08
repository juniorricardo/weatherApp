import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import transformWearther from './../../services/transformWeather'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Location from './Location'
import WeatherData from './WeatherData'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import './styles.css'

class WeatherLocation extends Component {
  constructor (props) {
    super(props)
    const { city } = props
    this.state = {
      city,
      data: null
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
    this.handleUpdateClick()
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)
    fetch(api_weather)
      .then(resolve => {
        return resolve.json()
      })
      .then(data => {
        const newData = transformWearther(data)

        this.setState({
          data: newData
        })
      })
  }

  render () {
    const { onWeatherLocationClick } = this.props
    const { city, data } = this.state
    return (
      <Card className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <div className='locationCont'>
          <Location className='nameCity' city={city}></Location>
          {data ? (
            <WeatherData data={data}></WeatherData>
          ) : (
            <CircularProgress size={70} />
          )}
          {/* <Button variant='contained' color='primary'>
            Update
          </Button> */}
        </div>
      </Card>
    )
  }
}

WeatherLocation.propType = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation

/*
let v = new Promise((resolve, rejected) => {
	setTimeout(() => {
  	rejected("Fracaso!!");
  }, 2000);
});

console.log("Inicio");

v.then((mensaje) => {
	console.log(mensaje);
}).catch((errorMensaje) => {
	console.log(errorMensaje);
});
*/
