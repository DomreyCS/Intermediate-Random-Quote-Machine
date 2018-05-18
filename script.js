// Create event listeners
document.getElementById('getQuote').addEventListener('click', function (event) {
	requestQuote();
});
document.getElementById('tweetQuote').addEventListener('click', function (event) {
	composeTweet();
});

// Call to API
function requestQuote() {
	// Create a XHR (AJAX) object
	let url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand';
	let xhr = new XMLHttpRequest();
	// Handles API response
	xhr.onload = updateQuote;
	xhr.open('GET', url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime(), true); //prevents caching API response by adding new Date object to params
	xhr.send(null);
}

// Updates API response to DOM	    
function updateQuote() {
    if (this.readyState === 4 && this.status === 200) {
		let quote = JSON.parse(this.responseText).shift(); // Converts text to JSON and assigns first object from array
        document.getElementById('quote').innerHTML = `${quote.content}`; // Update quote
	    document.getElementById('author').innerHTML = `&mdash;${quote.title}`; // Update author
	} else {
	    alert(`connection failed`);
	}
}

function composeTweet() {
	let text = `"${document.querySelector('#quote > p').innerHTML}" ${document.querySelector('#author').innerHTML}`;
	window.open(`https://twitter.com/intent/tweet?text=${text}&via=dara_hoy&hashtags=random,quote,generator&url=https://github.com/DomreyCS/Design-Quotes`);
}
