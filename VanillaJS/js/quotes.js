const quotes = [
    {
        quote: "The only thing we have to fear is fear itself." ,
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on." ,
        author: "Robert Frost"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates"
    },
    {
        quote: "Be yourself; everyone else is already taken." ,
        author: "Oscar Wilde"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author:"John Lennon"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." ,
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams." ,
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author:"Winston Churchill"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
        author: "Nelson Mandela"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all." ,
        author:"Oscar Wilde"
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author