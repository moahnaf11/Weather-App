import { celsius, temp, feelsLike, fahrenheit, unit, day1temperature, day1max, day1min, day2temperature, day2max, day2min, day3temperature, day3max, day3min, day4temperature, day4max, day4min, day5temperature, day5max, day5min} from "./script";
import { hoursArray } from "./hourly";


function conversion (objects) {
    unit = "°F";
    celsius.classList.remove("active");
    fahrenheit.classList.add("active");
    day1temperature.textContent = "temp " + ((objects.days[1].temp * 9/5) + 32).toFixed(1) + unit;
    day1max.textContent = "max " + ((objects.days[1].tempmax * 9/5) + 32).toFixed(1) + unit;
    day1min.textContent = "min " + ((objects.days[1].tempmin * 9/5) + 32).toFixed(1) + unit;

    day2temperature.textContent = "temp " + ((objects.days[2].temp * 9/5) + 32).toFixed(1) + unit;
    day2max.textContent = "max " + ((objects.days[2].tempmax * 9/5) + 32).toFixed(1) + unit;
    day2min.textContent = "min " + ((objects.days[2].tempmin * 9/5) + 32).toFixed(1) + unit;

    day3temperature.textContent = "temp " + ((objects.days[3].temp * 9/5) + 32).toFixed(1) + unit;
    day3max.textContent = "max " + ((objects.days[3].tempmax * 9/5) + 32).toFixed(1) + unit;
    day3min.textContent = "min " + ((objects.days[3].tempmin * 9/5) + 32).toFixed(1) + unit;


    day4temperature.textContent = "temp " + ((objects.days[4].temp * 9/5) + 32).toFixed(1) + unit;
    day4max.textContent = "max " + ((objects.days[4].tempmax * 9/5) + 32).toFixed(1) + unit;
    day4min.textContent = "min " + ((objects.days[4].tempmin * 9/5) + 32).toFixed(1) + unit;

    day5temperature.textContent = "temp " + ((objects.days[5].temp * 9/5) + 32).toFixed(1) + unit;
    day5max.textContent = "max " + ((objects.days[5].tempmax * 9/5) + 32).toFixed(1) + unit;
    day5min.textContent = "min " + ((objects.days[5].tempmin * 9/5) + 32).toFixed(1) + unit;


    temp.textContent = "Temp: " + ((objects.currentConditions.temp * 9/5) + 32).toFixed(1) + unit;
    feelsLike.textContent = "Feels Like: " + ((objects.currentConditions.feelslike * 9/5) + 32).toFixed(1) + unit;


    hoursArray.forEach((hour, index) => {
        hour.querySelector(":nth-child(2)").textContent = "temp: " + ((objects.days[0].hours[index].temp * 9/5) + 32).toFixed(1) + unit;
        hour.querySelector(":nth-child(3)").textContent = "temp: " + ((objects.days[0].hours[index].temp * 9/5) + 32).toFixed(1) + unit;

    })

}

export {conversion};