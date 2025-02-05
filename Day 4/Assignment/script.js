// Please, don’t let confusion take hold; a clear explanation is on the way.
// You are only responsible for certain parts of the code mentioned.
// :) Happy coding!

// don't change the code below

const btnGenerate = document.querySelector("#btn-generator");
btnGenerate.addEventListener("click", generateQuote);
function generateQuote() {
    const myQuote = document.querySelector("#quote");
    myQuote.innerText = fetchQuote();
}


function fetchQuote() {
    let quotes = "The only way to do great work is to love what you do.Believe you can and you're halfway there.Success is not final, failure is not fatal: It is the courage to continue that counts.Your time is limited, don't waste it living someone else's life.The best way to predict the future is to create it"
    // Your Time 👇 ...

    let quotesArray = quotes.split("."); // ... continue
    let randomIndexInQuotsArray = Math.floor(Math.random() * quotes.split(".").length );  // ... continue
    return quotesArray[randomIndexInQuotsArray];

}

// HTML Requirments
// <!-- The <p></p> that you will write in the Quote must have an id called "quote" => don't change that :) -->
// <!-- The button must have an id called  "btn-generator" => don't change that :) -->


// JS Hints :
// 1- split the stacked string into an array of strings by dot (.) => to have an array of quotes
/*Expected result 1:
quotesArray = [
    "The only way to do great work is to love what you do",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, don't waste it living someone else's life.",
    "The best way to predict the future is to create it."
];
*/
// 2- return a random quote from the array of quotes
// you can use ;) => "lenght property"  "random method in math object" "floor method in math object"
// ====> remember random method returns values from 0 to 1
// ====> multiply that with the length of the array
// ====> take the floor of the result
// ====> finally we will have a random index in the array
/*Expected result 2:
"One of the quotes"
*/
