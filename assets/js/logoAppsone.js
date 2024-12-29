const videoCardData1 = [
    { image: './assets/Images/appp10.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp3.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app6.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp9.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp11.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp6.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app1.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/appp11.webp', title: 'Block blast!', rating: "4.5★" },
        { image: './assets/Images/app3.webp', title: 'Block blast!', rating: "4.5★" },
    ]
    let currentCardIndex1 = 0;
    const previousButton1 = document.getElementById('previousButton-1');
    const nextVideoButton1 = document.getElementById('nextVideoButton-1');
    const videoCardContainer1 = document.getElementById('videoCardContainer-1');
    
    function displayVideoCards1() {
        videoCardContainer1.innerHTML = '';
        for (let i = currentCardIndex1; i < currentCardIndex1 + 8 && i < videoCardData1.length; i++) {
            const item = videoCardData1[i];
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
            videoCardContainer1.appendChild(col);
        }
        previousButton1.style.display = currentCardIndex1 > 0 ? 'flex' : 'none';
        nextVideoButton1.style.display = currentCardIndex1 + 8 < videoCardData1.length ? 'flex' : 'none';
    }
    
    function navigateRight1() {
        if (currentCardIndex1 + 8 < videoCardData1.length) {
            currentCardIndex1++;
            displayVideoCards1();
        }
    }
    
    function navigateLeft1() {
        if (currentCardIndex1 > 0) {
            currentCardIndex1--;
            displayVideoCards1();
        }
    }
    
    displayVideoCards1();