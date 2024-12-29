const videoCardData = [
{ image: './assets/Images/bazi-1.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/bazi-vard-aval.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/bazi-1.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/bazi-vard-aval.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/bazi-1.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/bazi-1.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/bazi-vard-aval.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/axe-bazi.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/bazi-1.webp', title: 'Block blast!', rating: "4.5★" },
    { image: './assets/Images/axe-bazi.webp', title: 'Block blast!', rating: "4.5★" },
]
let currentCardIndex = 0;
const previousButton = document.getElementById('previousButton');
const nextVideoButton = document.getElementById('nextVideoButton');
const videoCardContainer = document.getElementById('videoCardContainer');

function displayVideoCards() {
    videoCardContainer.innerHTML = '';
    for (let i = currentCardIndex; i < currentCardIndex + 8 && i < videoCardData.length; i++) {
        const item = videoCardData[i];
        const col = document.createElement('div');
        col.classList.add('col-lg-1.5');
        col.innerHTML = `
            <div class='card cardVideoApp'>
                <img class="p-2 rounded-5" src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body p-0 ms-2">
                    
                        <h6 class="card-title mb-0">${item.title}</h6>
                        <p class="mb-0">${item.rating}</p>
                    
                </div>
            </div>`;
        videoCardContainer.appendChild(col);
    }
    previousButton.style.display = currentCardIndex > 0 ? 'flex' : 'none';
    nextVideoButton.style.display = currentCardIndex + 8 < videoCardData.length ? 'flex' : 'none';
}

function navigateRight() {
    if (currentCardIndex + 8 < videoCardData.length) {
        currentCardIndex++;
        displayVideoCards();
    }
}

function navigateLeft() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayVideoCards();
    }
}

displayVideoCards();
