document.getElementById('searchButton').addEventListener('click', function () {
    const searchButton = document.getElementById('searchButton');
    const searchBox = document.getElementById('searchBox');
    const hideableElements = document.querySelectorAll('.hideable');
    searchButton.style.display = 'none';
    searchBox.style.display = 'block';
    hideableElements.forEach(function (element) {
        element.style.display = 'none';
    });
});
document.addEventListener('click', function (event) {
    const searchBox = document.getElementById('searchBox');
    const searchButton = document.getElementById('searchButton');
    if (!searchBox.contains(event.target) && event.target.id !== 'searchButton') {
        searchBox.style.display = 'none';
        searchButton.style.display = 'block';
        document.querySelectorAll('.hideable').forEach(function (element) {
            element.style.display = 'block';
        });
    }
});
document.getElementById('searchButton').addEventListener('click', function () {
    document.getElementById('searchOverlay').style.width = '100%';
});
function closeSearch() {
    document.getElementById('searchOverlay').style.width = '0%';
}