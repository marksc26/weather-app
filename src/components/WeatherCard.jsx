import React from 'react'

const WeatherCard = ({weather, temperature, isCelsius, changeUnitTemperature}) => {
  return (
    <article className='weatherCard'>
        <h3>{`${weather.name}, ${weather.sys.country}`}</h3>
        <section>
            <div>
                <div className='div-img'>
                    <img className='imagen' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                </div>
                 
    <div className='bowl'>
        <div className='degrees'>
        <p> 
        {
        isCelsius ? `${temperature.celsius} °C` : `${temperature.fahrenheit} °F`
        }</p>
        </div>
     </div>
        
        <button className='button-Degree' onClick={changeUnitTemperature}>°F / °C</button>

            </div>
            <ul className='list'>
                <li>{weather.weather[0].description}</li>
                <li>Wind speed: {weather.wind.speed}</li>
                <li>Clouds: {weather.clouds.all}%</li>
                <li>Pressure: {weather.main.pressure}</li>
            </ul>
        </section>
    
    </article>
  )
}

export default WeatherCard