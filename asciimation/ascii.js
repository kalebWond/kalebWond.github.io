// create variables for html control elements
const textarea = document.querySelector("#text-area");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const turbo = document.querySelector("#turbo");
const animationSelect = document.querySelector("#animation");
const sizeSelect = document.querySelector("#fontsize");

// variables for holding time interval globally and text area value
let INTERVAL_ID;
let TEXT = '';

// add event listeners on control elements
startBtn.addEventListener("click", startClickHandler);
stopBtn.addEventListener("click", stopHandler);
sizeSelect.addEventListener("change", sizeSelectChange);
animationSelect.addEventListener("change", animationSelectChange);
textarea.addEventListener("keyup", keyupHandler);

function startClickHandler(e) {
  const selectedAnimation = ANIMATIONS[animationSelect.value];
  const animateArr = selectedAnimation.split("=====\n");
  const isChecked = turbo.checked;

  let index = 0;
  textarea.value = animateArr[index];
  INTERVAL_ID = setInterval(
    () => {
      textarea.value = animateArr[++index % animateArr.length];
    },
    isChecked ? 50 : 250
  );
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled");
}

function stopHandler() {
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
  clearInterval(INTERVAL_ID);
  textarea.value = TEXT;
}

function animationSelectChange(e) {
  const selected = e.target.value;
  TEXT += " " + selected;
  textarea.value = TEXT;
}

function keyupHandler(e) {
    TEXT = e.target.value;
}

function sizeSelectChange(e) {
  const selected = e.target.value;
  TEXT += " " + selected;
  textarea.value = TEXT;
  switch (selected.toLowerCase()) {
    case "tiny":
      textarea.style.fontSize = "7pt";
      break;
    case "small":
      textarea.style.fontSize = "10pt";
      break;
    case "medium":
      textarea.style.fontSize = "12pt";
      break;
    case "large":
      textarea.style.fontSize = "16pt";
      break;
    case "extra large":
      textarea.style.fontSize = "24pt";
      break;
    case "xxl":
      textarea.style.fontSize = "32pt";
      break;
    default:
      break;
  }
}
