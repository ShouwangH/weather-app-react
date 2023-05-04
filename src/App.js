import Search from './views/Search';
import Widget from './views/Widget';
import { useState } from 'react';
import './App.css';



function App() {

  const [weatherData, setWeatherData] = useState({})
  const [niceLocation, setNiceLocation] = useState("")


  return (
    <div className="App">
      <Search setWeatherData={setWeatherData} setNiceLocation={setNiceLocation}/>   
      { Object.keys(weatherData).length > 0 && <Widget data={{weatherData}} location={niceLocation}/>}
    </div>
  );
}

export default App;
