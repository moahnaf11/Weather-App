import { hourlyForecast } from "./hourly";
import { setIcon, hourlyIcon } from "./icons";

// api fetching function
let titleCard = document.querySelector("div.title > h1");
let dateTime = document.querySelector(".current-conditions > .datetime");
let time = document.querySelector(".current-conditions > .time");
let feelsLike = document.querySelector(".current-conditions > .feelslike");
let humidity = document.querySelector(".current-conditions > .humidity");
let precip = document.querySelector(".current-conditions > .precip");
let sunset = document.querySelector(".current-conditions > .sunset");
let temp = document.querySelector(".current-conditions > .temp");


let day1date = document.querySelector(".day1info > :first-child");
let day1temperature = document.querySelector(".day1info > :nth-child(2)");
let day1max = document.querySelector(".day1info > :nth-child(3)");
let day1min = document.querySelector(".day1info > :nth-child(4)");
let day1humidity = document.querySelector(".day1info > :nth-child(5)");
let day1sunset = document.querySelector(".day1info > :last-child");


let day2date = document.querySelector(".day2info > :first-child");
let day2temperature = document.querySelector(".day2info > :nth-child(2)");
let day2max = document.querySelector(".day2info > :nth-child(3)");
let day2min = document.querySelector(".day2info > :nth-child(4)");
let day2humidity = document.querySelector(".day2info > :nth-child(5)");
let day2sunset = document.querySelector(".day2info > :last-child");


let day3date = document.querySelector(".day3info > :first-child");
let day3temperature = document.querySelector(".day3info > :nth-child(2)");
let day3max = document.querySelector(".day3info > :nth-child(3)");
let day3min = document.querySelector(".day3info > :nth-child(4)");
let day3humidity = document.querySelector(".day3info > :nth-child(5)");
let day3sunset = document.querySelector(".day3info > :last-child");


let day4date = document.querySelector(".day4info > :first-child");
let day4temperature = document.querySelector(".day4info > :nth-child(2)");
let day4max = document.querySelector(".day1info > :nth-child(3)");
let day4min = document.querySelector(".day4info > :nth-child(4)");
let day4humidity = document.querySelector(".day4info > :nth-child(5)");
let day4sunset = document.querySelector(".day4info > :last-child");


let day5date = document.querySelector(".day5info > :first-child");
let day5temperature = document.querySelector(".day5info > :nth-child(2)");
let day5max = document.querySelector(".day5info > :nth-child(3)");
let day5min = document.querySelector(".day5info > :nth-child(4)");
let day5humidity = document.querySelector(".day5info > :nth-child(5)");
let day5sunset = document.querySelector(".day5info > :last-child");


let todaywindspeed = document.querySelector(".today-conditions > :first-child");
let todaypressure = document.querySelector(".today-conditions > :nth-child(2)");
let todayvisibilty = document.querySelector(".today-conditions > :nth-child(3)");
let todayconditions = document.querySelector(".today-conditions > :nth-child(4)");
let todayuvindex = document.querySelector(".today-conditions > :last-child");






async function getData (location) {
    try {
        const response =  await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"?unitGroup=metric&lang=en&key=QGSDS7CFKXG6SNT9EUKXJMLER&contentType=json", {
            method: "GET",
            mode: "cors"
        })
        if (!response.ok) {
            throw new Error("error in fetching data");
        }   else {
            const jsonResponse = await response.json();
            displayTitleContents(jsonResponse);
            DisplayNextDays(jsonResponse);
            displayTodayConditions(jsonResponse);
            hourlyForecast(jsonResponse);
            setIcon(jsonResponse);
            hourlyIcon(jsonResponse);
        }

    }   catch (error) {
        console.log("fetch error" + error);
    }
}



export {getData};

function displayTitleContents (objects) {
    titleCard.textContent = objects.resolvedAddress;
    dateTime.textContent = new Date(objects.days[0].datetime).toDateString();
    time.textContent = objects.currentConditions.datetime.slice(0, 5);
    temp.textContent = "Temp: " + objects.currentConditions.temp + "°C";
    feelsLike.textContent = "Feels Like: " + objects.currentConditions.feelslike + "°C";
    humidity.textContent = "Humidity: " + objects.currentConditions.humidity;
    precip.textContent = "Precipitation: " + objects.currentConditions.precip;
    sunset.textContent = "Sunset: " + objects.currentConditions.sunset.slice(0, 5);
}

function DisplayNextDays (objects) {
    day1date.textContent = new Date(objects.days[1].datetime).toDateString();
    day1temperature.textContent = "temp " + objects.days[1].temp + "°C";
    day1max.textContent = "max " + objects.days[1].tempmax + "°C";
    day1min.textContent = "min " + objects.days[1].tempmin + "°C";
    day1humidity.textContent = "humidity " + objects.days[1].humidity;
    day1sunset.textContent = "sunset " + objects.days[1].sunset.slice(0, 5);

    day2date.textContent = new Date(objects.days[2].datetime).toDateString();
    day2temperature.textContent = "temp " + objects.days[2].temp + "°C";
    day2max.textContent = "max " + objects.days[2].tempmax + "°C";
    day2min.textContent = "min " + objects.days[2].tempmin + "°C";
    day2humidity.textContent = "humidity " + objects.days[2].humidity;
    day2sunset.textContent = "sunset " + objects.days[2].sunset.slice(0, 5);


    day3date.textContent = new Date(objects.days[3].datetime).toDateString();
    day3temperature.textContent = "temp " + objects.days[3].temp + "°C";
    day3max.textContent = "max " + objects.days[3].tempmax + "°C";
    day3min.textContent = "min " + objects.days[3].tempmin + "°C";
    day3humidity.textContent = "humidity " + objects.days[3].humidity;
    day3sunset.textContent = "sunset " + objects.days[3].sunset.slice(0, 5);


    day4date.textContent = new Date(objects.days[4].datetime).toDateString();
    day4temperature.textContent = "temp " + objects.days[4].temp + "°C";
    day4max.textContent = "max " + objects.days[4].tempmax + "°C";
    day4min.textContent = "min " + objects.days[4].tempmin + "°C";
    day4humidity.textContent = "humidity " + objects.days[4].humidity;
    day4sunset.textContent = "sunset " + objects.days[4].sunset.slice(0, 5);


    day5date.textContent = new Date(objects.days[5].datetime).toDateString();
    day5temperature.textContent = "temp " + objects.days[5].temp + "°C";
    day5max.textContent = "max " + objects.days[5].tempmax + "°C";
    day5min.textContent = "min " + objects.days[5].tempmin + "°C";
    day5humidity.textContent = "humidity " + objects.days[5].humidity;
    day5sunset.textContent = "sunset " + objects.days[5].sunset.slice(0, 5);

    
}

function displayTodayConditions (objects) {
    todaywindspeed.textContent = "Windspeed: " + objects.days[0].windspeed;
    todaypressure.textContent = "Pressure: " + objects.days[0].pressure;
    todayvisibilty.textContent = "Visibility: " + objects.days[0].visibility;
    todayconditions.textContent = "Conditions: " + objects.days[0].conditions;
    todayuvindex.textContent = "UV Index: " + objects.days[0].uvindex;



}

