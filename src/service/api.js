import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '28dc04ce045e9a8f259c5f6ba910533c'
export const getData = async (city, country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}