document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // ⚠️ Data spesifik untuk produk Bstation
    const productData = {
        id: 'bstation',
        name: 'Bstation',
        icon: '../../images/bstation.png', // Pastikan gambar bstation.png ada di folder /images
        tag: 'Musik & Video',
        description: 'Bstation (Bilibili) adalah platform video terkemuka untuk para penggemar anime. Nikmati streaming ribuan judul anime terbaru dan klasik, video kreatif, dan konten eksklusif lainnya dengan kualitas terbaik.',
        features: [
            "Nonton semua anime tanpa iklan",
            "Akses ke konten premium eksklusif",
            "Kualitas video hingga 1080p dan 4K",
            "Download anime untuk ditonton offline",
            "Dukung kreator favorit Anda"
        ],
        compatibility: [ "Android", "iOS", "Website", "Smart TV" ],
        terms: "Akun bersifat sharing atau private sesuai varian. Dilarang mengubah detail akun untuk varian sharing.",
        variants: [
            { name: 'Sharing - 1 Bulan', price: 6000, oldPrice: 25000, discount: 76 },
            { name: 'Private - 1 Bulan', price: 23000, oldPrice: 45000, discount: 49 },
        ]
    };

    const yourWhatsAppNumber = '6285138577815'; // ⚠️ GANTI DENGAN NOMOR WA ANDA

    // --- KODE LOGIKA OTOMATIS (JANGAN DIUBAH) ---
    // (Kode di bawah ini sama persis dengan template Anda)
    document.title = productData.name + ' | Elysium Store';
    const headerContainer = document.getElementById('product-header');
    headerContainer.innerHTML = `<div class="product-icon-wrapper"><div class="product-icon-bg"><img src="${productData.icon}" alt="${productData.name}" class="product-icon-detail"></div></div><div class="product-title-section"><div class="tags-container"><span class="tag">${productData.tag}</span></div><h1>${productData.name}</h1></div>`;
    document.getElementById('product-description').innerHTML = `<p>${productData.description}</p>`;
    const collapsibleContent = document.getElementById('collapsible-content');
    let extraContentHTML = '';
    if (productData.features && productData.features.length > 0) {
        extraContentHTML += '<h3>💡 Fitur ' + productData.name + '</h3><ul class="feature-list">';
        productData.features.forEach(feature => { extraContentHTML += `<li><span class="check">✓</span>${feature}</li>`; }); extraContentHTML += '</ul>';
    }
    if (productData.compatibility && productData.compatibility.length > 0) {
        extraContentHTML += '<h3>📱 Kompatibel untuk:</h3><ul class="feature-list">';
        productData.compatibility.forEach(item => { extraContentHTML += `<li><span class="check">✓</span>${item}</li>`; }); extraContentHTML += '</ul>';
    }
    if (productData.terms) { extraContentHTML += `<h3>📜 Syarat & Ketentuan:</h3><p class="terms-text">${productData.terms}</p>`; }
    collapsibleContent.innerHTML = extraContentHTML;
    const toggleButton = document.getElementById('read-more-toggle');
    toggleButton.addEventListener('click', () => {
        collapsibleContent.classList.toggle('expanded');
        toggleButton.textContent = collapsibleContent.classList.contains('expanded') ? 'Sembunyikan' : 'Lihat selengkapnya...';
    });
    const orderModal = document.getElementById('order-modal');
    const overlay = document.getElementById('order-modal-overlay');
    const openModal = (variant) => {
        orderModal.innerHTML = `<div class="summary-header"><span class="title">${productData.name} - ${variant.name}</span><span class="close-summary">&times;</span></div><div class="info-row">Private, S&K: Minta Admin</div><div class="info-row" style="color:#22c55e;">Dikirim langsung setelah pembayaran</div><div class="subtotal-row"><span>Subtotal</span><span class="price">Rp. ${variant.price.toLocaleString('id-ID')}</span></div><button class="buy-button">Beli Sekarang</button>`;
        document.body.classList.add('modal-open');
        orderModal.querySelector('.buy-button').onclick = () => {
            const message = `Halo, saya mau pesan:\n\nProduk: *${productData.name}*\nVarian: *${variant.name}*\nHarga: *Rp. ${variant.price.toLocaleString('id-ID')}*\n\nApakah masih tersedia?`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://api.whatsapp.com/send?phone=${yourWhatsAppNumber}&text=${encodedMessage}`, '_blank');
        };
        orderModal.querySelector('.close-summary').onclick = closeModal;
    };
    const closeModal = () => {
        document.body.classList.remove('modal-open');
        const selected = document.querySelector('.variant-item.selected');
        if (selected) { selected.classList.remove('selected'); }
    };
    overlay.addEventListener('click', closeModal);
    const variantsList = document.getElementById('variants-list');
    productData.variants.forEach((variant, index) => {
        const item = document.createElement('div');
        item.className = 'variant-item';
        item.dataset.index = index;
        item.innerHTML = `<div class="variant-top"><span class="variant-name">${variant.name}</span><div class="selector"></div></div><hr class="variant-divider"><div class="variant-bottom"><div class="variant-stock"><i class="fa-solid fa-wand-sparkles"></i> TERSEDIA</div><div class="variant-pricing"><span class="current-price">Rp. ${variant.price.toLocaleString('id-ID')}</span><div class="old-price-container"><span class="old-price">Rp. ${variant.oldPrice.toLocaleString('id-ID')}</span><span class="discount">${variant.discount}%</span></div></div></div>`;
        variantsList.appendChild(item);
    });
    variantsList.addEventListener('click', (e) => {
        const selectedItem = e.target.closest('.variant-item');
        if (!selectedItem) return;
        document.querySelectorAll('.variant-item').forEach(item => item.classList.remove('selected'));
        selectedItem.classList.add('selected');
        openModal(productData.variants[selectedItem.dataset.index]);
    });
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    };
});