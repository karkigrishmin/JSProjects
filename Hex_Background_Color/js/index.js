const body = document.querySelector("body");

const div = document.createElement("div");
const button = document.createElement("button");

div.textContent = `Hex Value: `;
button.textContent = "Change Background";

div.appendChild(button);
body.appendChild(div);

const hexValues = ["ccc", "000", "999"];

function changeBackground() {
  div.firstChild.textContent = "Hex Value: ";
  console.log("clicked");
  const colorIndex = parseInt(Math.random() * hexValues.length);
  body.style.backgroundColor = `#${hexValues[colorIndex]}`;
  div.firstChild.textContent += `#${hexValues[colorIndex]}`;
}

button.addEventListener("click", changeBackground);
