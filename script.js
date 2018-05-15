//Create event listener
document.getElementById('getQuote').addEventListener('click', getQuote);

function getQuote() {
    //Create the XHR object
    let xhr = new XMLHttpRequest();
    // .open(method, url/file, async)
    xhr.open('GET', 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', true)
    // Handles API response
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(this.responseText); // JSON.parse translates the object
            document.getElementById('quote').innerHTML = `${data[0].content} &mdash; ${data[0].title}`;
            
        }
    }
    xhr.onerror = function() {
        console.log('Request Error...')
    }
    //Sends request
    xhr.send();
}