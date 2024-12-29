
        const cardsData3 = [
            {
                image: "./assets/Images/cat2.webp", title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/CatIcon.webp",
                rating: "4.5★",
            },
            {
                image: "./assets/Images/againeCat.webp", title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/againecatIcon.webp",
                rating: "4.5★",
            },
            {
                image: "./assets/Images/cat.webp", title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/CatIcon.webp",
                rating: "4.5★",
            },
            {
                image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/unnamedvideoicon.webp",
                rating: "4.5★",
            },
            {
                image: "./assets/Images/mini.webp", title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/miniIcon.webp",
                rating: "4.5★",
            },
            {
                image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/unnamedvideoicon.webp",
                rating: "4.5★",
            },
            {
                image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/unnamedvideoicon.webp",
                rating: "4.5★",
            },
            {
                image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/unnamedvideoicon.webp",
                rating: "4.5★",
            },
            {
                image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/unnamedvideoicon.webp",
                rating: "4.5★",
            },
            {
                image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake',
                icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3',
                logoApp: "./assets/Images/unnamedvideoicon.webp",
                rating: "4.5★",
            },

        ]
        let currentIndex3 = 0;
        const cardContainer3 = document.getElementById('card-container-3');
        const prevButton3 = document.getElementById('prev-button-3');
        const nextButton3 = document.getElementById('next-button-3');
        function displayCards3() {
            cardContainer3.innerHTML = '';

            for (let i = currentIndex3; i < currentIndex3 + 3 && i < cardsData3.length; i++) {
                const card = document.createElement('div');
                card.className = 'col-lg-4';
                card.innerHTML = `
        <div class= 'card'>
            <img class="p-2 rounded-4 imgSizeCard" src="${cardsData3[i].image}" class="card-img-top" alt="...">
  <div class="card-body ps-2 pb-0 d-flex">

     <img class="logoAppSizeCard" src="${cardsData3[i].logoApp}" class="" alt="...">

    <div class="ms-3">
    <h6 class="card-title mb-0">${cardsData3[i].title}</h6>
    <p class="mb-0">${cardsData3[i].p}</p>
    <p class=" text-muted">${cardsData3[i].rating}</p>
   
       </div> `;
                cardContainer3.appendChild(card);
            }

            // Show or hide the Prev button based on currentIndex3
            prevButton3.style.display = currentIndex3 > 0 ? 'flex' : 'none';
            nextButton3.style.display = currentIndex3 + 3 < cardsData3.length ? 'flex' : 'none';
        }

        function moveRight3() {
            if (currentIndex3 + 3 < cardsData3.length) {
                currentIndex3++;
                displayCards3();
            }
        }

        function moveLeft3() {
            if (currentIndex3 > 0) {
                currentIndex3--;
                displayCards3();
            }
        }

        // Initial display
        displayCards3();

