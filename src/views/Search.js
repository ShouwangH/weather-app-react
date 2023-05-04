import React, { useState } from 'react'

const key = 'AIzaSyCIhGuZvAOhq7zx4PvXSislOCWVX4PEEm4'

export default function Search() {

  const [search, setSearch] = useState({"lat": "", "long": "", "location": ""})


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
    parseSearch()
  }

  //parse if the user enters a location, or a lat and long and then call the appropriate function
  const parseSearch = () => {
    if (search.location !== "") {
      getLocation()
    } else if (search.lat !== 0 && search.lng !== 0) {
      console.log('using lat and long')
      console.log(`https://api.open-meteo.com/v1/forecast?latitude=${search.lat}&longitude=${search.long}`)
      //getData()
    } else { 
    // if user hasn't entered anything, alert them to do so
      alert("Please enter a location or a latitude and longitude")
    }
  }
 

  const getLocation = async () => {
    console.log("Getting location")
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search.location.toLowerCase().replace(/[\W ]+/, '+')}&key=${key}`)
    const data = await response.json()
    console.log(data.results[0].geometry.location.lat, data.results[0].geometry.location.long)
    setSearch({...search, "lat": data.results[0].geometry.location.lat, "long": data.results[0].geometry.location.lng})
    getWeather()
  }



  const getWeather = async () => {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${search.lat}&longitude=${search.long}&daily=weathercode,apparent_temperature_max,apparent_temperature_min,precipitation_sum,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago`)
    const wdata = await res.json()
    console.log(wdata)
  }
    



  return (

    // create another input field for this search that has two input fields one for longitude and one for latitude

    <div className="search__container" type="submit"  >
      <form name='latlong' onSubmit={handleSubmit}>
        <input className="search__input" type="text" name='lat' placeholder="Latitude" onChange={handleChange} />
        <input className="search__input" type="text" name='long' placeholder="Longitude" onChange={handleChange}  />
        <input className="search__input" type="text" name='location' placeholder="Enter a location, or zip code" onChange={handleChange}  />
        <button type='submit'>Search Location</button>
      </form>
    </div>
  )
}
