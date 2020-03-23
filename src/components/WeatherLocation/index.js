import React, { Component } from 'react';
import transformWearther from './../../services/transformWeather';
import { api_weather } from './../../constants/url_api';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: null,
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        fetch(api_weather).then((resolve) => {
            return resolve.json();
        }).then(data => {
            const newData = transformWearther(data);

            console.log(newData);

            this.setState({
                data: newData
            });
        });        
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                { data ? 
                    <WeatherData data={data}></WeatherData> :
                    "Recuperando informacion..."
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;

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