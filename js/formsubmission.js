// form submisson function
import { getData } from "./script";

let index = 1;
let hoursIndex = 0;

let inputValue;

function formSubmit (e) {
    e.preventDefault();
    index = 1;
    hoursIndex = 0;
    let inputContainer = document.querySelector("form input");
    if (!inputContainer.checkValidity()) {
        inputContainer.setCustomValidity("Please Enter a Valid City/Country");
        inputContainer.reportValidity();
    }   else {
        inputContainer.setCustomValidity("");
        inputValue = inputContainer.value.toLowerCase();
        getData(inputContainer.value.toLowerCase());
    }
}





export {formSubmit, index, hoursIndex, inputValue};