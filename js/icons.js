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
    let style = document.createElement('style');
    style.id = "dynamic-titleicon-style";

    let styleContent = "";
    let icon = objects.currentConditions.icon;
    if (iconObject[icon]) {
        styleContent = `
            .title.content-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-image: url(${iconObject[icon]});
                background-position: right;
                background-repeat: no-repeat;
            }
        `;
        style.innerHTML = styleContent;
        document.head.appendChild(style);
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
            .every.hour${newHour + 1}::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-image: url(${iconObject[hoursIcon]});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                opacity: 0.2;
                z-index: 0;
            }
        `;
        newHour += 1;

    }
    console.log(styleContent);
    style.innerHTML = styleContent;

    newHour = 0;   
}

export {setIcon, hourlyIcon}