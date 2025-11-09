// File: /deskproduk/semua-produk.js

const SEMUA_PRODUK = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        // 'terms' yang lama tetap bisa ada, tidak akan dipakai di halaman ini
        terms: "Akun bersifat shared/private sesuai varian...",

        // --- TAMBAHKAN DATA BARU DI BAWAH INI ---
        syaratProduk: [
            "Produk berupa: ChatGPT",
            "Paket: Plus dan Team",
            "Masa aktif: 7 Hari dan 1 bulan serta 3 bulan",
            "Aktivasi dilakukan melalui website dan aplikasi resmi",
            "Maksimal digunakan di 1 perangkat (untuk sharing)",
            "Maksimal digunakan di 3/4 perangkat (untuk private)",
            "Tidak ada refund setelah aktivasi berhasil"
        ],
        ketentuanGaransi: [
            "NO GARANSI",
        ]
    },
    {
        // --- TAMBAHKAN ATAU GANTI OBJEK CHATGPT (JASPAY) DENGAN INI ---
        id: 'chatgpt-jaspay',
        name: 'ChatGPT (Jasa Payment)',
        terms: "Jasa pembayaran untuk upgrade akun ChatGPT pribadi Anda.",
        syaratProduk: [
            "Produk berupa: Jasa Payment (UPGRADE)",
            "Paket: Plus dan Team",
            "Masa aktif: 1, 2, 3 Bulan",
            "Akun bersifat private, dan bisa undang 4 pengguna (kusus paket TEAM)",
            "Aktivasi dilakukan melalui website dan aplikasi resmi",
            "Maksimal digunakan di 5 perangkat",
            "Tidak ada refund setelah aktivasi berhasil"
        ],
        ketentuanGaransi: [
            "Garansi Backfree (hanya berlaku untuk paket Plus)",
            "Garansi (hanya berlaku sampai suskes PAYMENT untuk paket TEAM)",
            "Paket Plus 1 dan 2 Bulan wajib menggunakan domain dari admin"
        ]
    },
    
            {
        // --- TAMBAHKAN OBJEK BARU INI UNTUK NETFLIX ---
        id: 'netflix',
        name: 'Netflix ( LifeTime )',
        terms: "AutoRenew.",
        syaratProduk: [
            "Produk berupa: Netflix",
            "Paket: Sharing LifeTime",
            "Masa aktif: Lifetime/Selamanya",
            "Aktivasi dilakukan melalui aplikasi resmi",
            "Support All Device",
            "AutoRenew Langganan",
            "Dilarang Mengotak-atik Akun",
            "Maksimal digunakan di 1 perangkat.",
            "Tidak ada refund setelah aktivasi berhasil."
        ],
        ketentuanGaransi: [
            "Garansi (hanya berlaku sampai PERTAMA KALI LOGIN)",
            "Garansi tidak termasuk apabila akun mengalami banned / suspend"
        ]
    },
    
    {
        // --- TAMBAHKAN ATAU GANTI OBJEK VIU DENGAN INI ---
        id: 'viu',
        name: 'Viu',
        terms: "Akun premium untuk menonton drama Asia sepuasnya.",
        syaratProduk: [
            "Produk berupa: Viu",
            "Paket: Premium",
            "Masa aktif: 1 tahun",
            "Aktivasi dilakukan melalui website dan aplikasi resmi",
            "Maksimal digunakan di 3 perangkat.",
            "Akun bersifat private, dan boleh dibagikan ke pihak lain.",
            "Tidak ada refund setelah aktivasi berhasil."
        ],
        ketentuanGaransi: [
            "Garansi 1 bulan (hanya berlaku untuk kendala backfree)",
            "Garansi dihitung sejak tanggal pembelian",
            "Garansi tidak berlaku apabila akun mengalami banned / suspend"
        ]
    },
    {
        id: 'alight-motion',
        name: 'Alight Motion',
        terms: "Aktivasi menggunakan login dari penjual...",

        // --- TAMBAHKAN DATA BARU DI BAWAH INI ---
        syaratProduk: [
            "Produk berupa: Alight Motion",
            "Paket: PRO",
            "Masa aktif: 5 bulan dan 1 tahun",
            "Aktivasi dilakukan melalui aplikasi resmi",
            "Maksimal digunakan di 2 perangkat",
            "Akun bersifat private, dan boleh dibagikan ke pihak lain",
            "Tidak ada refund setelah aktivasi berhasil"
        ],
        ketentuanGaransi: [
            "Garansi 3 bulan (hanya berlaku untuk kendala backfree)",
            "Garansi dihitung sejak tanggal pembelian",
            "Garansi tidak berlaku apabila akun mengalami banned / suspend"
        ]
    },
    {
        id: 'canva',
        name: 'Canva Pro ( Invite )',
        terms: "Akun bersifat private/invite sesuai varian...",
        
        // --- TAMBAHKAN DATA BARU DI BAWAH INI (CONTOH) ---
        syaratProduk: [
            "Produk berupa: Canva Pro (Aktivasi via Invite)",
            "Durasi: 1 Bulan / 1 Tahun",
            "Wajib menggunakan email pribadi yang belum pernah Pro",
            "Invite Ulang Setiap 2 Bulan ( Varian 1Tahun )"
        ],
        ketentuanGaransi: [
            "Garansi penuh selama durasi aktif",
            "Jika terjadi kendala, akan di-invite ulang ke tim yang baru"
        ]
    },
    // ... Lakukan hal yang sama untuk SEMUA PRODUK lainnya ...
    {
        // --- UBAH ATAU GANTI OBJEK CANVA YANG ADA DENGAN INI ---
        id: 'canvafamhead',
        name: 'Canva Pro ( FamHead )',
        terms: "Akun bersifat private/invite sesuai varian...",
        syaratProduk: [
            "Produk berupa: Canva",
            "Paket: FAMILY HEAD",
            "Masa aktif: 1 bulan dan 2 bulan",
            "Aktivasi dilakukan melalui website dan aplikasi resmi",
            "Maksimal digunakan di 2 perangkat",
            "Akun bersifat private, dan bisa undang 100 pengguna (FAMILY HEAD)",
            "Tidak ada refund setelah aktivasi berhasil"
        ],
        ketentuanGaransi: [
            "Garansi 1 bulan (hanya berlaku untuk kendala backfree)",
            "Garansi dihitung sejak tanggal pembelian",
            "Garansi tidak berlaku apabila akun mengalami banned / suspend"
        ]
    },
    {
        // --- TAMBAHKAN OBJEK BARU INI UNTUK SPOTIFY ---
        id: 'spotify',
        name: 'Spotify',
        terms: "Akun premium untuk mendengarkan musik tanpa batas.",
        syaratProduk: [
            "Produk berupa: Spotify",
            "Paket: Premium",
            "Masa aktif: 1 bulan",
            "Aktivasi dilakukan melalui website dan aplikasi resmi",
            "Maksimal digunakan di 1 perangkat.",
            "Akun bersifat private, dan tidak dibagikan ke pihak lain.",
            "Tidak ada refund setelah aktivasi berhasil."
        ],
        ketentuanGaransi: [
            "Garansi (hanya berlaku sampai PERTAMA KALI LOGIN)",
            "Garansi tidak termasuk apabila akun mengalami banned, suspend & backfree"
        ]
    },

    {
        // --- TAMBAHKAN ATAU GANTI OBJEK CAPCUT DENGAN INI ---
        id: 'capcut',
        name: 'CapCut',
        terms: "Akun premium untuk editing video tanpa batas.",
        syaratProduk: [
            "Produk berupa: CapCut",
            "Paket: PRO",
            "Masa aktif: 1 minggu, 1 bulan dan 6 bulan",
            "Aktivasi dilakukan melalui website dan aplikasi resmi",
            "Maksimal digunakan di 4 perangkat.",
            "Akun bersifat private, dan boleh dibagikan ke pihak lain.",
            "Tidak ada refund setelah aktivasi berhasil."
        ],
        ketentuanGaransi: [
            "Garansi 7 hari (hanya berlaku untuk kendala backfree)",
            "Garansi dihitung sejak tanggal pembelian",
            "Garansi tidak berlaku apabila akun mengalami banned / suspend",
            "Telat claim GARANSI tidak akan di GARANSIKAN!"
        ]
    },
    {
        // --- TAMBAHKAN ATAU GANTI OBJEK APPLE MUSIC DENGAN INI ---
        id: 'apple-music',
        name: 'Apple Music',
        terms: "Akun premium untuk mendengarkan musik tanpa batas.",
        syaratProduk: [
            "Produk berupa: Aplle Music",
            "Paket: Basic & Family Head",
            "Masa aktif: Basic (kosongan) dan 1 bulan",
            "Aktivasi dilakukan melalui aplikasi appmus Android",
            "Maksimal digunakan di 1 perangkat",
            "Akun bersifat private, dan bisa undang 5 pengguna",
            "Tidak ada refund setelah aktivasi berhasil"
        ],
        ketentuanGaransi: [
            "Garansi 1 bulan (hanya berlaku untuk kendala backfree)",
            "Garansi dihitung sejak tanggal pembelian",
            "Garansi tidak berlaku apabila akun mengalami banned / suspend"
        ]
    },
{
    id: 'prime-video',
    name: 'Prime Video',
    terms: "Akun premium untuk menonton film dan serial Amazon Originals.",
    syaratProduk: [
        "Produk berupa: Prime Video",
        "Paket: Premium",
        "Masa aktif: 1 bulan",
        "Aktivasi dilakukan melalui website dan aplikasi resmi",
        "Maksimal digunakan di 3 perangkat.",
        "Akun bersifat private, dan boleh dibagikan ke pihak lain.",
        "Tidak ada refund setelah aktivasi berhasil."
    ],
    ketentuanGaransi: [
        "Garansi 1 bulan (hanya berlaku untuk kendala backfree)",
        "Garansi dihitung sejak tanggal pembelian",
        "Garansi tidak berlaku apabila akun mengalami banned / suspend"
    ]
},
{
    id: 'zoom',
    name: 'ZOOM',
    terms: "Akun pro untuk meeting online tanpa batas.",
    syaratProduk: [
        "Produk berupa: ZOOM",
        "Paket: PRO 100 PESERTA",
        "Masa aktif: 14 hari",
        "Aktivasi dilakukan melalui website dan aplikasi resmi",
        "Maksimal digunakan di 1 perangkat.",
        "Akun bersifat private, dan tidak dibagikan ke pihak lain.",
        "Tidak ada refund setelah aktivasi berhasil."
    ],
    ketentuanGaransi: [
        "Garansi 14 hari (hanya berlaku untuk kendala backfree)",
        "Garansi dihitung sejak tanggal pembelian",
        "Garansi tidak berlaku apabila akun mengalami banned / suspend"
    ]
},
    // ... sisa produk Anda yang lain ...
    {
    id: 'surfsharkvpn',
    name: 'VPN Surfshark',
    terms: "Satu akun premium untuk semua perangkat Anda tanpa batas.",
    syaratProduk: [
        "Produk berupa: VPN Express",
        "Paket: Premium",
        "Masa aktif: 2 bulan dan 1 tahun",
        "Aktivasi dilakukan melalui website dan aplikasi resmi",
        "Maksimal digunakan di 5 perangkat untuk 1 bulan (private)",
        "Maksimal digunakan di 1 perangkat untuk 1 tahun (sharing)",
        "Akun bersifat private, dan boleh dibagikan ke pihak lain.",
        "Tidak ada refund setelah aktivasi berhasil."
    ],
    ketentuanGaransi: [
        "Garansi 2 bulan dan 1 tahun (hanya berlaku untuk kendala backfree)",
        "Garansi dihitung sejak tanggal pembelian",
        "Garansi tidak berlaku apabila akun mengalami banned / suspend"
    ]
},
{
    id: 'hmavpn',
    name: 'VPN HMA',
    terms: "Akun premium dengan jaringan server terbesar di dunia.",
    syaratProduk: [
        "Produk berupa: VPN HMA",
        "Paket: Premium",
        "Masa aktif: 1 bulan",
        "Aktivasi dilakukan melalui website dan aplikasi resmi",
        "Maksimal digunakan di 5 perangkat.",
        "Akun bersifat private, dan boleh dibagikan ke pihak lain.",
        "Tidak ada refund setelah aktivasi berhasil."
    ],
    ketentuanGaransi: [
        "Garansi 1 bulan (hanya berlaku untuk kendala backfree)",
        "Garansi dihitung sejak tanggal pembelian",
        "Garansi tidak berlaku apabila akun mengalami banned / suspend"
    ]
},
{
    id: 'expressvpn',
    name: 'VPN Express',
    terms: "Akun premium untuk browsing aman dan super cepat.",
    syaratProduk: [
        "Produk berupa: VPN Surfshark",
        "Paket: Premium",
        "Masa aktif: 1 bulan",
        "Aktivasi dilakukan melalui website dan aplikasi resmi",
        "Maksimal digunakan di 5 perangkat.",
        "Akun bersifat private, dan boleh dibagikan ke pihak lain.",
        "Tidak ada refund setelah aktivasi berhasil."
    ],
    ketentuanGaransi: [
        "Garansi 1 bulan (hanya berlaku untuk kendala backfree)",
        "Garansi dihitung sejak tanggal pembelian",
        "Garansi tidak berlaku apabila akun mengalami banned / suspend"
    ]
},
];