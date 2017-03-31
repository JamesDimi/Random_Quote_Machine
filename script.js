$(document).ready(function() {

    $('#about').fadeIn();

});

function generateQuote() {

    $.getJSON('https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520', function(quotes) {

        $("#quote-container").css("display", "none");
        var html = "";
        var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        var rndmQuote = quotes[randomQuoteIndex];
        var keys = Object.keys(rndmQuote);
        html += "<span id='quote'> ''" + rndmQuote[keys[0]] + "''</span>";
        html += "<p id='author'>" + "-" + rndmQuote[keys[1]] + "</p>";
        document.getElementById("quote-container").innerHTML = html;
        $("#quote-container").fadeIn();

    });
}
