(function () {
  const quotes = [
    { author: "Grish", quote: "Health is wealth" },
    { author: "GK", quote: "Simple living high thinking" },
  ];

  const btn = document.querySelector("button");
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");

  function generateQuote() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomNum].quote;
    author.textContent = quotes[randomNum].author;
  }

  btn.addEventListener("click", generateQuote);
})();
