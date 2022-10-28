const input = document.querySelector(".list__item-input");
const gnrBtn = document.querySelector(".list__item-gnr-btn");
const resetBtn = document.querySelector(".list__item-rst-btn");
const sortBtn = document.querySelector(".list__item-srt-btn");
const bar = document.getElementsByClassName("bar");
const barsBox = document.querySelector(".container__display-sort-box");

let inputValue = 0;

let counter = 0;

let barEl;

gnrBtn.addEventListener("click", () => {
  if (input.value <= 40) {
    let rand = Math.floor(Math.random() * 99) + 1;
    counter++;
    if (counter === 1) {
      inputValue = input.value - 1;
      for (let i = 0; i <= inputValue; i++) {
        rand = Math.floor(Math.random() * 99) + 1;
        barEl = document.createElement("div");
        barEl.classList.add("bar");
        barsBox.appendChild(barEl);
        barEl.setAttribute("style", `height: ${rand}%`);
      }
    }
  }
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  barsBox.innerHTML = "";
  input.value = 1;
});

sortBtn.addEventListener("click", sorter);

let getHeight = function (bar) {
  return Number(bar.getAttribute("style").split("").slice(-3, -1).join(""));
};

function sorter() {
  const arr = [];
  for (let i = 0; i <= inputValue; i++) {
    bigBar = getHeight(bar[i]);
    arr.push(bigBar);
  }

  let now = arr[0];
  for (let i = 0; i <= inputValue; i++) {
    for (let j = i + 1; j <= inputValue; j++) {
      if (arr[i] > arr[j]) {
        now = arr[i];
        arr[i] = arr[j];
        arr[j] = now;
      }
    }
  }

  for (let i = 0; i <= inputValue; i++) {
    bar[i].setAttribute("style", `height: ${arr[i]}%`);
  }
}
