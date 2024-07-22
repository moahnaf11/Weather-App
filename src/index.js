import "./style.css";
import { formSubmit, inputValue } from "../js/formsubmission";
import { celsius, fahrenheit, getData, jsonResponse } from "../js/script";
import { conversion } from "../js/fahrenheight";
import { loadFromLocalStorage } from "../js/storage";


let form = document.querySelector("form");

form.addEventListener("submit", (e) => formSubmit(e));

fahrenheit.addEventListener("click", () => conversion(jsonResponse));

celsius.addEventListener("click", () => getData(inputValue));

window.addEventListener("load", () => {
    let place = loadFromLocalStorage("place")
    if (!place) {
        place = "dubai";
        getData("place");
    }   else {
        getData(place);
    }
})

