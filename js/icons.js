import snow from "../images/snow.svg";
import rain from "../images/rain.svg";
import fog from "../images/fog.svg";
import wind from "../images/wind.svg";
import cloudy from "../images/cloudy.svg";
import partCloudyDay from "../images/partly-cloudy-day.svg";
import partlyCloudyNight from "../images/partly-cloudy-night.svg";
import clearDay from "../images/clear-day.svg";
import clearNight from "../images/clear-night.svg";
import { hoursArray } from "./hourly";

let targetContent = document.querySelector(".title.content-card");

let iconObject = {
    snow: snow,
    rain: rain,
    fog: fog,
    wind: wind,
    cloudy: cloudy,
    "partly-cloudy-day": partCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
    "clear-day": clearDay,
    "clear-night": clearNight,
}

function setIcon (objects) {
    let icon = objects.currentConditions.icon;
    if (iconObject[icon]) {
        targetContent.style.backgroundImage = `url(${iconObject[icon]})`;
    }   else {
        console.log("icon not found");
    }
}

let newHour = 0;
function hourlyIcon (objects) {
    let style = document.createElement('style');
    style.id = "dynamic-bg-style";
    document.head.appendChild(style);

    let styleContent = "";

    for (let hour of hoursArray) {
        let hourBox = hour;
        let hoursIcon = objects.days[0].hours[newHour].icon;

        styleContent += `
            .every.hour${newHour}::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-image: url(${iconObject[hoursIcon]});
                background-size: cover;
                background-position: center;
                opacity: 0.5;
                z-index: -1;
                border-radius: 20px;
            }
        `;
        newHour += 1;

    }
    console.log(styleContent);
    style.innerHTML = styleContent;

    newHour = 0;   
}

export {setIcon, hourlyIcon}