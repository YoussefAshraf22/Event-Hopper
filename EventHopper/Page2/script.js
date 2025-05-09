document.getElementById('searchBar').addEventListener('input', filterEvents);
document.getElementById('categoryFilter').addEventListener('change', filterEvents);
document.getElementById('searchButton').addEventListener('click', filterEvents);

function filterEvents() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const cards = document.querySelectorAll('.event-card');

    cards.forEach(card => {
        const title = card.querySelector('.event-title').innerText.toLowerCase();
        const location = card.querySelectorAll('.event-info')[1].innerText.toLowerCase();
        const cardCategory = card.getAttribute('data-category');

        const matchesSearch = title.includes(searchTerm) || location.includes(searchTerm);
        const matchesCategory = category === '' || cardCategory === category;

        card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });
}