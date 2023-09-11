const weekDay = document.querySelector('.date-day');
const day = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');

const digitalClock = document.querySelector('.digital-clock');

const mechanicalClock = document.querySelector('.mechanical-clock');
const hoursArrow = document.querySelector('.clock-hours__arrow');
const minutesArrow = document.querySelector('.clock-minutes__arrow');
const secondsArrow = document.querySelector('.clock-seconds__arrow');

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurthday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];

// Initialization before update interval

const currentDate = new Date();
setWeekDay(currentDate);
setDate(currentDate);
setMonth(currentDate);
setYear(currentDate);
setDigitalClock(currentDate);
setTimeChanges(currentDate);

// Setting interval

setInterval(() => {
  const currentDate = new Date();

  setWeekDay(currentDate);
  setDate(currentDate);
  setMonth(currentDate);
  setYear(currentDate);
  setDigitalClock(currentDate);
  setTimeChanges(currentDate);
}, 1000);

// Supplementary functions

function setWeekDay(currentDate) {
  const currentWeekDay = weekDays[currentDate.getDay()];
  weekDay.textContent = currentWeekDay;
}

function setDate(currentDate) {
  const currentDay = currentDate.getDate();
  day.textContent = currentDay;
}

function setMonth(currentDate) {
  const currentMonth = months[currentDate.getMonth()];
  month.textContent = currentMonth;
}

function setYear(currentDate) {
  const currentYear = currentDate.getFullYear();
  year.textContent = currentYear;
}

function setDigitalClock(currentDate) {
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  const currentTime = `${currentHours.toString().padStart(2, '0')} : 
                       ${currentMinutes.toString().padStart(2, '0')} : 
                       ${currentSeconds.toString().padStart(2, '0')}`;

  digitalClock.textContent = currentTime;
}

function setTimeChanges(currentDate) {
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  const changeSeconds = (360 / 60) * currentSeconds;
  const changeMinutes = (360 / 60) * currentMinutes;
  // const changeHours = (360 / 12) * currentHours + Math.floor(currentMinutes / 10) * 5;
  const changeHours = (360 / 12) * currentHours + (360 / 12 / 60) * currentMinutes;

  secondsArrow.classList.add('seconds-transform');

  secondsArrow.style.transform = `rotate(${changeSeconds}deg) translateX(-50%)`;
  minutesArrow.style.transform = `rotate(${changeMinutes}deg) translateX(-50%)`;
  hoursArrow.style.transform = `rotate(${changeHours}deg) translateX(-50%)`;
}
