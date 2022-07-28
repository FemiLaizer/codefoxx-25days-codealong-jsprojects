/*
function generate(){
    const quotes = {
        "~ Femi Laizer": '"The possibility that God cannot do the impossible is not possible"',
        "~ Anonymous": '"Any problem shared is half-spread"',
        "~ Code Quote": '"practice plus patience equals perfection"',
    }
    
    let quoteArray = Object.values(quotes);
    let authorArray = Object.keys(quotes);

    function returnRandom(){
        return Math.floor(Math.random() * quoteArray.length);
    }

    document.querySelector("#quote").innerHTML = quoteArray[returnRandom()];
    document.querySelector("#author").innerHTML = authorArray[returnRandom()];
} */

function generate(){
    const quotes = {
        "~ Femi Laizer": '"The possibility that God cannot do the impossible is not possible"',
        "~ Anonymous": '"Any problem shared is half-spread"',
        "~ Code Quote": '"practice plus patience equals perfection"',
    }
    
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];
        
    document.querySelector("#quote").innerHTML = quote;
    document.querySelector("#author").innerHTML = author;
}
