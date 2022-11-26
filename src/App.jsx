import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)

  //Aqui obtenemos las coordenadas de la API del navegador y las montamos 

  const success = (pos) => {
  
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(newCoords)
  }

  const changeUnitTemperature = ()=>{
    setIsCelsius(!isCelsius)

  }

  useEffect(()=>{
    
    navigator.geolocation.getCurrentPosition(success)

  }, [])

  //PETICION DE DATOS A LA API DEL CLIMA

  useEffect(()=>{

    if(coords){
    const api_key = "7a505401a0148812f7ed4c44f225d549"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${api_key} `
    axios.get(url)
      .then(res =>{
        const tempKelvin =  res.data.main.temp
        const tempCelsius = (tempKelvin -273.15).toFixed(0)
        const tempFahrenheit = ((tempCelsius * 9/5) + 32).toFixed(0)
        const newTemperature = {
          celsius: tempCelsius,
          fahrenheit: tempFahrenheit
        }
        setTemperature(newTemperature)
        setWeather(res.data)} )
      .catch(err => console.log(err))
    }

  },[coords])
  
  

  return (
    <div className="App">

      {
        weather ? (<WeatherCard  
          weather={weather} 
          temperature={temperature} 
          changeUnitTemperature={changeUnitTemperature} 
          isCelsius={isCelsius}/>)  : <h2>Loading...</h2>
      }




    
    </div>
  )
}

export default App
