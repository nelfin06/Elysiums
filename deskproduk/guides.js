const SEMUA_GUIDES = {
    // ... produk lain ...
'viu': {
    name: 'Viu',
    guide: [
        {
            icon: 'fas fa-info-circle',
            judul: "Penjelasan Kategori",
            points: [
                "<strong>Private Akun:</strong>",
                " - Max Digunakan 3 Device",
                " - Akun Private dari seller, boleh digunakan untuk sharing ke user lain",
            ]
        },
        {
            icon: 'fas fa-book-open',
            judul: "Peraturan dan Cara pakai",
            points: [
                "Login hanya untuk 3 device",
                "Dilarang mengubah Email, Pass dan payment",
                "Disarankan hanya login 3device untuk menghindari terkena banned."
            ]
        },
        {
            icon: 'fas fa-wrench',
            judul: "Solusi Jika ada masalah, ikuti urutan langkah berikut",
            points: [
                "<strong>Terkena limit?</strong>",
                " - Download filmnya",
                " - Penggunaan di web/ios/tv sering limit",
                " - Tonton secara offline saja jika sering limit"
            ]
        }
    ]
},
'canva': {
    name: 'Canva Pro',
    guide: [
        {
            icon: 'fas fa-info-circle',
            judul: "Penjelasan Kategori",
            points: [
                "<strong> Canva Pro ( Invite ) </strong>",
                " - Di invite dari Email",
                " - Tidak memerlukan Password",
                " - Sudah Pro saat Menerima Invite",
                " - Akun Dari Buyer ( Need mail )",
                "<strong>Canva Pro ( Famhead )</strong>",
                " - Bisa invite 100 member Lewat Email",
                " - Akun dari seller",
            ]
        },
        {
            icon: 'fas fa-question-circle',
            judul: "FAQ",
            points: [
                "<strong>Q</strong> : Kalau saya order 1 tahun tapi baru 2 bulan sudah tidak pro gimana bang? ( Invite )",
                "<strong>A</strong> : Segera hubungi Admin untuk minta invite kembali, kirim bukti gmail kamu waktu invite pertama",
                "",
            ]
        }
    ]
},
    'netflix': {
        name: 'Netflix',
        guide: [
            {
                // Ganti 'title' menjadi 'judul' dan tambahkan 'icon'
                icon: 'fas fa-users',
                judul: "Perbedaan Akun",
                points: [
                "<strong>1 Profil 1 User (1P1U):</strong> Dalam 1 profil hanya ada 1 orang/user yang menggunakan profil tersebut.",
               "<strong>1 Profil 2 User (1P2U):</strong> Dalam 1 profil ada 2 orang jadi profil itu adalah sharing.",
              "<strong>Semi Private:</strong> Dalam 1 profil hanya ada 1 orang jadi akunnya private, max login 2 user/device.",
              "<strong>Private:</strong> Dalam 1 akun terdapat 5 profil. Nah semua profil itu jadi milik kalian, tapi ada hal yang tidak bisa kalian ubah dan tetap mematuhi Peraturan."
                ]
            },
            {
                icon: 'fas fa-ticket-alt',
                judul: "Penjelasan Kategori",
                points: [
                   "<strong>1 Profil 1 User (1P1U):</strong> Jika 1 orang sedang menonton bersamaan, maka 1 orang lainnya akan terkena limit dan harus menunggu orang lain selesai menonton.",
                    "<strong>1 Profil 2 User (1P2U):</strong> Jika 4 orang sedang menonton bersamaan, maka 4 orang lainnya akan terkena limit dan harus menunggu orang lain selesai menonton.",
                    "<strong>Semi Private:</strong> Hanya 4 orang yang bisa menonton secara bersamaan. Jika 4 orang sedang menonton, maka 1 orang akan terkena limit screen (Matikan Display nonton [fitur bebas pemakaian sebelumnya]). 4 Orang adalah jumlah yang sudah ditetapkan Netflix untuk batas limit screen, jadi semakin banyak device dari 1 akun = semakin tinggi resiko limit."
                ]
            },
            {
                icon: 'fas fa-book-open',
                judul: "Peraturan",
                points: [
                    "Dilarang memakai VPN saat login",
                    "Dilarang ganti Nama Profil & Pin akun netflix",
                    "Dilarang ganti device secara terus menerus",
                    "Dilarang mengganti email, password, atau mengotak atik akun",
                ]
            },
            {
                icon: 'fas fa-wrench',
                judul: "Solusi jika ada masalah",
                points: [
               "Jika terdapat [Incorrect Password] > Aktifkan mode pesawat [pengguna paket data]",
                "Restart Wifi [pengguna wifi]",
                "Tunggu 30-45 dettik",
                "Jangan Spam Login > Terkena limit [1p2u]",
                "Tunggu 30-45 detik",
                "Cobalah menunggu logout dan login kembali"

                ]
            }
        ]
    },
};