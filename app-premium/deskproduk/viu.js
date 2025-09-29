document.addEventListener('DOMContentLoaded', () => {
  // Salin semua kode ini
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
    // ⚠️ Data spesifik untuk produk Viu
    const productData = {
        id: 'viu',
        name: 'Viu',
        icon: '../../images/viu.png',
        tag: 'Musik & Video',
        description: 'Viu adalah layanan streaming video yang menyajikan drama, variety show, film, dan acara TV Asia terbaik. Nikmati tontonan favoritmu dengan subtitle Indonesia, bebas iklan, dan bisa diunduh untuk ditonton offline.',
        features: [
            "Nonton drama Korea terbaru",
            "Akses konten Viu Originals eksklusif",
            "Streaming dan download tanpa batas",
            "Bebas dari gangguan iklan",
            "Tersedia subtitle dalam berbagai bahasa"
        ],
        compatibility: [ "Android", "iOS", "Smart TV", "Website" ],
        terms: "Akun private menggunakan email dan password dari penjual. Dilarang mengubah data akun.",
        variants: [
            { name: 'Premium - 1 Tahun', price: 7000, oldPrice: 50000, discount: 86 },
        ]
    };

    const yourWhatsAppNumber = '6285138577815'; // ⚠️ GANTI NOMOR WA ANDA

    // --- KODE LOGIKA OTOMatis (JANGAN DIUBAH) ---
    
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