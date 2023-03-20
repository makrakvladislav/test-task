import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const nonLinearSlider: HTMLElement = document.querySelector(".range-slider");
let sliderValue: HTMLElement = document.querySelector(".form__range-slider-value");
let sliderInput: HTMLInputElement = document.querySelector(".form__range-slider-input");

noUiSlider.create(nonLinearSlider, {
  start: 0,
  connect: "lower",
  range: {
    min: 0,
    max: 100,
  },
});

(nonLinearSlider as noUiSlider.target).noUiSlider.on("update", function (values, handle) {
  sliderValue.innerHTML = Number(values[handle]).toFixed(0).toString() + " %";
  sliderInput.placeholder = Number(values[handle]).toFixed(0).toString() + " %";
});
