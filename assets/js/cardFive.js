
const cardsData5 = [
    {
        image: "./assets/Images/cat2.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/CatIcon.webp",
        rating: "4.5★",
    },
    {
        image: "./assets/Images/againeCat.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/againecatIcon.webp",
        rating: "4.5★",
    },
    {
        image: "./assets/Images/cat.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/CatIcon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: "./assets/Images/mini.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/miniIcon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_454545_FILL0_wght400_GRAD0_opsz24.svg', number: '4.5',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },

]
let currentIndex5 = 0;
const cardContainer5 = document.getElementById('card-container-5');
const prevButton5 = document.getElementById('prev-button-5');
const nextButton5 = document.getElementById('next-button-5');
function displayCards5() {
    cardContainer5.innerHTML = '';

    for (let i = currentIndex5; i < currentIndex5 + 3 && i < cardsData5.length; i++) {
        const card = document.createElement('div');
        card.className = 'col-lg-4';
        card.innerHTML = `
<div class= 'card'>
    <img class="p-2 rounded-4 imgSizeCard" src="${cardsData5[i].image}" class="card-img-top" alt="...">
<div class="card-body ps-2 pb-0 d-flex">

<img class="logoAppSizeCard" src="${cardsData5[i].logoApp}" class="" alt="...">

<div class="ms-5">
<h6 class="card-title mb-0">${cardsData5[i].title}</h6>
<p class="mb-0">${cardsData5[i].p}</p>
<p class=" text-muted">${cardsData5[i].rating}</p>

</div> `;
        cardContainer5.appendChild(card);
    }

    // Show or hide the Prev button based on currentIndex5
    prevButton5.style.display = currentIndex5 > 0 ? 'flex' : 'none';
    nextButton5.style.display = currentIndex5 + 3 < cardsData5.length ? 'flex' : 'none';
}

function moveRight5() {
    if (currentIndex5 + 3 < cardsData5.length) {
        currentIndex5++;
        displayCards5();
    }
}

function moveLeft5() {
    if (currentIndex5 > 0) {
        currentIndex5--;
        displayCards5();
    }
}

// Initial display
displayCards5();
