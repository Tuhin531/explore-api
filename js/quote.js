const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = quote => {
     const blockQuote = document.getElementById('quote-container');
    console.log(quote);
    blockQuote.innerHTML = quote.quote;
}
loadQuote();
