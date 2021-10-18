const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const dates = document.querySelector('.date span');
const countdown = document.querySelector('.countdown');
const items = document.querySelectorAll('.countdown-format h3');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const FutureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let FutureDate = new Date(2021, 11, 17);

const year = FutureDate.getUTCFullYear();
let month = FutureDate.getMonth();
month = months[month];
const date = FutureDate.getDate();
const weekday = weekdays[FutureDate.getDay()];

dates.textContent = `${weekday}, ${date} ${month} ${year}`;

// future date
const FutureTime = FutureDate.getTime();

function getRemainningTime() {
  const today = new Date().getTime();
  const t = FutureTime - today;
  // console.log(t);

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set value array

  function Furmat(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  const values = [days, hours, minutes, seconds];
  items.forEach(function(item, index) {
    item.innerHTML = Furmat(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    countdown.innerHTML = `
    <h3 class="expired">
    Sorry, This Time expired</h3>`
  }
};

// countdowns
let countdowns = setInterval(getRemainningTime, 1000);

// call function
getRemainningTime();

