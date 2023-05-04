import {useEffect, useState} from 'react'
import './css/widget.scss'
import Card from './Card'

export default function Widget({data, location}) {

    const [icon, setIcon] = useState("")
    const [description, setDescription] = useState("")

    const getWeatherIcon = (weatherCode) => {
        switch (weatherCode) {
            case 0:
                return "wi wi-day-sunny"
            case 1:
                return "wi wi-cloudy"
            case 2:
                return "wi wi-cloudy"
            case 3:
                return "wi wi-cloudy"
            case 45:
                return "wi-fog"
            case 48:
                return "wi-fog"
            case 51:
                return "wi-sprinkle"
            case 53:
                return "wi-sprinkle"
            case 55:
                return "wi-sprinkle"
            case 56:
                return "wi-rain-mix"
            case 57:
                return "wi-rain-mix"
            case 61:
                return "wi-rain"
            case 63:
                return "wi-rain"
            case 65:
                return "wi-rain"
            case 66:
                return "wi-hail"
            case 67:
                return "wi-hail"
            case 71:    
                return "wi-snow"
            case 73:
                return "wi-snow"
            case 75:
                return "wi-snow"    
            case 77:
                return "wi-snow"
            case 80:
                return "wi-raindrops"
            case 81:
                return "wi-raindrops"
            case 82:
                return "wi-raindrops"
            case 85:
                return "wi-snowflake-cold"
            case 86:
                return "wi-snowflake-cold"
            case 95:
                return "wi-thunderstorm"
            case 96:
                return "wi-thunderstorm"
            case 99:
                return "wi-thunderstorm"
        }
    }

    const getWeatherCondition = (weatherCode) => {
        switch (weatherCode) {
            case 0:
                return "Clear"
            case 1:
                return "Cloudy"
            case 2:
                return "Cloudy"
            case 3:
                return "Cloudy"
            case 45:
                return "Fog"
            case 48:
                return "Fog"
            case 51:
                return "Drizzle"
            case 53:
                return "Drizzle"
            case 55:
                return "Drizzle"
            case 56:
                return "Freezing Drizzle"
            case 57:
                return "Freezing Drizzle"
            case 61:
                return "Rain"
            case 63:
                return "Rain"
            case 65:
                return "Rain"
            case 66:
                return "Freezing Rain"
            case 67:
                return "Freezing Rain"
            case 71:    
                return "Snow"
            case 73:
                return "Snow"
            case 75:
                return "Snow"    
            case 77:
                return "Snow Grains"
            case 80:
                return "Showers"
            case 81:
                return "Showers"
            case 82:
                return "Showers"
            case 85:
                return "Snow Storm"
            case 86:
                return "Snow Storm"
            case 95:
                return "Thunderstorm"
            case 96:
                return "Thunderstorm"
            case 99:
                return "Thunderstorm"
        }
    }



    useEffect(() => {
        setDescription(getWeatherCondition(data.weatherData.current_weather.weathercode))
        setIcon(getWeatherIcon(data.weatherData.current_weather.weathercode))
    }, [location])



    // create a function that iteraters over the data.weatherData.daily array, returns a card for each day
    const getCards = () => {
        var cards = []
        for (let i = 1; i < 3; i++) { 
            cards.push(<Card key={i} max={data.weatherData.daily.apparent_temperature_max[i]} min={data.weatherData.daily.apparent_temperature_min[i]} date={data.weatherData.daily.time[i]} wc={data.weatherData.daily.weathercode[i]} 
                getWeatherCondition={getWeatherCondition} getWeatherIcon={getWeatherIcon} />)
        }
        return cards
    }


    return (
        <article className="widget">
            {icon && <div className="weatherIcon"><i className={icon}></i></div>}
            <div className="weatherInfo">
                <div className="temperature"><span id='current'>{Math.round(data.weatherData.current_weather.temperature)}°</span></div>
                <div className="description">
                    <div className="weatherCondition">{description}</div>
                    <div className="place" id="place">{location}</div>
                </div>
            </div>
            <div className="range" id="range">{Math.round(data.weatherData.daily.apparent_temperature_min[0])}°/ {Math.round(data.weatherData.daily.apparent_temperature_max[0])}°</div>
            {getCards()}
        </article>
    )
}
