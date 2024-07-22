// form submisson function
import { getData } from "./script";

let index = 1;
let hoursIndex = 0;



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
        getData(inputContainer.value.toLowerCase());
    }
}





export {formSubmit, index, hoursIndex};