import { index, hoursIndex } from "./formsubmission";
import { unit } from "./script";

let allHours = document.querySelectorAll(".every");
let hoursArray = [...allHours];

function hourlyForecast (objects) {
    for (let i = 0; i < hoursArray.length; ++i) {
        let box = document.querySelector(`.every.hour${index}`);
        let boxchild1 = document.querySelector(`.every.hour${i + 1} > :first-child`);
        let boxchild2 = document.querySelector(`.every.hour${i + 1} > :nth-child(2)`);
        let boxchild3 = document.querySelector(`.every.hour${i + 1} > :nth-child(3)`);
        let boxchild4 = document.querySelector(`.every.hour${i + 1} > :nth-child(4)`);
        let boxchild5 = document.querySelector(`.every.hour${i + 1} > :last-child`);


        boxchild1.textContent = objects.days[0].hours[i].datetime.slice(0, 5);
        boxchild2.textContent = "temp: " + objects.days[0].hours[i].temp + unit;
        boxchild3.textContent = "Feels like: " + objects.days[0].hours[i].feelslike + unit;
        boxchild4.textContent = "Humidity: " + objects.days[0].hours[i].humidity;
        boxchild5.textContent = "Conditions: " + objects.days[0].hours[i].conditions;

        index += 1;
        hoursIndex += 1;

    }
 
}

export {hourlyForecast, hoursArray};