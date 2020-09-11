const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const selectedMovie = document.getElementById("movie");
let ticketPrice = +parseInt(selectedMovie.value);

// console.log(typeof ticketPrice);

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.textContent = selectedSeatsCount;
  total.textContent = selectedSeatsCount * ticketPrice;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log("clicked");
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

selectedMovie.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
  updateSelectedCount();
});
