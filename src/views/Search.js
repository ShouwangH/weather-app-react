import React, { useState } from 'react'

export default function Search({setWeatherData, setNiceLocation}) {

  const key = process.env.REACT_APP_API_KEY


  const [search, setSearch] = useState({})
  

  const handleChange = (e) => {
    //check if e.target.name is lat or long and make sure it's a number
    if (e.target.name === "lat" || e.target.name === "long") {
      if (isNaN(e.target.value) && e.target.value !== "-" ) {
        alert("Please enter a number for Longitude and latitude")
        return
      }
    }
    setSearch({...search, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getWeather()
  }


 

  const getLocation = async () => {
    console.log(key)
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search.location.toLowerCase().replace(/[\W ]+/, '+')}&key=${key}`)
    const data = await response.json()
    return data 
  }


  const getWeather = async () => {
    if (search.location !== "") {
      const location = await getLocation()
      const lat = location.results[0].geometry.location.lat
      const long = location.results[0].geometry.location.lng
      setNiceLocation(location.results[0].formatted_address)
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago`)
      const wdata = await res.json()
      setWeatherData(wdata)
    }
    
  }
    



  return (
    <>
    <div className="search__container" type="submit">
      <form name='latlong' onSubmit={handleSubmit}>

        <input className="search__input" type="text" name='location' placeholder="Enter a location, or zip code" onChange={handleChange} />
        <button type='submit'>Search Location</button>
      </form>
    </div>
    </>
  )
}
