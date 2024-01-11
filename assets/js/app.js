setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const toggle = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

var mode = "dark";

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(hourHand, hoursRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(secondHand, secondsRatio);
  setSpanDate();
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

function setSpanDate() {
  let date = new Date();

  document.getElementById("displayDate").innerText = date;
}

toggle.addEventListener("click", function (e) {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

setClock();
