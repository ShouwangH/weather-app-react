import React, { useState } from 'react'

const key = 'AIzaSyCIhGuZvAOhq7zx4PvXSislOCWVX4PEEm4'

export default function Search() {

  const [latLong, setlatLong] = useState([0,0])
  const [location, setLocation] = useState("")

  


  const handleSubmit = (e) => {
    e.preventDefault()
    getLocation(e.target.value)
    }

  const handleSubmitLL = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    const lat = e.target.value
    
    getData(e.target.value)
  }


  const getLocation = async (location) => {

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.replace(/ /g,'%20')}&key=${key}`)
    const lat = response.results[0].geometry.location.lat;
    const lng = response.results[0].geometry.location.lng;
  }



  const getData = async (lat, lng) => {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}`)
    const data = await response.json()
    console.log(data)


  }
    



  return (

    // create another input field for this search that has two input fields one for longitude and one for latitude

    <div className="search__container" type="submit"  >
      <form name='latlong'>
        <input className="search__input" type="text" name='Lat' placeholder="Latitude" onSubmit={handleSubmit} />
        <input className="search__input" type="text" name='long' placeholder="Longitude" onSubmit={handleSubmit} />
        <input className="search__input" type="text" placeholder="Enter a location, or zip code" onSubmit={handleSubmit} />
        <input type='submit' />
      </form>
    </div>
  )
}
