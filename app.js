setInterval(showTime, 1000);

function showTime() {
  const originalTime = new Date();
  let currentHour = originalTime.getHours();
  let currentMinute = originalTime.getMinutes();
  let currentSecond = originalTime.getSeconds();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  if (currentSecond < 10) {
    currentSecond = `0${currentSecond}`;
  }

  let currentClock = `${currentHour}:${currentMinute}:${currentSecond}`;
  document.querySelector("#digitalClock").innerHTML = currentClock;
  return currentClock;
}

// console.log(showTime());
