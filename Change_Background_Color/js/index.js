const btn = document.querySelector("#bg button");
const body = document.querySelector("body");

body.style.backgroundColor = "green";

const colors = ["red", "blue", "orange", "violet", "purple"];

btn.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
