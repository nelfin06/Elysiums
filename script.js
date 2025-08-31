document.addEventListener('DOMContentLoaded', () => {
    // Data produk didefinisikan di sini untuk halaman utama
    const products = [
      
        { id: 'spotify', name: 'Spotify', category: 'musik-video', image: 'images/spotify.png', status: 'Beli Sekarang', statusType: 'buy' },
        
        { id: 'capcut', name: 'CapCut', category: 'desain', image: 'images/capcut.png', status: 'Beli Sekarang', statusType: 'buy' },
              
        { id: 'netflix', name: 'Netflix', category: 'musik-video', image: 'images/netflix.png', status: 'Proses Manual', statusType: 'manual' },
        
        { id: 'alight-motion', name: 'Alight Motion', category: 'desain', image: 'images/alightmotion.png', status: 'Beli Sekarang', statusType: 'buy' },
          
        { id: 'chatgpt', name: 'ChatGPT', category: 'produktivitas', image: 'images/chatgpt.png', status: 'Proses Manual', statusType: 'manual' },
        
        { id: 'canva', name: 'Canva', category: 'desain', image: 'images/canva.png', status: 'Proses Manual', statusType: 'manual' },
        
        { id: 'youtube', name: 'YouTube', category: 'musik-video', image: 'images/youtube.png', status: 'Proses Manual', statusType: 'manual' },
        
        { id: 'viu', name: 'Viu', category: 'musik-video', image: 'images/viu.png', status: 'Beli Sekarang', statusType: 'buy' },
        
      { id: 'prime-video', name: 'Prime Video', category: 'musik-video', image: 'images/prime.png', status: 'Beli Sekarang', statusType: 'buy' },
      
        
    ];

    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

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

    const scrollToTopBtn = document.getElementById("scroll-to-top");
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    };
});
