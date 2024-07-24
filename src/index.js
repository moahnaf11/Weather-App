import "./style.css";
import { formSubmit, inputValue } from "../js/formsubmission";
import { celsius, fahrenheit, getData, jsonResponse } from "../js/script";
import { conversion } from "../js/fahrenheight";
import { loadFromLocalStorage, saveToLocalStorage } from "../js/storage";


let form = document.querySelector("form");

form.addEventListener("submit", (e) => formSubmit(e));

fahrenheit.addEventListener("click", () => conversion(jsonResponse));

celsius.addEventListener("click", () => getData(loadFromLocalStorage("place")));

window.addEventListener("load", () => {
    let city = loadFromLocalStorage("place")
    if (!city) {
        getData("dubai");
    }   else {
        getData(city);
    }
})

