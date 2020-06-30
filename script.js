function formatDate(timestamp) {
    let date = newDate(timestamp);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
    return `${day} $formatHours(timestamp)}`;
  }

  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${hours}:${minutes}`;
  }
  
  function showWeather(response) {
    //   console.log(response.data.main.temp);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  function searchCity(city) {
    let apiKey = "7a3f7d819b73cf4d779f33d4dc874aca";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  let searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", handleSubmit);
  
  searchCity("Townsville");