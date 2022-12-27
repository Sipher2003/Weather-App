const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0fed759dfamsha0f79b4d5c444b1p1667f7jsn9dcb53cb1e40",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city) => {
    cityname.innerHTML = city;   // cityname is the h1 tag
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city ,  // city is the input field
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // cloud_pct.innerHTML = response.cloud_pct
    //   temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like
      //   humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      //   wind_speed.innerHTML = response.wind_speed
      //   wind_degrees.innerHTML = response.wind_degrees
      //   sunrise.innerHTML = response.sunrise
      //   sunset.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));  // error handling
};

submit.addEventListener("click", (e) => {  // submit is the button 
  e.preventDefault();  // prevent the page from reloading
  getweather(city.value);   // city is the input field
});

getweather("Tokyo");