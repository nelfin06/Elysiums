document.addEventListener('DOMContentLoaded', () => {
    // --- BAGIAN 1: MENAMPILKAN PRODUK BEST SELLER ---

    // Data Best Seller didefinisikan langsung di sini (manual)
    const bestSellerProducts = [
        { id: 'chatgpt', name: 'AI ChatGPT', category: 'produktivitas', image: 'images/chatgpt.png', status: 'Proses Manual', statusType: 't' },
        { id: 'canva', name: 'Canva', category: 'desain', image: 'images/canva.png', status: 'Proses Manual', statusType: 't' },
        { id: 'spotify', name: 'Spotify', category: 'musik-video', image: 'images/spotify.png', status: 'Beli Sekarang', statusType: 't' },
        { id: 'netflix', name: 'Netflix', category: 'musik-video', image: 'images/netflix.png', status: 'Beli Sekarang', statusType: 't' },
    ];
    
    const productGrid = document.getElementById('product-grid');

    // Tampilkan hanya produk best seller ke dalam grid
    if (productGrid && bestSellerProducts.length > 0) {
        productGrid.innerHTML = ''; // Pastikan grid kosong sebelum diisi
        bestSellerProducts.forEach(product => {
            const card = document.createElement('a');
            card.href = `app-premium/produk/${product.id}`; 
            card.className = 'product-card-grid';
            card.innerHTML = `
                <div class="product-icon-container">
                    <img src="${product.image}" alt="${product.name}" class="product-icon">
                    <div class="product-status ${product.statusType}">${product.status}</div>
                </div>
                <div class="info">
                    <span class="category">${product.category.replace('-', ' & ')}</span>
                    <h3 class="name">${product.name}</h3>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // --- BAGIAN 2: LOGIKA ANIMASI TEKS MENGETIK ---
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const textArray = ["Aplikasi Premium.", "Suntik Sosmed.", "Topup Game.", "Kebutuhan Digital."];
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typingTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                charIndex = 0;
                setTimeout(type, 500);
            }
        }
        setTimeout(type, 500);
    }
});