const apiUrl = 'https://api.quotable.io/random';

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

async function fetchQuote() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        quoteElement.textContent = data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'An error occurred while fetching the quote: ' + error.message;
    }
}

fetchQuote();

newQuoteButton.addEventListener('click', fetchQuote);
