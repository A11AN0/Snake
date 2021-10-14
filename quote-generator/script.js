const quoteText = document.querySelector("#quote");
const quoteButton = document.querySelector("#quoteButton");
const background = document.querySelector("main");

const quotes = [
    ["If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron", "/images/mountain.jpg"],
    ["It is during our darkest moments that we must focus to see the light. - Aristotle", "./images/moon.jpg"],
    ["Life is what happens when you're busy making other plans. - John Lennon", "./images/plans.jpg"],
    ["If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt", "./images/flower.jpg"],
    ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. - Steve Jobs", "./images/time.jpg"]
]

const getQuote = () =>{
    const randomNumber = Math.floor (Math.random() * quotes.length)
    quoteText.innerHTML = quotes[randomNumber][0];
    background.style.backgroundImage = `url(${quotes[randomNumber][1]})`
}

quoteButton.addEventListener("click", getQuote);

