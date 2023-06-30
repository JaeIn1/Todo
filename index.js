const container = document.querySelector(".d-day-container");
const newContainer = document.querySelector(".d-day-message");

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const countMaker = function () {
  const dateFormat = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(dateFormat);
  const remaining = (targetDate - nowDate) / 1000;
  console.log(container);
  console.log(newContainer);

  if (remaining <= 0) {
    // console.log('타이머가 종료되었습니다.');
    container.style.display = "none";
    newContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
    newContainer.style.display = "flex";
    return;
  } else if (isNaN(remaining)) {
    // console.log('유효하지 않은 시간대입니다.');
    container.style.display = "none";
    newContainer.innerHTML = `<h3>유효하지 않은 시간대입니다.</h3>`;
    newContainer.style.display = "flex";
    return;
  }

  // const remainingDate = Math.floor(remaining / 3600 / 24);
  // const remainingHour = Math.floor(remaining / 3600) % 24;
  // const remainingMin = Math.floor(remaining / 60) % 60;
  // const remainingSec = Math.floor(remaining) % 60;

  // const days = document.getElementById("days");
  // const hours = document.getElementById("hours");
  // const min = document.getElementById("min");
  // const sec = document.getElementById("sec");

  // days.textContent = remainingDate;
  // hours.textContent = remainingHour;
  // min.textContent = remainingMin;
  // sec.textContent = remainingSec;

  const remainObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHour: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  const dateObj = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
  };

  const remainObjKey = Object.keys(remainObj);
  const dateObjKey = Object.keys(dateObj);

  for (let i = 0; i <= remainObjKey.length; i++) {
    dateObj[dateObjKey[i]].textContent = remainObj[remainObjKey[i]];
  }

  console.log(remainingDate, remainingHour, remainingMin, remainingSec);
};
