const input = document.querySelector(".input__file");
const labelFile = document.querySelector(".input__file-button-text") as HTMLElement;
let labelVal: string = null;

if (labelFile instanceof HTMLElement) {
  labelVal = labelFile.innerText;
}

input.addEventListener("change", function (e) {
  let fileName = "";
  if (this.files && this.files.length >= 1) fileName = this.files[0].name;
  if (fileName) {
    labelFile.innerText = fileName;
  } else {
    labelFile.innerText = labelVal;
  }
});
