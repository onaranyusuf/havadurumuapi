const City = ({ city }) => {
  const weatherIcons = {
    Clear: "day.svg",
    Clouds: "cloudy.svg",
    CloudyNight: "cloudy-night.svg",
    Night: "night.svg",
    PerfectDay: "perfect-day.svg",
    Rain: "rain.svg",
    RainyNight: "rainy-night.svg",
    Sunny: "sunny.svg",
    Wind: "wind.svg",
    Snow: "snow.svg",
    Storm: "storm.svg",
  };

  const getWeatherIconURL = (iconName) => {
    return `/icons/${weatherIcons[iconName]}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-8 w-auto h-auto">
      <div className="mt-2 font-bold text-xl "><span className="text-gradient">The Weather App</span></div>
      <div className="mb-8 mt-2">
        <div className="mr-4 flex justify-center items-center">
          <img
            className="w-50 h-40 object-cover"
            src={getWeatherIconURL(city.weather[0].main)}
            alt="Weather Icon"
          />
        </div>

        {city && (
          <p>
            <span className="font-bold text-xl">{`${city.main.temp}°C`}</span>
            <span className="text-sm">{` | ${city.weather[0].description}`}</span>
          </p>
        )}
      </div>

      <div className="text-black font-bold text-xl">
        {city && <p>{`${city.name}, ${city.sys && city.sys.country}`}</p>}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 p-4 flex justify-start">
          Weather Info
        </h3>
        <div className="flex space-x-16 px-8">
          <div>
            <div className="flex items-center">
              <div className="mr-2">
                <img src="/icons/temp.svg" alt="Sunrise Icon" />
              </div>
              <div>
                <div className="text-gray-600">Sunrise</div>
                <div className="text-gray-600">
                  {new Date(city.sys.sunrise * 1000).toLocaleTimeString()}
                </div>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <div>
                <img src="/icons/humidity.svg" alt="Weather Icon" />
              </div>
              <div>
                <div className="text-gray-600">Humidity</div>
                <div className="text-gray-600">{city.main.humidity}%</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="mr-2">
                <img src="/icons/wind.svg" alt="Wind Icon" />
              </div>
              <div>
                <div className="text-gray-600">Wind Speed</div>
                <div className="text-gray-600">{city.wind.speed} m/s</div>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className="mr-2">
                <img src="/icons/pressure.svg" alt="Pressure Icon" />
              </div>
              <div className="ml-1">
                <div className="text-gray-600">Pressure</div>
                <div className="text-gray-600">{city.main.pressure} hPa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
