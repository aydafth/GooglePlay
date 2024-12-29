document.addEventListener('DOMContentLoaded',
    function () {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name'); const genre = urlParams.get('genre');
        const rating = urlParams.get('rating');
        const logoApp = urlParams.get('logoApp');
        document.getElementById('cardImage').src = logoApp;
        document.getElementById('cardTitle').textContent = name;
        document.getElementById('cardGenre').textContent = genre;
        document.getElementById('cardRating').textContent = `Rating: ${rating}`;
    });