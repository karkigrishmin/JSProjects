const container = document.querySelector(".bg-image");
const btns = document.querySelectorAll("button");

const images = ["bg-1", "bg-2", "bg-3"];

let counter = 0;

container.style.background = `url('./img/${images[counter]}.jfif') center center/cover`;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.className === "right") {
      counter++;

      if (counter > images.length - 1) {
        counter = 0;
      }
      container.style.background = `url('./img/${images[counter]}.jfif') center center/cover`;
    } else {
      counter--;
      if (counter < 0) {
        counter = images.length - 1;
      }
      container.style.background = `url('./img/${images[counter]}.jfif') center center/cover`;
    }
  });
});
