const inputField = document.querySelector("#input-field");
const submitBtn = document.querySelector("#submit");
const msg = document.querySelector("p");

submitBtn.addEventListener("click", passMsg);

function passMsg(e) {
  e.preventDefault();
  console.log(inputField.value);
  if (inputField.value) {
    displayMsg();
    clearInput();
  } else {
    alert("Input field is empty");
  }
}

function clearInput() {
  inputField.value = "";
}

function displayMsg() {
  console.log(inputField.value);
  msg.textContent = inputField.value;
}
