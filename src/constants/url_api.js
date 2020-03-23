const location = "Buenos Aires,ar";
const api_key = "1a663d2e10908df23d8e0622c0fdedf9";
const url_base = "https://api.openweathermap.org/data/2.5/weather";

//api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
export const api_weather = `${url_base}?q=${location}&appid=${api_key}`;