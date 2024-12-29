const videoCardData3 = [
    { image: './assets/Images/apppp1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp2.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp4.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp8.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp10.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp11.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp5.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp7.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp3.webp', title: 'Block blast!', rating: "4.5★" },
    ]
    let currentCardIndex3 = 0;
    const previousButton3 = document.getElementById('previousButton-3');
    const nextVideoButton3 = document.getElementById('nextVideoButton-3');
    const videoCardContainer3 = document.getElementById('videoCardContainer-3');
    
    function displayVideoCards3() {
        videoCardContainer3.innerHTML = '';
        for (let i = currentCardIndex3; i < currentCardIndex3 + 8 && i < videoCardData3.length; i++) {
            const item = videoCardData3[i];
            const col = document.createElement('div');
            col.classList.add('col-lg-1.5');
            col.innerHTML = `
                <div class='card cardVideoApp'>
                    <img class=" rounded-5 imgBoxShadow imgSizeLogoAppOne" src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body mt-2 p-0 ms-2">
                        
                            <h6 class="card-title mb-0">${item.title}</h6>
                            <p class="mb-0">${item.rating}</p>
                        
                    </div>
                </div>`;
            videoCardContainer3.appendChild(col);
        }
        previousButton3.style.display = currentCardIndex3 > 0 ? 'flex' : 'none';
        nextVideoButton3.style.display = currentCardIndex3 + 8 < videoCardData3.length ? 'flex' : 'none';
    }
    
    function navigateRight3() {
        if (currentCardIndex3 + 8 < videoCardData3.length) {
            currentCardIndex3++;
            displayVideoCards3();
        }
    }
    
    function navigateLeft3() {
        if (currentCardIndex3 > 0) {
            currentCardIndex3--;
            displayVideoCards3();
        }
    }
    
    displayVideoCards3();