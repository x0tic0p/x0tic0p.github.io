const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

async function fetchQuote() {
    try {
        const response = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
        const data = await response.json();
        quoteElement.textContent = data.quoteText;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'An error occurred while fetching the quote.';
    }
}

// Fetch a quote when the page loads
fetchQuote();

// Fetch a new quote when the button is clicked
newQuoteButton.addEventListener('click', fetchQuote);
