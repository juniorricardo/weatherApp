import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './App.css'
import LocationList from './components/LocationList'
import ForescastExtended from './components/ForecastExtended'

const cities = [
  'Buenos Aires,ar',
  'London,uk',
  'Zurich,ch',
  'Novinki,RU',
  'Ikem,ng',
  'Zalamea la Real,es',
  'Russian Federation,ru'
]

class App extends Component {
  constructor() {
    super()
    this.state = { city: null }
  }

  handleSelectionLocation = city => {
    this.setState({ city })
    console.log(`handleSelectionLocation ${city}`)
  }

  render() {
    const { city } = this.state
    return (
      <Grid className='App'>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h3' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className='details'>
                {!city ? (
                  <h1>No se ha seleccionado una ciuidad</h1>
                ) : (
                    <ForescastExtended city={city}></ForescastExtended>
                  )}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
