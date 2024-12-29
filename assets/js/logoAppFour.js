const videoCardData4 = [
    { image: './assets/Images/app1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app5.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp2.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp3.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app4.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp5.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app6.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app2.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp3.webp', title: 'Block blast!', rating: "4.5★" },
    ]
    let currentCardIndex4 = 0;
    const previousButton4 = document.getElementById('previousButton-4');
    const nextVideoButton4 = document.getElementById('nextVideoButton-4');
    const videoCardContainer4 = document.getElementById('videoCardContainer-4');
    
    function displayVideoCards4() {
        videoCardContainer4.innerHTML = '';
        for (let i = currentCardIndex4; i < currentCardIndex4 + 8 && i < videoCardData4.length; i++) {
            const item = videoCardData4[i];
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
            videoCardContainer4.appendChild(col);
        }
        previousButton4.style.display = currentCardIndex4 > 0 ? 'flex' : 'none';
        nextVideoButton4.style.display = currentCardIndex4 + 8 < videoCardData4.length ? 'flex' : 'none';
    }
    
    function navigateRight4() {
        if (currentCardIndex4 + 8 < videoCardData4.length) {
            currentCardIndex4++;
            displayVideoCards4();
        }
    }
    
    function navigateLeft4() {
        if (currentCardIndex4 > 0) {
            currentCardIndex4--;
            displayVideoCards4();
        }
    }
    
    displayVideoCards4();