// Define a weather object with properties and methods
let weather = {
    apiKey: "aa17a7679cee6abc0aa939ebd0267518", 


    // Method to fetch weather data from API for a given city
    fetchWeather: (city) => {
        // Fetch weather data from OpenWeatherMap API
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + weather.apiKey)
            .then((response) => response.json()) 
            .then((data) => weather.displayWeather(data)) 
    },



    // Method to display weather data on the webpage
    displayWeather: (data) => {
        // Extract relevant data from the response
        const { name } = data; 
        const { icon, description } = data.weather[0]; 
        const { speed } = data.wind;
        const { temp, humidity } = data.main; 

        // Update DOM elements with weather data
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed + "Km/Hr";
        document.body.style.backgroundImage = "url('https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68')"
        document.querySelector(".weather").classList.remove("loading")
    },


    // Method to initiate weather search

    search: () => {
        let searchText = document.querySelector(".searchBar") 
        weather.fetchWeather(searchText.value) 
        searchText.value = "";
    }
}

// Event listener for pressing Enter key in the search input
document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search(); 
    }
})

// Event listener for clicking the search button
document.querySelector(".search button").addEventListener("click", () => {
    weather.search(); 
})

// Fetch weather data for New York when the page loads
weather.fetchWeather("new york")
