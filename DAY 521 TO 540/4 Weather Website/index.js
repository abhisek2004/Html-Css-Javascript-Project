const API_KEY = "YOUR_API_KEY";

const search = document.getElementById("inp");
const degree = document.getElementById("degree");
const type = document.getElementById("type");
const city = document.getElementById("city");
const weatherImg = document.getElementById("img");

async function getWeather(input) {
    if (!input.trim()) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                input
            )}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            if (data.cod === 404) {
                alert("City not found. Please enter a valid city name.");
            } else {
                alert("Something went wrong. Please try again.");
            }
            return;
        }

        console.log(data);

        city.textContent = data.name;
        degree.textContent = `${Math.round(data.main.temp)}°C`;
        type.textContent = data.weather[0].main;

        search.value = "";

        updateWeatherUI(data.weather[0].main);

    } catch (error) {
        console.error("Error:", error);
        alert("Unable to fetch weather data. Please check your internet connection.");
    }
}

function updateWeatherUI(weather) {
    const weatherData = {
        Clear: {
            image: "clear-sky.png",
            background: "clear.jpg"
        },
        Clouds: {
            image: "clouds.png",
            background: "cld.jpg"
        },
        Rain: {
            image: "rain.png",
            background: "rn.jpg"
        },
        Thunderstorm: {
            image: "storm.png",
            background: "storm.jpg"
        },
        Haze: {
            image: "clouds.png",
            background: "haze.jpg"
        },
        Snow: {
            image: "snow.png",
            background: "snow.jpg"
        },
        Smoke: {
            image: "clouds.png",
            background: "haze.jpg"
        },
        Mist: {
            image: "clouds.png",
            background: "haze.jpg"
        }
    };

    const currentWeather = weatherData[weather] || {
        image: "clouds.png",
        background: "cld.jpg"
    };

    weatherImg.src = currentWeather.image;

    document.body.style.backgroundImage =
        `url('${currentWeather.background}')`;

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

function myFun() {
    const input = search.value.trim();
    getWeather(input);
}

// Press Enter to search
search.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        myFun();
    }
});
