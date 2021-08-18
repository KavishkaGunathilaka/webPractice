const quotes = [
    {
        id: 1,
        name: "Steve Jobs",
        job: "Co-founder of Apple Inc.",
        img: "../images/jobs.jpg",
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        id: 2,
        name: "James Cameron",
        job: "Film director",
        img: "../images/cameron.jpg",
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        id: 3,
        name: "John Lennon",
        job: "Singer/Songwriter/Musician",
        img: "../images/lennon.jpg",
        text: "Life is what happens when you're busy making other plans."
    },
    {
        id: 4,
        name: "Robert Louis Stevenson",
        job: " Novelist/Poet",
        img: "../images/stevenson.jpg",
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant."
    },
    {
        id: 5,
        name: "Benjamin Franklin",
        job: "Politician/Scientist",
        img: "../images/franklin.jpg",
        text: "Tell me and I forget. Teach me and I remember. Involve me and I learn. "
    },
    {
        id: 6,
        name: "Nelson Mandela",
        job: "Former President of South Africa",
        img: "../images/mandela.jpg",
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        id: 7,
        name: "Aristotle",
        job: "Philosopher",
        img: "../images/aristotle.jpg",
        text: "It is during our darkest moments that we must focus to see the light. "
    },
    {
        id: 8,
        name: "Confucius",
        job: "Philosopher",
        img: "../images/confucius.jpg",
        text: "Life is really simple, but we insist on making it complicated."
    },
    {
        id: 9,
        name: "Bob Marley",
        job: "Singer/Songwriter/Musician",
        img: "../images/marley.jpg",
        text: "Love the life you live. Live the life you love."
    },
    {
        id: 10,
        name: "Walt Disney",
        job: "Animator/Film producer",
        img: "../images/walt.jpg",
        text: "The way to get started is to quit talking and begin doing."
    }
]

//select items
const img = document.getElementById("img");
const author = document.getElementById("author");
const info = document.getElementById("info");
const quote = document.getElementById("quote");

const prevBtn = document.querySelector(".btn-left");
const nextBtn = document.querySelector(".btn-right");
const randomBtn = document.querySelector(".btn-suprise");

//set starting item
let currentItem = 0;

//load inittial item
window.addEventListener("DOMContentLoaded", function() {
    loadContent(currentItem);
});

//load content
function loadContent(value){
    const item = quotes[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.job;
    quote.textContent = item.text;
}

//show next quote
nextBtn.addEventListener("click", function(){
    currentItem++;
    currentItem = currentItem%(quotes.length);
    loadContent(currentItem);
})

//show previous quote
prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = quotes.length - 1;
    }
    loadContent(currentItem);
})

//show random quote
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * 10);
    loadContent(currentItem);
})
