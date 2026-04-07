import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTemperatureFull } from '@fortawesome/free-solid-svg-icons'


import React from 'react'

const WeatherButton = ({cities, handleCityChange, selectedCity, weather}) => {
  // console.log("cities", cities);
  // console.log("weather:::", weather)
  
  const windSpeed = weather && weather.main ? weather.wind.speed : "";
  const humidity = weather && weather.main ? weather.main.humidity : "";
  
  // console.log("selectedCity", selectedCity)
 

  return (
    <>
      <span className="circle circle-1"></span>
      <span className="circle circle-2"></span>
      <span className="circle circle-3"></span>
      <span className="circle circle-4"></span>
      <span className="circle circle-5"></span>
      <span className="circle circle-6"></span>
      <span className="circle circle-7"></span>
      <span className="circle circle-8"></span>
      <span className="circle circle-9"></span>
      <ul className='info'>
        <li><span><FontAwesomeIcon icon={faWind} /> Wind</span> <b>{windSpeed}km/h</b></li>
        <li><span><FontAwesomeIcon icon={faTemperatureFull} /> humidity</span> <b>{humidity}%</b></li>
      </ul>
      <div className='button-container'>
        <button className={`${selectedCity === null ? "location-button selected": "location-button"}`}
        onClick={() => handleCityChange("current")}>Current</button>

        {cities.map((city, index) => (
          <button className={`${selectedCity === city ? "location-button selected": "location-button"}`} key={index}
          onClick={()=>handleCityChange(city)}>{city}</button>
        ))}
      </div>
    </>
  )
}

export default WeatherButton