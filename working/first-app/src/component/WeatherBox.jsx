import React from 'react'
import sunImage from '../img/sun.png'
import windImage from '../img/wind.png'
import cloudsImage from '../img/clouds.png'
import rainImage from '../img/rain.png'
import snowImage from '../img/snow.png'
import stormImage from '../img/storm.png'


const WeatherBox = ({weather}) => {
  // console.log('weather???', weather);
  
  const temp = weather && weather.main ? (weather.main.temp) : ""
  const fah = weather && weather.main ? (temp*1.8)+32 : ""
  const fahFix = weather && weather.main? fah.toFixed(2) : "";
  const country = weather && weather.main ? weather.sys.country : "";
  
  const weatherId = weather && weather.main ? weather.weather[0]?.id : "";

  // console.log("weather id", weatherId)

  return (
      <div className='weatherBox'>
        <div className="weather-icon"><img src={
          weatherId === 800 ? sunImage
          : 800 < weatherId ? cloudsImage
          : 599 < weatherId ? snowImage
          : 299 < weatherId ? rainImage
          : 199 < weatherId ? stormImage
          : windImage} alt="" /></div>
        <p className='cityName'>{weather?.name || '날씨를 가져오는데 실패했습니다.'}, {country}</p>
        <p className='temp'><span className='cel'>{temp}</span>℃</p>
        <p className='temp'><span className='fah'>{fahFix}</span>℉</p>
        <div className="description-wrap">
          <p className='description pink'>{weather && weather.weather[0]?.main}</p>
          <p className='description'>{weather && weather.weather[0]?.description}</p>
        </div>
      </div>
  )
}

export default WeatherBox