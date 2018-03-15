// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//array of objects that includes all the quotes
var quotes= [
{quote : "A person who is being carried to the market does not realize that the way is long.",source:"Emeka Okafor", citation: "Things fall apart", year: 1982, tag:" tags: 'determination', 'success' " },
{quote : "Let us sacrifice our today so that our children can have a better tomorrow.", source:"A. P. J. Abdul Kalam", citation: "Broken dreams", year: 1978, tag: " tag : 'Sacrifice','Dedication','Hardwork' " },
{quote : "People won't have time for you if you are always angry or complaining", source:"Godfrey Emerole", citation:"My story", year:1984, tag:"tag : 'Happiness' , 'Peace' "},
{quote : "Whether it was the tenant who seduced the landlord's wife, or the landlord who seduced the tenant's wife, it is the tenant who would leave the house.", source:"Charles Soludo", citation :"Welcome to Nigeria", year : 2001, tag:" tag : 'Humor' , 'comedy' "  },
{quote : "The world is like a goat's udder. It does not yile any milk, unless you punch and squeeze at it.", source:"Chike Ubaka", citation :"stories that touch", year:2012, tag:" tag : 'Dedication', 'Perseverance'"},
{quote : "If you cannot do great things, do small things in a great way.", source:"Napoleon Hill" , tag: "tag :'Passion','Hardwork',''"},
{quote : "You cannot shake hands with a clenched fist.", source:"Indira Gandhi", tag:"tag : 'Forgiveness', 'Peace' " },
{quote : "If you close your eyes to facts, you will learn through accidents", source:"Wilson Olamide", citation: "science students", year:2009, tag: "tag :'humor'"},
{quote : "Don't cry because it's over, smile because it happened", source:"Dr Olokede", citation: "African Champion", year:1999, tag: " tag :mistake'"}
];

// This is the function to get a random quote in the array of objects 

function getRandomQuote() {
var randomNumber = Math.floor(Math.random () * quotes.length);
var topQuote = quotes[randomNumber];    
return topQuote;    
    
}    


// This function is to print the quotes in the html document and the getRandomQuote is called in this function

function printQuote() {
var html=""	
var changeColor = randomBackgroundColor();
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
html+= '<span class="year">' + totalQuote.year ;   
    
}
if (totalQuote.tag) {
html+= ' <br><span class="tag">' + totalQuote.tag + '</span>' + '</p>';  	
	
}	

document.getElementById('quote-box').innerHTML = html ;
    
}


function randomBackgroundColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var backGroundColor = "rgb(" + red + "," + green + "," + blue + ")";

document.body.style.background = backGroundColor;
}

	
	
//Sets a timer that changes the quote after every 12 seconds//
 setInterval(printQuote ,12000) ;

	
	
