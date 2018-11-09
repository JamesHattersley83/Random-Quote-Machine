const quoteButton = document.getElementById('quote-button');
const tweetButton = document.getElementById('tweet-button');

quoteButton.addEventListener('click', getQuote);

const endpoint = 'http://quotes.rest/qod';

function getQuote() {
    // create a request variable and assign to new XMLHttpRequest to it
    var request = new XMLHttpRequest();

    // Open a new connection using the GET request
    request.open('GET', endpoint, true);

    request.onload = function() {
        // Access JSON data here
        if(this.status == 200) {
            var quote = JSON.parse(this.responseText);
            console.log(quote);
        }
    }
    // Send Request
    request.send();
}

