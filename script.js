// Create an event listener for button
document.getElementById('getQuote').addEventListener('click', requestQuote);

function requestQuote(){
	// Create the XHR object
	let xhr, url;
	xhr = new XMLHttpRequest();
	// Assign URL variable
	url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand';
	// Handles API response
	xhr.onload = updateQuote;
	xhr.open('GET', url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime(), true); //prevents caching API response by adding new Date object to params
	xhr.send(null);
}

function updateQuote() {
    if (this.readyState && this.status === 200) {
		let quote = JSON.parse(this.responseText).shift(); // Converts text to JSON and assigns first object from array
		console.log(quote);
        document.getElementById('quote').innerHTML = `${quote.content}`; // Update quote
	    document.getElementById('author').innerHTML = `&mdash; ${quote.title}`; // Update author
	} else {
	    return false;
	}
	
}
