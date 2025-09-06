// File: search-logic.js (FIXED)
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearchBtn = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results');

    if (!searchIcon || !searchOverlay) return;

    const openSearch = () => {
        searchOverlay.classList.add('active'); // Menggunakan .active
        searchInput.focus(); // Otomatis fokus ke kolom input
    };

    const closeSearch = () => {
        searchInput.value = '';
        searchResultsContainer.innerHTML = '';
        searchOverlay.classList.remove('active'); // Menggunakan .active
    };

    const displayResults = (results) => {
        searchResultsContainer.innerHTML = '';
        if (results.length === 0 && searchInput.value.length > 1) {
            searchResultsContainer.innerHTML = '<div class="no-results">Tidak ada produk ditemukan.</div>';
            return;
        }

        const productResults = results.filter(r => r.type === 'product');
        const variantResults = results.filter(r => r.type === 'variant');
        let html = '';
        const pathPrefix = window.location.pathname.includes('/produk/') ? '../' : '';

        if (productResults.length > 0) {
            html += `<h4>PRODUK (${productResults.length})</h4>`;
            productResults.forEach(item => {
                html += `
                    <a href="${pathPrefix}produk/${item.product.id}" class="search-result-item">
                        <img src="${pathPrefix}${item.product.icon}" alt="${item.product.name}">
                        <div class="result-info">
                            <span class="name">${item.product.name} | ${item.product.tag}</span>
                            <span class="subtext">Ada ${item.product.variants.length} varian pada produk ini</span>
                        </div>
                        <i class="fas fa-arrow-right arrow"></i>
                    </a>
                `;
            });
        }
        
        if (variantResults.length > 0) {
            html += `<h4>VARIANT (${variantResults.length})</h4>`;
            variantResults.forEach(item => {
                html += `
                    <a href="${pathPrefix}produk/${item.product.id}" class="search-result-item">
                        <img src="${pathPrefix}${item.product.icon}" alt="${item.variant.name}">
                        <div class="result-info">
                            <span class="name">${item.product.name} | ${item.variant.name}</span>
                            <span class="subtext">Harga: Rp. ${item.variant.price.toLocaleString('id-ID')}</span>
                        </div>
                        <i class="fas fa-arrow-right arrow"></i>
                    </a>
                `;
            });
        }
        searchResultsContainer.innerHTML = html;
    };

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResultsContainer.innerHTML = '';
            return;
        }
        let results = [];
        allProducts.forEach(product => {
            if (product.name.toLowerCase().includes(query)) {
                results.push({ type: 'product', product: product });
            }
            product.variants.forEach(variant => {
                if (variant.name.toLowerCase().includes(query)) {
                    results.push({ type: 'variant', product: product, variant: variant });
                }
            });
        });
        results = results.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.product.id === value.product.id && (t.variant ? t.variant.name : '') === (value.variant ? value.variant.name : '')
            ))
        );
        displayResults(results);
    };

    searchIcon.addEventListener('click', openSearch);
    closeSearchBtn.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearch();
    });
    searchInput.addEventListener('input', performSearch);
});