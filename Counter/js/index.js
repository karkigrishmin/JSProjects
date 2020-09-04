const addBtn = document.querySelector(".high-btn");
const lowBtn = document.querySelector(".low-btn");
const number = document.querySelector(".num");

addBtn.addEventListener("click", numIncrement);
let num = 0;
function numIncrement() {
  num++;
  number.textContent = num;
  number.style.color = "Green";
}

lowBtn.addEventListener("click", numDecrement);

function numDecrement() {
  num--;
  number.textContent = num;
  number.style.color = "Red";
}
