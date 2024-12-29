const cardsDetails = [
    { number: 7, name: "Car Race", genre: "Racing", rating: 4.2, logoApp: "./assets/Images/logo1.webp" },
    { number: 8, name: "8 Ball Pool", genre: "Sports", rating: 4.7, logoApp: "./assets/Images/logo2.webp" },
    { number: 9, name: "Bubble Shooter", genre: "Puzzle", rating: 4.6, logoApp: "./assets/Images/logo3.webp"},
    { number: 10, name: "War Zone: Fight For Homeland", genre: "Action", rating: 4.5, logoApp:"./assets/Images/logo4.webp" },
    { number: 11, name: "Tap Away", genre: "Puzzle", rating: 4.3, logoApp: "./assets/Images/unnamedvideoicon.webp" },
    { number: 12, name: "Highway Car Crash Simulator", genre: "Racing", rating: 4.6, logoApp: "./assets/Images/logo1.webp" },
    { number: 13, name: "Nut Sort", genre: "Puzzle", rating: 4.3, logoApp: "./assets/Images/logo2.webp" },
    { number: 14, name: "Stickman Party 234 MiniGames", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/logo1.webp" },
    { number: 15, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/logo1.webp" },
    { number: 16, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/logo4.webp" },
    { number: 17, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/unnamedvideoicon.webp" },
    { number: 18, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/logo1.webp" },
    { number: 19, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/logo4.webp" },
    { number: 20, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/logo3.webp" },
    { number: 21, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/unnamedvideoicon.webp" },
    { number: 22, name: "Vector", genre: "Arcade", rating: 4.6, logoApp: "./assets/Images/logo2.webp" },
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
                
                    <div class="card-body ps-2 d-flex align-content-center">
                        <p class="align-content-center ">${cardsDetails[cardIndex].number}</p>
                        <img class="logoAppSizeCard ms-3" src="${cardsDetails[cardIndex].logoApp}" alt="...">
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


// Initial display
displayCards1();