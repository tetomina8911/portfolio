import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox'
import WeatherButton from './component/WeatherButton';

// 1. 앱이 시작하자마자 현재위치기반의 날씨
// 2. 날씨정보 - 위치, 섭씨, 화씨, 날씨상태
// 3. 5개버튼 - 현재위치, 다른 도시 4개
// 4. 도시버튼 클릭 - 해당 도시 날씨 
// 5. 현재위치버튼 - 현재위치 날씨 
// 6. 로딩스피너

const cities = ['hanoi', 'paris', 'new york', 'tokyo', 'seoul'];

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [apiError, setAPIError] = useState("")

  
  const getWeatherByCurrentLocation = async(lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=adb6bad70e0a9559b51c8c47d12e6ed3&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    }catch(err){
      setAPIError(err.message);
    }
  }   

  // 현재위치 가져오기
  const getCurrentLocation = ()=> {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      
      getWeatherByCurrentLocation(lat, lon);
    })
  }
  

  const getWeatherBycity = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adb6bad70e0a9559b51c8c47d12e6ed3&units=metric`
      let response = await fetch(url);
      let data = await response.json();
      // console.log("data", data);
      setWeather(data);
    }catch(err){
      console.log(err);
      setAPIError(err.message);
    }
  }

  const handleCityChange = (city) => {
    if(city === "current"){
      setCity(null)
    }else{
      setCity(city)
    }
  }
      
  useEffect(() => {
    if(city === null) {
      getCurrentLocation();
    }else{
      getWeatherBycity();
    }
  }, [city]);

  /*
  useEffect(()=>{
    //console.log("city?", city);
    getWeatherBycity()
  }, [city]);
  */

  return (
    <div id='main'>
      {!apiError ? (
        <div className='wrapper'>
          <div className='weatherBox-container'>
            <div className='weatherBox-wrapper'>
              <WeatherBox weather={weather} />
              <WeatherButton 
              weather={weather} cities={cities} selectedCity={city} handleCityChange={handleCityChange} 
              />
            </div>
          </div>
        </div>

      ) : (
        apiError
      )}
    </div>
  )
}

export default App
