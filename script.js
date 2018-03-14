// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



var quotes= [
{quote : "A person who is being carried to the market does not realize that the way is long.",source:"Emeka Okafor", citation: "Things fall apart", year: 1982 },
{quote : "Let us sacrifice our today so that our children can have a better tomorrow.", source:"A. P. J. Abdul Kalam", citation: "Broken dreams", year: 1978 },
{quote : "Learning never exhausts the mind", source:"Leonardo da Vinci"},
{quote : "Whether it was the tenant who seduced the landlord's wife, or the landlord who seduced the tenant's wife, it is the tenant who would leave the house.", source:"Charles Soludo", citation :"Welcome to Nigeria", year : 2001  },
{quote : "The world is like a goat's udder. It does not yile any milk, unless you punch and squeeze at it.", source:"Chike Ubaka"},
{quote : "If you cannot do great things, do small things in a great way.", source:"Napoleon Hill"},
{quote : "You cannot shake hands with a clenched fist.", source:"Indira Gandhi"},
{quote : "If you close your eyes to facts, you will learn through accidents", source:"Wilson Olamide"}

];


function getRandomQuote() {
var randomNumber = Math.floor(Math.random () * quotes.length);
var topQuote = quotes[randomNumber];    
return topQuote;    
    
}    



function printQuote() {
var html;	
var totalQuote = getRandomQuote();
if (totalQuote.quote) {
html+= "<p class='quote'>" + totalQuote.quote+ " </p>"    ;    
}    
if (totalQuote.source) {
    
html+="<p class='source'>" + totalQuote.source     ;
}
if (totalQuote.citation) {
html+= '<span class="citation">' + totalQuote.citation + '</span>';
        

}    
if (totalQuote.year) {
html+= '<span class="year">' + totalQuote.year + '</span>' + '</p>';;    
    
}
document.getElementById('quote-box').innerHTML = html ;
    
}