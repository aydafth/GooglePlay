
const cardsDetails = [
    { number: 1, name: "Telegram", genre: "Racing", rating: 4.2, logoApp: "./assets/Images/telegram1.webp" },
    { number: 2, name: "SnapChat", genre: "Sports", rating: 4.7, logoApp: "./assets/Images/snpchat.webp" },
    { number: 3, name: "WhatsApp", genre: "Puzzle", rating: 4.6, logoApp: "./assets/Images/watt.webp"},
    { number: 4, name: "Instagram", genre: "Action", rating: 4.5, logoApp:"./assets/Images/insta.webp" },
    { number: 5, name: "Telegram", genre: "Puzzle", rating: 4.3, logoApp: "./assets/Images/telegram1.webp" },
    { number: 6, name: "Instagram", genre: "Racing", rating: 4.6, logoApp: "./assets/Images/insta.webp" },
    { number: 7, name: "Instagram", genre: "Puzzle", rating: 4.3, logoApp: "./assets/Images/insta.webp" },
    { number: 8, name: "SnapChat", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/snpchat.webp" },
    { number: 9, name: "Telegram", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/telegram1.webp" },
    { number: 10, name: "Instagram", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/insta.webp" },
    { number: 11, name: "Telegram", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/telegram1.webp" },
    { number: 12, name: "SnapChat", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/snpchat.webp" },
    { number: 13, name: "Telegram", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/telegram1.webp" },
    { number: 14, name: "WhatsApp", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/watt.webp" },
    { number: 15, name: "Instagram", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/insta.webp" },
    { number: 16, name: "WhatsApp", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/watt.webp" },
];

let startIndex = 0;
const cardSection = document.getElementById('card-section');
const prevButtoon = document.getElementById('prev-button');
const nextButtoon = document.getElementById('next-button');

function displayCards1() {
    cardSection.innerHTML = '';
    const rows = 3;
    const columns = 3;
    for (let col = 0; col < columns; col++) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4';
        for (let row = 0; row < rows; row++) {
            const cardIndex = startIndex + col * rows + row;
            if (cardIndex >= cardsDetails.length) break;
            const card = document.createElement('div');
            card.className = 'card-item ';
            card.innerHTML = `
                
                    <div class="card-body ps-2 d-flex align-content-center" onclick="openCardDetails(${cardIndex})">
                        <p class="align-content-center ">${cardsDetails[cardIndex].number}</p>
                        <img class="logoAppSizeCard ms-3 imgBoxShadow" src="${cardsDetails[cardIndex].logoApp}" alt="...">
                        <div class="ms-3">
                            <h6 class="card-title mb-0">${cardsDetails[cardIndex].name}</h6>
                            <p class="mb-0">${cardsDetails[cardIndex].genre}</p>
                            <p class="text-muted">${cardsDetails[cardIndex].rating}</p>
                        </div>
                    
                </div>`;
            colDiv.appendChild(card);
        }
        cardSection.appendChild(colDiv);
    }

    // Show or hide the Prev button based on startIndex
    prevButtoon.style.display = startIndex > 0 ? 'flex' : 'none';
    nextButtoon.style.display = startIndex + rows * columns < cardsDetails.length ? 'flex' : 'none';
}

function moveRight1() {
    if (startIndex + 9 < cardsDetails.length) {
        startIndex += 9;
        displayCards1();
    }
}

function moveLeft1() {
    if (startIndex > 0) {
        startIndex -= 9;
        displayCards1();
    }
}
function openCardDetails(index) { const card = cardsDetails[index]; window.open
    (
    `./cardDetails.html?name=${card.name}&genre=${card.genre}&rating=${card.rating}&logoApp=${card.logoApp}`, '_blank'); }

// Initial display
displayCards1();