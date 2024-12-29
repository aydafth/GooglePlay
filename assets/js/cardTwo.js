const cardsData2 = [
    { image: "./assets/Images/cat2.webp", title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/CatIcon.webp", rating: "4.5★", }, { image: "./assets/Images/againeCat.webp", title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/againecatIcon.webp", rating: "4.5★", }, { image: "./assets/Images/cat.webp", title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/CatIcon.webp", rating: "4.5★", }, { image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/unnamedvideoicon.webp", rating: "4.5★", }, { image: "./assets/Images/mini.webp", title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/miniIcon.webp", rating: "4.5★", }, { image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/unnamedvideoicon.webp", rating: "4.5★", }, { image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/unnamedvideoicon.webp", rating: "4.5★", }, { image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/unnamedvideoicon.webp", rating: "4.5★", }, { image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/unnamedvideoicon.webp", rating: "4.5★", }, { image: './assets/Images/unnamedvideo.webp', title: 'Block blast!', p: 'Puzzle . Blake', icon: './assets/Icons/star_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg', number: '4.3', logoApp: "./assets/Images/unnamedvideoicon.webp", rating: "4.5★", },]
let currentIndex2 = 0;
const cardContainer2 = document.getElementById('card-section-2');
const prevButton2 = document.getElementById('prev-button-2');
const nextButton2 = document.getElementById('next-button-2');
function displayCards2() {
    cardContainer2.innerHTML = '';
    for (let i = currentIndex2; i < currentIndex2 + 3 && i < cardsData2.length; i++) {
        const card = document.createElement('div');
        card.className = 'col-lg-4';
        card.innerHTML = `
                       <div class= 'card'> 
                       <img class="p-2 rounded-4 imgSizeCard" src="${cardsData2[i].image}" class="card-img-top" alt="..."> 
                       <div class="card-body ps-2 pb-0 d-flex">
                        <img class="logoAppSizeCard" src="${cardsData2[i].logoApp}" class="" alt="...">
                         <div class="ms-3"> <h6 class="card-title mb-0">${cardsData2[i].title}</h6>
                          <p class="mb-0">${cardsData2[i].p}</p> 
                          <p class=" text-muted">${cardsData2[i].rating}</p>
                           </div> `; cardContainer2.appendChild(card);
    }
    // Show or hide the Prev button based on currentIndex2
    prevButton2.style.display = currentIndex2 > 0 ? 'flex' : 'none'; nextButton2.style.display = currentIndex2 + 3 < cardsData2.length ? 'flex' : 'none';
}
function moveRight2() {
    if (currentIndex2 + 3 < cardsData2.length) { currentIndex2++; displayCards2(); }
} function moveLeft2() {
    if (currentIndex2 > 0) {
        currentIndex2--;
        displayCards2();
    }
}
displayCards2();