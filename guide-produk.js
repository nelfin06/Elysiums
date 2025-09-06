document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-select');
    const guideContent = document.getElementById('guide-content');

    // Isi dropdown dengan data dari SEMUA_GUIDES
    Object.keys(SEMUA_GUIDES).forEach(productId => {
        const productInfo = SEMUA_GUIDES[productId];
        const option = document.createElement('option');
        option.value = productId;
        option.textContent = productInfo.name;
        productSelect.appendChild(option);
    });

    // Tambahkan event listener saat produk dipilih
    productSelect.addEventListener('change', () => {
        const selectedId = productSelect.value;
        if (!selectedId) {
            guideContent.innerHTML = '<p class="placeholder">Konten akan ditampilkan di sini setelah memilih produk.</p>';
            return;
        }

        const selectedProduct = SEMUA_GUIDES[selectedId];
        let contentHTML = '';

        // Looping melalui setiap objek/kartu di dalam 'guide'
        selectedProduct.guide.forEach(section => {
            contentHTML += `
                <div class="guide-card">
                    <h3><i class="${section.icon}"></i> ${section.judul}</h3>
                    <ul class="guide-list">
                        ${section.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            `;
        });

        guideContent.innerHTML = contentHTML;
    });
});