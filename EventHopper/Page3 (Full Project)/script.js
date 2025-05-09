document.getElementById('searchBar').addEventListener('input', filterEvents);
document.getElementById('categoryFilter').addEventListener('change', filterEvents);
document.getElementById('searchButton').addEventListener('click', filterEvents);

function attachFavoriteListeners() {
    document.querySelectorAll('.highlight-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const card = this.closest('.event-card');
            const favoritesGrid = document.getElementById('favoritesGrid');

            if (!this.classList.contains('clicked')) {
                const clone = card.cloneNode(true);
                const removeBtn = document.createElement('button');
                removeBtn.textContent = '×';
                removeBtn.classList.add('remove-favorite');
                removeBtn.addEventListener('click', function() {
                    favoritesGrid.removeChild(clone);
                    icon.classList.remove('clicked');
                });
                clone.classList.add('favorite-card');
                clone.appendChild(removeBtn);
                clone.querySelector('.highlight-icon').remove();
                favoritesGrid.appendChild(clone);
                this.classList.add('clicked');
            }
        });
    });
}

attachFavoriteListeners();

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