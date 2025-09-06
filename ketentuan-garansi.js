document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-select');
    const termsContent = document.getElementById('terms-content');

    // Isi dropdown dengan data dari semua-produk.js
    SEMUA_PRODUK.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Tambahkan event listener saat produk dipilih
    productSelect.addEventListener('change', () => {
        const selectedId = productSelect.value;
        if (!selectedId) {
            termsContent.innerHTML = '<p class="placeholder">Konten akan ditampilkan di sini setelah memilih produk.</p>';
            return;
        }

        const selectedProduct = SEMUA_PRODUK.find(p => p.id === selectedId);
        
        // --- LOGIKA BARU UNTUK MENAMPILKAN DATA SPESIFIK ---

        let contentHTML = '';

        // Tampilkan Syarat Ketentuan Produk
        if (selectedProduct.syaratProduk && selectedProduct.syaratProduk.length > 0) {
            contentHTML += `
                <div class="terms-card">
                    <h3><i class="fas fa-file-alt icon"></i> Syarat & Ketentuan Produk</h3>
                    <ul class="terms-list">
                        ${selectedProduct.syaratProduk.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Tampilkan Ketentuan Garansi
        if (selectedProduct.ketentuanGaransi && selectedProduct.ketentuanGaransi.length > 0) {
            contentHTML += `
                <div class="terms-card">
                    <h3><i class="fas fa-shield-halved icon"></i> Ketentuan Garansi</h3>
                    <ul class="terms-list">
                        ${selectedProduct.ketentuanGaransi.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Jika tidak ada data sama sekali
        if (contentHTML === '') {
            contentHTML = '<p class="placeholder">Syarat & Ketentuan untuk produk ini belum tersedia.</p>';
        }

        termsContent.innerHTML = contentHTML;
    });
});