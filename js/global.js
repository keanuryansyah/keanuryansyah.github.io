let buttonInv = document.querySelector(".buttonInv");
let popUpBox = document.querySelector(".popUpBox");

window.addEventListener("load", () => {
  let popUpBox = document.querySelector(".popUpBox");
  setTimeout(() => {
    popUpBox.classList.add("show");
  }, 1000);
  buttonInv.addEventListener("click", () => {
    popUpBox.classList.remove("show");
    let audio = document.querySelector("#heroSection audio");
    audio.play();
  });
});

// COUNTDOWN
let eventsDate = new Date("November 4 2023 12:00:00");

let currentDate = new Date();

let diffrence = eventsDate.getTime() - currentDate.getTime();

let day = Math.floor(diffrence / (1000 * 60 * 60 * 24));
let hour = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minute = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
let second = Math.floor((diffrence % (1000 * 60)) / 1000);

// days
let daysSpan = document.querySelector(".days span:first-child");
daysSpan.innerHTML = day;

// hours
let hoursSpan = document.querySelector(".hours span:first-child");
hoursSpan.innerText = hour;

// minutes
let minutesSpan = document.querySelector(".minutes span:first-child");
minutesSpan.innerText = minute;

// seconds
let secondsSpan = document.querySelector(".seconds span:first-child");
secondsSpan.innerText = second;

// countdown

let interval = setInterval(() => {
  if (secondsSpan.innerText == 0) {
    secondsSpan.innerText = 59;

    minutesSpan.innerText -= 1;

    if (minutesSpan.innerText == 0) {
      minutesSpan.innerText = 59;

      hoursSpan.innerText -= 1;

      if (hoursSpan.innerText == 0) {
        hoursSpan.innerText == 23;
        daysSpan.innerText -= 1;

        if (daysSpan.innerText == 0 && hoursSpan.innerText == 0) {
          clearInterval(interval);
        }
      }
    }

    return;
  }

  secondsSpan.innerText -= 1;
}, 1000);

// SAVE EVENT TO CALENDER
let buttonSave = document.querySelector(".saveCalender");
buttonSave.addEventListener("click", () => {
  window.location.href =
    "https://calendar.google.com/calendar/u/0/r/day/2023/11/4";
});

// // SEMENTARA

// let gift = document.querySelector(".gift");
// let count = 0;
// gift.addEventListener("click", () => {
//   count++;
//   let p = document.querySelector("#heroSection audio");

//   if (count % 2 == 1) {
//     p.pause();
//     return;
//   }

//   p.play();

//   console.log(p);
// });

let bridePicture = document.querySelectorAll(".bridePicture img");

let countSlide = 0;

setInterval(() => {
  for (let slide of bridePicture) {
    slide.classList.remove("show");
  }

  if (countSlide == 2) {
    countSlide = -1;
  }

  countSlide++;

  bridePicture[countSlide]
    ? bridePicture[countSlide].classList.add("show")
    : "";
}, 5000);
