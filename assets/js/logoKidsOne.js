const videoCardData2 = [
    { image: './assets/Images/apppp10.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp3.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp6.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp9.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp11.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp6.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp11.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/apppp3.webp', title: 'Block blast!', rating: "4.5★" },
    ]
    let currentCardIndex2 = 0;
    const previousButton2 = document.getElementById('previousButton-2');
    const nextVideoButton2 = document.getElementById('nextVideoButton-2');
    const videoCardContainer2 = document.getElementById('videoCardContainer-2');
    
    function displayVideoCards2() {
        videoCardContainer2.innerHTML = '';
        for (let i = currentCardIndex2; i < currentCardIndex2 + 8 && i < videoCardData2.length; i++) {
            const item = videoCardData2[i];
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
            videoCardContainer2.appendChild(col);
        }
        previousButton2.style.display = currentCardIndex2 > 0 ? 'flex' : 'none';
        nextVideoButton2.style.display = currentCardIndex2 + 8 < videoCardData2.length ? 'flex' : 'none';
    }
    
    function navigateRight2() {
        if (currentCardIndex2 + 8 < videoCardData2.length) {
            currentCardIndex2++;
            displayVideoCards2();
        }
    }
    
    function navigateLeft2() {
        if (currentCardIndex2 > 0) {
            currentCardIndex2--;
            displayVideoCards2();
        }
    }
    
    displayVideoCards2();