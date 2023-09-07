
const currentDate = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let ms = currentDate.getUTCMilliseconds()


const dayOfWeek = daysOfWeek[currentDate.getDay()];

document.getElementsByClassName("dayOfTheWeek")[0].innerHTML = `Current day of the week: ${dayOfWeek}`

document.getElementsByClassName('utcTime')[0].innerHTML = `Current UTC Time: ${ms}ms`
