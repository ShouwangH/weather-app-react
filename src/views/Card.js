import './css/card.scss'
import dayjs, {format} from 'dayjs'

export default function Card({max, min, date, wc, getWeatherCondition, getWeatherIcon}) {

    const description = getWeatherCondition(wc)
    const icon = getWeatherIcon(wc)


    console.log(icon, description, max, min, date)

    return (
    <div className="weather-card">
        <div class="weather-icon">
        {icon && <div className="weatherIcon"><i className={icon}></i></div>}
        </div>
        <h4>{dayjs(date).format('MMM DD')}</h4>
        <h1>{Math.round(min)}°/ {Math.round(max)}°</h1>
        <p>{description}</p>
    </div>
    )
}
