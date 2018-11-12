const quoteButton = document.getElementById('quote-button');
const tweetButton = document.querySelector('.tweet-button');

quoteButton.addEventListener('click', getQuote);
tweetButton.addEventListener('click', tweetQuote);

const endpoint = 'https://talaikis.com/api/quotes/random/';

function getQuote() {
    // create a request variable and assign to new XMLHttpRequest to it
    const request = new XMLHttpRequest();

    // Open a new connection using the GET request
    request.open('GET', endpoint, true);

    request.onload = function() {
        // Access JSON data here
        if(this.status == 200) {
            const quoteText = JSON.parse(this.response);
            // display quote text
            const displayQuote = document.querySelector('.item');
            displayQuote.textContent = quoteText.quote;

            // display quote author
            const displayAuthor = document.querySelector('.author');
            displayAuthor.textContent = quoteText.author;
        } else {
            console.log('An error has occurred');
        }
    }
    // Send Request
    request.send();
}

function tweetQuote() {
    tweetButton.setAttribute('href', `https://twitter.com/share`);
}
