import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from "./City";

function App() {
  const key = "23786ee2a9bdb558377a4595a45e7127";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  } , [search] );
  console.log(search);
  
  return (
<div className={`App ${city && city.weather[0].main === 'Rain' ? 'rain' : ''} `}>
  <div className="flex flex-col items-center justify-center h-screen ">
    <input
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search for a city..."
      className="w-64 py-3 px-4 placeholder-gray-500 text-gray-900 bg-white border border-gray-300 rounded-md shadow-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
    {city && <City city={city} />}
  </div>

  <div className='name-footer'>Developed with ❤️ by YO</div>
</div>

  );
}

export default App;
