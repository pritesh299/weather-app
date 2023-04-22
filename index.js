// javascript


let weather = {
    apiKey: "aa17a7679cee6abc0aa939ebd0267518",
    fetchWeather: (city) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + weather.apiKey)
            .then((response) => response.json())
            .then((data) => weather.displayWeather(data))
    },
    displayWeather: (data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { speed } = data.wind;
        const { temp, humidity } = data.main;
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed + "Km/Hr";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
        document.querySelector(".weather").classList.remove("loading")
    },
    search: () => {
        let searchText = document.querySelector(".searchBar")
        weather.fetchWeather(searchText.value)
        searchText.value = ""
        console.log(searchText.value)
    }
}

document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
        
    }
})
document.querySelector(".search button").addEventListener("click", () => {
    weather.search()
})
weather.fetchWeather("new york")