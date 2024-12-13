document.getElementById('search-bar').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    // List of predefined pages
    let pages = [
        { name: 'Cats', url: 'cats.html' },
        { name: 'Dogs', url: 'dogs.html' },
        { name: 'Birds', url: 'birds.html' },
        { name: 'Fish', url: 'fish.html' },
        { name: 'Reptiles', url: 'reptiles.html' }
    ];

    if (query) {
        let filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));

        filteredPages.forEach(function(page) {
            let resultDiv = document.createElement('div');
            resultDiv.className = 'search-result';

            let resultLink = document.createElement('a');
            resultLink.href = page.url;
            resultLink.textContent = page.name;
            resultLink.target = '_blank'; // Opens the link in a new tab

            resultDiv.appendChild(resultLink);
            resultsContainer.appendChild(resultDiv);
        });
    }
});
