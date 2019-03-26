const quoteButton = document.querySelector("#quote-button");
const tweetButton = document.querySelector(".tweet-button");

quoteButton.addEventListener("click", getQuote);

const url =
  "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

// Get div where quote will display
const displayQuote = document.querySelector(".item");

const displayAuthor = document.querySelector(".author");

// Use fetch API to get data
function getQuote() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // display quote text
      displayQuote.textContent = data.quoteText;
      // display quote Author
      displayAuthor.textContent = data.quoteAuthor;

      // Tweet Quote
      tweetButton.addEventListener("click", () => {
        tweetButton.setAttribute(
          "href",
          "https://twitter.com/intent/tweet/?text=" +
            data.quoteText +
            "- " +
            data.quoteAuthor
        );
      });
    })
    .catch(error => {
      console.log(error);
    });
}
