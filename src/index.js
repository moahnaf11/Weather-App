import "./style.css";
import { formSubmit } from "../js/formsubmission";

let form = document.querySelector("form");

form.addEventListener("submit", (e) => formSubmit(e));

