document.addEventListener('DOMContentLoaded', () => {
    // Data produk untuk halaman utama
    const products = [
        { id: 'chatgpt', name: 'AI ChatGPT', category: 'produktivitas', image: '../../images/chatgpt.png', status: 'Stok Habis', statusType: 'sold-out' },
        
        { id: 'spotify', name: 'Spotify', category: 'musik-video', image: '../../images/spotify.png', status: 'Stok Habis', statusType: 'sold-out' },
        
        { id: 'canva', name: 'Canva', category: 'desain', image: '../../images/canva.png', status: 'Proses Manual', statusType: 'manual' },
        
        { id: 'capcut', name: 'CapCut', category: 'desain', image: '../../images/capcut.png', status: 'Beli Sekarang', statusType: 'buy' },
        
        { id: 'alight-motion', name: 'Alight Motion', category: 'desain', image: '../../images/alightmotion.png', status: 'Beli Sekarang', statusType: 'buy' },
        
        { id: 'youtube', name: 'YouTube', category: 'musik-video', image: '../../images/youtube.png', status: 'Proses Manual', statusType: 'manual' },
        
        { id: 'netflix', name: 'Netflix', category: 'musik-video', image: '../../images/netflix.png', status: 'Beli Sekarang', statusType: 'buy' },
        
       { id: 'youku', name: 'YouKu', category: 'musik-video', image: '../../images/youku.png', status: 'Stok Habis', statusType: 'sold-out' },
       
      { id: 'vision-plus', name: 'Vision+', category: 'musik-video', image: '../../images/vision-plus.png', status: 'Stok Habis', statusType: 'sold-out' },
        
        { id: 'viu', name: 'Viu', category: 'musik-video', image: '../../images/viu.png', status: 'Beli Sekarang', statusType: 'buy' },
        
        { id: 'prime-video', name: 'Prime Video', category: 'musik-video', image: '../../images/prime.png', status: 'Beli Sekarang', statusType: 'buy' },
        
        { id: 'apple-music', name: 'Apple Music', category: 'musik-video', image: '../../images/apple-music.png', status: 'Stok Habis', statusType: 'sold-out' },
        
        { id: 'disney-plus', name: 'Disney+', category: 'musik-video', image: '../../images/disney-plus.png', status: 'Beli Sekarang', statusType: 'buy' },
        
        { id: 'expressvpn', name: 'VPN Express', category: 'produktivitas', image: '../../images/expressvpn.png', status: 'Belu Sekarang', statusType: 'buy' },
        
    { id: 'surfsharkvpn', name: 'VPN Surfshark', category: 'produktivitas', image: '../../images/surfsharkvpn.png', status: 'Proses Manual', statusType: 'manual' },
    
    { id: 'hmavpn', name: 'VPN HMA', category: 'produktivitas', image: '../../images/hmavpn.png', status: 'Stok Habis', statusType: 'sold-out' },
    
    { id: 'duolingo', name: 'Duolingo', category: 'produktivitas', image: '../../images/duolingo.png', status: 'Stok Habis', statusType: 'sold-out' },
    
    { id: 'zoom', name: 'Zoom', category: 'produktivitas', image: '../../images/zoom.png', status: 'Beli Sekarang', statusType: 'buy' },
    
   { id: 'gemini', name: 'AI Gemini', category: 'produktivitas', image: '../../images/gemini.png', status: 'Beli Sekarang', statusType: 'buy' },
   
    { id: 'perplexity', name: 'AI Perplexity', category: 'produktivitas', image: '../../images/perplexity.png', status: 'Stok Habis', statusType: 'sold-out' },
    
    { id: 'wetv', name: 'WETV', category: 'musik-video', image: '../../images/wetv.png', status: 'Stok Habis', statusType: 'sold-out' },
    
    { id: 'loklok', name: 'LokLok', category: 'musik-video', image: '../../images/loklok.png', status: 'Beli Sekarang', statusType: 'buy' },
    
    { id: 'iqiyi', name: 'IQIYI', category: 'musik-video', image: '../../images/iqiyi.png', status: 'Stok Habis', statusType: 'sold-out' },
    
    { id: 'bstation', name: 'Bstation', category: 'musik-video', image: '../../images/bstation.png', status: 'Stok Habis', statusType: 'sold-out' },
    
    { id: 'vidio-platinum', name: 'Vidio Platinum', category: 'musik-video', image: '../../images/vidio-platinum.png', status: 'Stok Habis', statusType: 'sold-out' },
];

    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn[data-category]');

    const displayProducts = (filter) => {
        productGrid.innerHTML = ''; 
        const filteredProducts = products.filter(p => filter === 'semua' || p.category === filter);
        filteredProducts.forEach(product => {
            const card = document.createElement('a');
            card.href = `produk/${product.id}.html`; 
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
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProducts(button.dataset.category);
        });
    });

    displayProducts('semua');

    // --- LOGIKA BARU YANG DIGABUNGKAN ---
    
    // Logika untuk Animasi Teks Mengetik
    const typingTextElement = document.getElementById('typing-text');
    const textArray = ["Aplikasi Premium.", "Layanan Streaming.", "Kebutuhan Desain.", "Tools Produktivitas."];
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
            setTimeout(type, 500);
        }
    }
    
    // Pastikan elemen ada sebelum menjalankan animasi
    if (typingTextElement) {
        setTimeout(type, 500);
    }
    
    // Logika untuk Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Logika untuk tombol Scroll ke Atas
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    };
});