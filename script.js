const reviews = [
{
    id: 1,
    name: 'Ms. Emmanuel',
    job:'Humanities Teacher',
    img: 'IMG_6696.jpeg',
    text: 'I have been teaching Aisha since 6th grade. Shes a great student with a bright future. She also tends to carry a strong woth ethic. I can not wait to see what the future holds for you!',
},

{
    id: 2,
    name: 'Ms. Cole',
    job:'Middle School Counselor',
    img: 'cole.webp',
    text: 'My name is ms. cole  l been a high school counselor in 2009 and l have 2 boys.Aisha is a strong student who manages to push through many challenegs. Shes very outgoing.'
},

{
    id: 3,
    name: 'name',
    job:'peer',
    img: 'picture',
    text:'lorem ipsum',
},
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn'); // make sure HTML uses .prev-btn
const nextBtn = document.querySelector('.next-btn'); // make sure HTML uses .next-btn

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});








