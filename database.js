// Ini adalah "database" pusat untuk seluruh toko Anda.
const allProducts = [
    {
        id: 'chatgpt', name: 'ChatGPT', icon: 'images/chatgpt.png', tag: 'Produktivitas', category: 'produktivitas', status: 'Proses Manual', statusType: 'manual',
        description: 'ChatGPT Plus/Team adalah versi premium dari AI populer OpenAI yang cocok buat kamu yang ingin produktif, lebih kreatif, dan akses fitur terbaru tanpa batas.',
        features: ["Akses model terbaru: GPT-4, GPT-4o, & GPT-5", "Mode reasoning o1 & o1-mini tanpa batas", "Bisa upload file & gambar untuk analisis", "Chat lebih cepat & prioritas server"],
        compatibility: [ "Android", "iOS", "Semua Perangkat" ],
        terms: "Akun bersifat shared/private sesuai varian. Dilarang mengubah email atau password. Garansi berlaku jika mengikuti semua syarat dan ketentuan.",
        variants: [
            { name: 'Private Plus - 1 Bulan', price: 70000, oldPrice: 100000, discount: 30 },
            { name: 'Private Plus - 2 Bulan', price: 150000, oldPrice: 300000, discount: 50 },
            { name: 'Sharing Plus - 7 Hari', price: 15000, oldPrice: 30000, discount: 50 },
            { name: 'Sharing Plus - 1 Bulan', price: 35000, oldPrice: 60000, discount: 55 },
           { name: 'Sharing Plus - 2 Bulan', price: 100000, oldPrice: 200000, discount: 50 },
        ]
    },
    
    {
        id: 'canva',
        name: 'Canva Pro',
        icon: '../images/canva.png',
        tag: 'Desain',
        description: 'Canva Pro adalah versi premium dari platform desain populer yang cocok untuk kamu yang ingin membuat desain lebih cepat, kreatif, dan profesional.',
        features: [
            "Akses jutaan foto, video, & elemen premium",
            "Hapus background gambar dengan 1 klik",
            "Resize desain ke berbagai ukuran otomatis (Magic Resize)",
            "Akses ke semua template premium",
            "Folder & Brand Kit untuk kelola aset desain",
            "Tanpa batas penyimpanan cloud Canva"
        ],
        compatibility: [ "Android", "iOS", "Semua Perangkat" ],
        terms: "Akun bersifat private/invite sesuai varian. Proses pengerjaan 1x24 jam. Pastikan email yang diberikan belum pernah terdaftar Canva Pro. ( Variant Invite )",
        variants: [
            { name: 'FamHead - 1 Bulan', price: 10000, oldPrice: 50000, discount: 80 },
            { name: 'FamHead - 2 Bulan', price: 15000, oldPrice: 75000, discount: 80 },
            { name: 'Pro Invite - 1 Bulan', price: 3000, oldPrice: 20000, discount: 85 },
            { name: 'Pro Invite - 1 Tahun', price: 15000, oldPrice: 150000, discount: 90 },
        ]
    },
    
    {
        id: 'capcut',
        name: 'CapCut Pro',
        icon: '../images/capcut.png',
        tag: 'Musik & Video',
        description: 'CapCut Pro adalah versi premium dari aplikasi edit video populer yang cocok untuk kamu yang ingin hasil video lebih profesional. Tanpa watermark, bebas iklan, dan dilengkapi fitur-fitur eksklusif, CapCut Pro sangat ideal untuk konten kreator TikTok, Instagram Reels, YouTube Shorts, dan lainnya.',
        features: [
            "Tanpa watermark",
            "Ekspor resolusi tinggi",
            "Akses ke semua efek & template premium",
            "Tanpa iklan yang mengganggu",
            "Fitur AI canggih (auto caption, background remover, dan lainnya)"
        ],
        compatibility: [ "Android", "iOS", "Semua Perangkat" ],
        terms: "Proses aktivasi dilakukan via website terlebih dahulu oleh pembeli.",
        variants: [
            { name: 'Pro - 7 Hari', price: 5000, oldPrice: 10000, discount: 50 },
            { name: 'Pro - 1 Bulan', price: 6000, oldPrice: 16000, discount: 62 },
            { name: 'Pro - 6 Bulan', price: 120000, oldPrice: 300000, discount: 60 },
        ]
    },
    
    {
        id: 'alight-motion',
        name: 'Alight Motion',
        icon: 'images/alightmotion.png',
        tag: 'Desain',
        description: 'Alight Motion PRO adalah versi premium dari aplikasi editing video & animasi populer yang cocok untuk kamu yang ingin membuat konten lebih kreatif, profesional, dan tanpa batas.',
        features: [
            "Akses semua efek & preset premium",
            "Export video tanpa watermark",
            "Resolusi tinggi & berbagai format export",
            "Multi-layer untuk video, gambar, & audio",
            "Fitur animasi keyframe yang lengkap",
            "Font & aset premium siap pakai"
        ],
        compatibility: [ "Android", "iOS", "Semua Perangkat" ],
        terms: "Aktivasi menggunakan login dari pembeli. Dilarang mengubah data akun.",
        variants: [
            { name: 'Pro - 1 Tahun', price: 10000, oldPrice: 60000, discount: 83 },
        ]
    },
    
    {
        id: 'apple-music',
        name: 'Apple Music',
        icon: '../images/apple-music.png', // Pastikan gambar apple-music.png ada di folder /images
        tag: 'Musik & Video',
        description: 'Apple Music memberikan Anda akses streaming ke lebih dari 100 juta lagu. Nikmati audio spasial, kualitas lossless, lirik real-time, dan dengarkan di semua perangkat Anda, bahkan secara offline.',
        features: [
            "Akses ke lebih dari 100 juta lagu",
            "Kualitas Audio Lossless & Hi-Res Lossless",
            "Audio Spasial dengan Dolby Atmos",
            "Download musik dan dengarkan offline",
            "Tonton video musik bebas iklan",
            "Tersedia di semua perangkat Apple dan lainnya"
        ],
        compatibility: [ "iOS", "Android", "macOS", "Windows", "Smart TV" ],
        terms: "Aktivasi menggunakan invite ke Apple ID pribadi Anda. Proses cepat dan legal.",
        variants: [
            { name: 'FamHead - 1 Bulan', price: 10000, oldPrice: 55000, discount: 82 },
        ]
    },
    
    {
        id: 'disney-plus',
        name: 'Disney+',
        icon: '../images/disney-plus.png', // Pastikan gambar disney-plus.png ada di folder /images
        tag: 'Musik & Video',
        description: 'Disney+ adalah layanan streaming untuk menonton ribuan film dan serial TV dari Disney, Pixar, Marvel, Star Wars, National Geographic, dan Star. Tonton rilis terbaru, film klasik, dan serial original eksklusif.',
        features: [
            "Tonton konten dari Disney, Pixar, Marvel, Star Wars, dll.",
            "Akses Premier Access untuk film bioskop terbaru",
            "Download tak terbatas di hingga 10 perangkat",
            "Tonton hingga resolusi 4K UHD dan HDR",
            "Host virtual nonton bareng dengan GroupWatch",
            "Profil khusus anak-anak yang ramah keluarga"
        ],
        compatibility: [ "Android", "iOS", "Smart TV", "PC/Laptop" ],
        terms: "Akun bersifat sharing dan sudah dilengkapi dengan PIN untuk profil Anda. Dilarang mengubah data akun.",
        variants: [
            { name: 'Sharing - 1 Bulan', price: 25000, oldPrice: 39000, discount: 36 },
        ]
    },
    
    {
        id: 'duolingo',
        name: 'Duolingo',
        icon: '../images/duolingo.png', // Pastikan gambar duolingo.png ada di folder /images
        tag: 'Produktivitas',
        description: 'Duolingo Super adalah versi premium dari aplikasi belajar bahasa terpopuler di dunia. Belajar tanpa iklan, nyawa tak terbatas, dan akses fitur eksklusif untuk mempercepat kemajuan Anda.',
        features: [
            "Belajar tanpa gangguan iklan",
            "Nyawa tak terbatas, tidak perlu khawatir salah",
            "Latihan khusus untuk mengasah kelemahan",
            "Akses pelajaran secara offline",
            "Tes kemajuan untuk melacak perkembangan"
        ],
        compatibility: [ "Android", "iOS", "Website" ],
        terms: "Pilih antara kode reedem untuk akun pribadi atau akun premium siap pakai dari penjual.",
        variants: [
            { name: 'Code Reedem', price: 4000, oldPrice: 20000, discount: 80 },
            { name: 'Premium - 1 Bulan', price: 10000, oldPrice: 50000, discount: 80 },
        ]
    },
    
    {
        id: 'expressvpn',
        name: 'VPN Express',
        icon: '../images/expressvpn.png', // Pastikan gambar expressvpn.png ada di folder /images
        tag: 'Produktivitas',
        description: 'VPN Express adalah layanan VPN terkemuka yang dikenal dengan kecepatan super cepat, keamanan tingkat militer, dan kemudahan penggunaan. Lindungi privasi online Anda dan akses konten dari seluruh dunia tanpa batas.',
        features: [
            "Kecepatan koneksi terdepan di industri",
            "Enkripsi AES-256 bit terbaik di kelasnya",
            "Server di 94 negara di seluruh dunia",
            "Kebijakan tanpa-log yang ketat untuk privasi maksimal",
            "Bekerja di semua platform utama"
        ],
        compatibility: [ "Windows", "macOS", "iOS", "Android", "Linux", "Router" ],
        terms: "Satu akun untuk satu perangkat. Dilarang mengubah detail akun yang diberikan.",
        variants: [
            { name: 'Premium - 1 Bulan', price: 8000, oldPrice: 15000, discount: 47 },
        ]
    },
    
    {
        id: 'gemini',
        name: 'AI Gemini',
        icon: '../images/gemini.png', // Pastikan gambar gemini.png ada di folder /images
        tag: 'Produktivitas',
        description: 'Gemini adalah AI generatif dari Google, dirancang untuk menjadi partner kreatif Anda. Dapatkan akses ke model Pro untuk kemampuan penalaran, coding, dan kreasi konten yang lebih canggih.',
        features: [
            "Akses ke model Gemini Pro",
            "Kemampuan pemahaman multimodal (teks, gambar, audio)",
            "Membantu dalam coding, menulis, dan brainstorming",
            "Terintegrasi dengan ekosistem Google",
            "Jawaban yang lebih cepat dan mendalam"
        ],
        compatibility: [ "Website", "Android", "iOS" ],
        terms: "Aktivasi menggunakan akun Google pribadi Anda. Proses membutuhkan waktu & akses sementara dari penjual.",
        variants: [
            { name: 'Pro - 1 Bulan', price: 15000, oldPrice: 75000, discount: 80 },
            { name: 'Pro - 1 Tahun', price: 40000, oldPrice: 200000, discount: 80 },
        ]
    },
    
    {
        id: 'hmavpn',
        name: 'VPN HMA',
        icon: '../images/hmavpn.png', // Pastikan gambar hmavpn.png ada di folder /images
        tag: 'Produktivitas',
        description: 'HMA (Hide My Ass!) VPN adalah salah satu layanan VPN tertua dengan jaringan server terbesar di dunia. Cocok untuk Anda yang ingin membuka blokir konten dari lokasi-lokasi yang sangat spesifik.',
        features: [
            "Jaringan server terbesar, server di hampir setiap negara",
            "Fitur IP Shuffle untuk mengacak alamat IP secara otomatis",
            "Kill Switch untuk proteksi kebocoran data",
            "Tes kecepatan bawaan untuk mencari server tercepat",
            "Enkripsi tingkat tinggi"
        ],
        compatibility: [ "Windows", "macOS", "iOS", "Android" ],
        terms: "Satu akun untuk satu perangkat. Dilarang mengubah detail akun yang diberikan.",
        variants: [
            { name: 'Premium - 1 Bulan', price: 10000, oldPrice: 15000, discount: 33 },
        ]
    },
    
    {
        id: 'iqiyi',
        name: 'IQIYI',
        icon: '../images/iqiyi.png', // Pastikan gambar iqiyi.png ada di folder /images
        tag: 'Musik & Video',
        description: 'iQIYI adalah platform streaming yang menjadi rumah bagi para penggemar drama China, drama Korea, dan anime. Nikmati akses VIP untuk menonton episode terbaru lebih awal dan tanpa iklan.',
        features: [
            "Akses VIP ke episode eksklusif dan terbaru",
            "Tonton dalam kualitas Blu-ray 1080p",
            "Bebas dari gangguan iklan",
            "Subtitle dalam berbagai bahasa",
            "Download untuk ditonton offline"
        ],
        compatibility: [ "Android", "iOS", "Website", "Smart TV" ],
        terms: "Akun bersifat sharing. Dilarang mengubah data akun.",
        variants: [
            { name: 'Sharing - 1 Bulan', price: 15000, oldPrice: 39000, discount: 62 },
        ]
    },
    
    {
        id: 'loklok',
        name: 'LokLok',
        icon: '../images/loklok.png', // Pastikan gambar loklok.png ada di folder /images
        tag: 'Musik & Video',
        description: 'LokLok adalah aplikasi streaming yang memungkinkan Anda menonton berbagai film dan serial TV populer dari seluruh dunia secara gratis, dengan tambahan fitur premium untuk pengalaman yang lebih baik.',
        features: [
            "Streaming ribuan judul film dan serial",
            "Update konten terbaru secara berkala",
            "Kualitas video HD",
            "Subtitle dalam Bahasa Indonesia",
            "Versi premium bebas dari iklan"
        ],
        compatibility: [ "Android", "iOS", "Smart TV" ],
        terms: "Akun bersifat private dan dibuat menggunakan email dari penjual. Dilarang mengubah detail akun.",
        variants: [
            { name: 'Private - 1 Bulan', price: 25000, oldPrice: 40000, discount: 38 },
        ]
    },
    
    {
        id: 'netflix',
        name: 'Netflix',
        icon: '../images/netflix.png',
        tag: 'Musik & Video',
        description: 'Netflix adalah layanan streaming yang menawarkan berbagai acara TV, film, anime, dokumenter, dan konten lainnya di ribuan perangkat yang terhubung ke Internet.',
        features: [
            "Tonton sepuasnya, bebas iklan",
            "Resolusi hingga Ultra HD (4K)",
            "Download dan tonton secara offline",
            "Tersedia profil khusus anak",
            "Rekomendasi film dan serial yang dipersonalisasi"
        ],
        compatibility: [ "Android", "iOS", "Smart TV", "PC/Laptop", "Semua Perangkat" ],
        terms: "Setiap jenis akun memiliki aturan sharing yang berbeda. Dilarang mengubah data akun (email/password) untuk varian sharing.",
        variants: [
            { name: '1P1U - 1 Bulan', price: 25000, oldPrice: 54000, discount: 54 },
            { name: '1P2U - 1 Bulan', price: 18000, oldPrice: 54000, discount: 67 },
            { name: 'Semi Private - 1 Bulan', price: 30000, oldPrice: 120000, discount: 75 },
            { name: 'Private Account - 1 Bulan', price: 145000, oldPrice: 186000, discount: 22 },
        ]
    },
    
    {
        id: 'perplexity',
        name: 'AI Perplexity',
        icon: '../images/perplexity.png', // Pastikan gambar perplexity.png ada di folder /images
        tag: 'Produktivitas',
        description: 'Perplexity AI Pro adalah mesin jawaban canggih yang memberikan jawaban langsung dan terverifikasi dari sumber tepercaya di internet. Dapatkan jawaban akurat, lengkap dengan sitasi, tanpa perlu membuka banyak tab.',
        features: [
            "Jawaban langsung dengan sitasi sumber",
            "Mode pencarian 'Focus' (Academic, Wolfram|Alpha, YouTube, dll)",
            "Unlimited file uploads (PDF, Teks, Kode)",
            "Akses ke model AI tercanggih (GPT-4, Claude 3)",
            "Pengalaman browsing bebas iklan dan terfokus"
        ],
        compatibility: [ "Website", "iOS", "Android" ],
        terms: "Akun bersifat private dan dibuat menggunakan email Anda (proses 1x24 jam).",
        variants: [
            { name: 'Private - 1 Bulan', price: 25000, oldPrice: 80000, discount: 69 },
        ]
    },
    
    {
        id: 'prime-video',
        name: 'Prime Video',
        icon: '../images/prime.png',
        tag: 'Musik & Video',
        description: 'Prime Video adalah layanan streaming dari Amazon yang menawarkan ribuan film populer, acara TV, dan Amazon Originals eksklusif seperti The Boys dan The Lord of the Rings: The Rings of Power.',
        features: [
            "Akses ribuan film dan acara TV",
            "Tonton Amazon Originals eksklusif",
            "Streaming dalam resolusi hingga 4K Ultra HD",
            "Download konten untuk ditonton offline",
            "Tonton di berbagai perangkat sekaligus"
        ],
        compatibility: [ "Android", "iOS", "Smart TV", "PC/Laptop", "Semua Perangkat" ],
        terms: "Akun private menggunakan email dan password dari penjual. Dilarang mengubah data akun.",
        variants: [
            { name: 'Premium - 1 Bulan', price: 15000, oldPrice: 59000, discount: 75 },
        ]
    },
    
    {
        id: 'spotify',
        name: 'Spotify',
        icon: '../images/spotify.png',
        tag: 'Produktivitas',
        description: 'Spotify Premium adalah paket khusus yang ingin menikmati musik tanpa batas dengan harga lebih terjangkau. Cocok untuk kamu yang ingin mendengarkan musik, podcast, dan playlist favorit tanpa gangguan iklan.',
        features: [
            "Akses semua lagu & podcast tanpa iklan",
            "Skip lagu tanpa batas",
            "Bisa download & dengar musik offline",
            "Kualitas audio tinggi & jernih",
            "Playlist & rekomendasi personalisasi",
            "Harga lebih hemat khusus pelajar"
        ],
        compatibility: [ "Android", "iOS", "Semua Perangkat" ],
        terms: "Akun Private Dan Dari Admin",
        variants: [
            { name: 'Student Premium - 1 Bulan', price: 8000, oldPrice: 16000, discount: 50 },
        ]
    },
    
    {
        id: 'surfsharkvpn',
        name: 'VPN Surfshark',
        icon: '../images/surfsharkvpn.png', // Pastikan gambar surfsharkvpn.png ada di folder /images
        tag: 'Produktivitas',
        description: 'Surfshark adalah VPN yang menawarkan fitur keamanan canggih dengan harga terjangkau. Salah satu keunggulannya adalah bisa digunakan di perangkat tanpa batas dalam satu langganan.',
        features: [
            "Perangkat tak terbatas dengan 1 akun",
            "Fitur CleanWeb untuk blokir iklan & malware",
            "Mode kamuflase agar provider tidak tahu Anda pakai VPN",
            "Koneksi MultiHop untuk keamanan ganda",
            "Kebijakan tanpa-log yang ketat"
        ],
        compatibility: [ "Windows", "macOS", "iOS", "Android", "Linux", "Smart TV" ],
        terms: "Satu akun bisa digunakan untuk banyak perangkat. Dilarang mengubah detail akun yang diberikan.",
        variants: [
            { name: 'Premium - 2 Bulan', price: 30000, oldPrice: 80000, discount: 63 },
            { name: 'Premium - 1 Tahun', price: 70000, oldPrice: 300000, discount: 77 },
        ]
    },
    
    {
        id: 'viu',
        name: 'Viu',
        icon: '../images/viu.png',
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
    },
    
    {
        id: 'wetv',
        name: 'WETV',
        icon: '../images/wetv.png', // Pastikan gambar wetv.png ada di folder /images
        tag: 'Musik & Video',
        description: 'WeTV adalah layanan streaming yang didedikasikan untuk para penggemar drama Asia. Tonton ribuan jam drama Korea, China, Thailand, anime, dan variety show terpopuler dengan subtitle Indonesia.',
        features: [
            "Akses VIP ke episode terbaru lebih cepat",
            "Streaming tanpa jeda iklan",
            "Tonton dalam kualitas Full HD",
            "Download dan tonton secara offline",
            "Nonton di 2 perangkat sekaligus"
        ],
        compatibility: [ "Android", "iOS", "Smart TV", "Website" ],
        terms: "Akun bersifat private dan dibuat menggunakan email dari penjual. Dilarang mengubah detail akun.",
        variants: [
            { name: 'Private - 1 Bulan', price: 25000, oldPrice: 39000, discount: 36 },
        ]
    },
    
    {
        id: 'youtube',
        name: 'YouTube',
        icon: '../images/youtube.png',
        tag: 'Musik & Video',
        description: 'YouTube Premium adalah versi premium dari YouTube yang cocok untuk kamu yang ingin nonton lebih nyaman tanpa gangguan iklan, sekaligus menikmati fitur ekstra.',
        features: [
            "Tonton semua video tanpa iklan",
            "Bisa download & nonton offline",
            "Background play (tetap jalan meski layar terkunci)",
            "Akses YouTube Music Premium tanpa batas",
            "Konten eksklusif YouTube Originals"
        ],
        compatibility: [ "Android", "iOS", "Semua Perangkat" ],
        terms: "Aktivasi via invite link ke email pribadi Anda. Pastikan email belum pernah atau tidak sedang premium. ( Variant Invite )",
        variants: [
            { name: 'Premium Invite - 1 Bulan', price: 3000, oldPrice: 20000, discount: 85 },
            { name: 'Premium FamHead - 1 Bulan', price: 10000, oldPrice: 59000, discount: 83 },
            { name: 'Premium Indplan - 3 Bulan', price: 25000, oldPrice: 177000, discount: 86 },
        ]
    },
    
        {
        id: 'bstation',
        name: 'Bstation',
        icon: '../images/bstation.png', // Pastikan gambar bstation.png ada di folder /images
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
    },
    
    {
        id: 'vidio-platinum',
        name: 'Vidio Platinum',
        icon: '../images/vidio-platinum.png', // Pastikan gambar vidio-platinum.png ada di folder /images
        tag: 'Musik & Video',
        description: 'Vidio adalah rumah bagi konten lokal terbaik. Nikmati tayangan olahraga live eksklusif seperti BRI Liga 1, Vidio Original Series, film Hollywood, drama Korea, dan channel TV internasional.',
        features: [
            "Nonton Live Streaming Olahraga (BRI Liga 1, UCL, dll)",
            "Akses Vidio Original Series",
            "Ribuan film dan serial Hollywood",
            "Anime dan drama Korea terpopuler",
            "Bebas iklan (untuk konten VOD)"
        ],
        compatibility: [ "Android", "iOS", "Website", "Smart TV" ],
        terms: "Aktivasi menggunakan nomor HP yang terdaftar di aplikasi Vidio.",
        variants: [
            { name: 'Sharing - 1 Bulan', price: 16000, oldPrice: 39000, discount: 59 },
            { name: 'Private - 1 Bulan', price: 25000, oldPrice: 59000, discount: 58 },
        ]
    },
    
    {
        id: 'zoom',
        name: 'Zoom',
        icon: '../images/zoom.png', // Pastikan gambar zoom.png ada di folder /images
        tag: 'Produktivitas',
        description: 'Zoom Pro adalah solusi video conference profesional untuk meeting, webinar, dan kelas online tanpa batas. Nikmati durasi meeting tanpa batas, fitur-fitur canggih, dan kapasitas peserta yang lebih besar.',
        features: [
            "Meeting grup tanpa batas waktu",
            "Kapasitas hingga 100 peserta",
            "Rekam meeting ke cloud (Cloud Recording)",
            "Laporan meeting (jumlah peserta, durasi, dll)",
            "Fitur Co-host dan Polling"
        ],
        compatibility: [ "Windows", "macOS", "iOS", "Android", "Website" ],
        terms: "Akun bersifat private dan dibuat menggunakan email Anda (proses 1x24 jam).",
        variants: [
           { name: 'Private - 14 Hari', price: 7500, oldPrice: 30000, discount: 75},
        ]
    }
];