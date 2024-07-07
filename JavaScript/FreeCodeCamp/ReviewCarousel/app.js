const reviews = [
    {
        id: 1,
        name: "Yoon",
        job: "Web Developer",
        text: "My name is Yoon. I'm interested in Spring & Cloud. My company is Pionnet"
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
]
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    const item = reviews[currentItem]
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
})

function showPerson(person){
    const item = reviews[person];
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
})