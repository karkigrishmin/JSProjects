function calculateTip(e) {
  e.preventDefault();
  const billAmt = document.querySelector("#bill-amt").value;
  const serviceQual = document.querySelector("#serviceQuality").value;
  const peoples = document.querySelector("#peoples").value;

  //checking if all inputs are filled or not
  if (billAmt === "" || serviceQual === "" || peoples === "") {
    alert("Please fill the inputs");
    display.style.display = "none";
  }

  //calculate tip
  const totalAmt = (billAmt * serviceQual) / peoples;
  const display = document.querySelector("#displayTotal h1");
  display.style.display = "block";
  display.textContent += `: ${totalAmt}`;
}

document.querySelector("#calculate").addEventListener("click", calculateTip);
