import React, { useContext } from 'react';
import { store } from '../../App';
import './SelectedWeatherSlice.scss';
// SVG Imports
import Search from "../../resources/images/svg/search.svg";
import { ReactComponent as Location } from "../../resources/images/svg/location.svg";
import { ReactComponent as Ash } from "../../resources/images/svg/weather/Ash.svg";
import { ReactComponent as Clear } from "../../resources/images/svg/weather/Clear.svg";
import { ReactComponent as Clouds } from "../../resources/images/svg/weather/Clouds.svg";
import { ReactComponent as Drizzle } from "../../resources/images/svg/weather/Drizzle.svg";
import { ReactComponent as Dust } from "../../resources/images/svg/weather/Dust.svg";
import { ReactComponent as Fog } from "../../resources/images/svg/weather/Fog.svg";
import { ReactComponent as Haze } from "../../resources/images/svg/weather/Haze.svg";
import { ReactComponent as Mist } from "../../resources/images/svg/weather/Mist.svg";
import { ReactComponent as Rain } from "../../resources/images/svg/weather/Rain.svg";
import { ReactComponent as Sand } from "../../resources/images/svg/weather/Sand.svg";
import { ReactComponent as Smoke } from "../../resources/images/svg/weather/Smoke.svg";
import { ReactComponent as Snow } from "../../resources/images/svg/weather/Snow.svg";
import { ReactComponent as Squall } from "../../resources/images/svg/weather/Squall.svg";
import { ReactComponent as Thunderstorm } from "../../resources/images/svg/weather/Thunderstorm.svg";
import { ReactComponent as Tornado } from "../../resources/images/svg/weather/Tornado.svg";
import { ReactComponent as Humidity } from "../../resources/images/svg/weather/humidity.svg";
import { ReactComponent as Wind } from "../../resources/images/svg/weather/wind.svg";
import { ReactComponent as Highest } from "../../resources/images/svg/weather/highest.svg";
import { ReactComponent as Lowest } from "../../resources/images/svg/weather/lowest.svg";
import { ReactComponent as Raindrops } from "../../resources/images/svg/weather/raindrops.svg";
 
export default function SelectedWeatherSlice () {
  const [state, dispatch] = useContext(store);

  const returnCurrentCon = (weather: string) => {
    switch (weather) {
        case 'Clear':
            return <Clear />;
        case 'Clouds':
            return <Clouds />;
        case 'Ash':
            return <Ash />;
        case 'Drizzle':
            return <Drizzle />;
        case 'Dust':
            return <Dust />;
        case 'Fog':
            return <Fog />;
        case 'Snow':
            return <Snow />;
        case 'Haze':
            return <Haze />;
        case 'Mist':
            return <Mist />;
        case 'Rain':
            return <Rain />;
        case 'Sand':
            return <Sand />;
        case 'Smoke':
            return <Smoke />;
        case 'Squall':
            return <Squall />;
        case 'Thunderstorm':
            return <Thunderstorm />;
        case 'Tornado':
            return <Tornado />;
      }
  }

  return (
    <div className="selected-weather-slice">
        <nav className='top'>
            <div className="location-container">
              <h3>{state.weather.current.town}</h3>
              <Location className="location" fill="white" />
            </div>

            <div className="current-con">
                {returnCurrentCon(state.weather.current.weather)}
            </div>
        </nav>

        <div className="details">
            <h1>{state.weather.current.temp}°</h1>  

            <div className="data">
                <h3 className="con">{state.weather.current.weather}</h3>
                
                <div className="humidity-container">
                    <h3>Humidity: {state.weather.current.humidity}%</h3>
                </div>

                <div className="rain-container">
                    <h3>Rain Probability: {state.weather.current.rain}%</h3>
                </div>

                <div className="temp-container">
                    <Highest className="highest-icon icon" />
                    <h3 className="high">{state.weather.current.maxTemp}°</h3>

                    <Lowest className="lowest-icon icon" />
                    <h3>{state.weather.current.minTemp}°</h3>
                </div>
            </div>
        </div>
    </div>
  );
}