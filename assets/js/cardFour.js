
const cardsData4 = [
    {
        image: "./assets/Images/cat2.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/CatIcon.webp",
        rating: "4.5★",
    },
    {
        image: "./assets/Images/againeCat.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/againecatIcon.webp",
        rating: "4.5★",
    },
    {
        image: "./assets/Images/cat.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/CatIcon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: "./assets/Images/mini.webp", title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/miniIcon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },
    {
        image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
        icon: './assets/Icons/star_24dp_444444_FILL0_wght400_GRAD0_opsz24.svg', number: '4.4',
        logoApp: "./assets/Images/unnamedvideoicon.webp",
        rating: "4.5★",
    },

]
let currentIndex4 = 0;
const cardContainer4 = document.getElementById('card-container-4');
const prevButton4 = document.getElementById('prev-button-4');
const nextButton4 = document.getElementById('next-button-4');
function displayCards4() {
    cardContainer4.innerHTML = '';

    for (let i = currentIndex4; i < currentIndex4 + 3 && i < cardsData4.length; i++) {
        const card = document.createElement('div');
        card.className = 'col-lg-4';
        card.innerHTML = `
<div class= 'card'>
    <img class="p-2 rounded-4 imgSizeCard" src="${cardsData4[i].image}" class="card-img-top" alt="...">
<div class="card-body ps-2 pb-0 d-flex">

<img class="logoAppSizeCard" src="${cardsData4[i].logoApp}" class="" alt="...">

<div class="ms-4">
<h6 class="card-title mb-0">${cardsData4[i].title}</h6>
<p class="mb-0">${cardsData4[i].p}</p>
<p class=" text-muted">${cardsData4[i].rating}</p>

</div> `;
        cardContainer4.appendChild(card);
    }

    // Show or hide the Prev button based on currentIndex4
    prevButton4.style.display = currentIndex4 > 0 ? 'flex' : 'none';
    nextButton4.style.display = currentIndex4 + 3 < cardsData4.length ? 'flex' : 'none';
}

function moveRight4() {
    if (currentIndex4 + 3 < cardsData4.length) {
        currentIndex4++;
        displayCards4();
    }
}

function moveLeft4() {
    if (currentIndex4 > 0) {
        currentIndex4--;
        displayCards4();
    }
}

// Initial display
displayCards4();
