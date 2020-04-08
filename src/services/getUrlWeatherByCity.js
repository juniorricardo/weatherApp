import { api_key, url_base_weather} from './../constants/url_api';

const getUrlWeatherByCity = city => {
  //api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key
  return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;
