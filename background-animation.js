// File: background-animation.js

document.addEventListener('DOMContentLoaded', () => {
    tsParticles.load("particles-js", {
        background: {
            color: {
                value: "transparent" // Mengikuti warna background dari CSS
            }
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: false, // Matikan interaksi saat hover
                },
                onClick: {
                    enable: false, // Matikan interaksi saat klik
                }
            }
        },
        particles: {
            number: {
                value: 150, // Jumlah bintang, bisa diubah (misal: 80)
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#FFFF" // Warna bintang (Muted Gold/Krem)
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.7,
                random: true, // Opasitas acak agar terlihat berkelip
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 1.9, // Ukuran bintang
                random: true,
                anim: {
                    enable: false,
                }
            },
            move: {
                enable: true,
                speed: 0.2, // Kecepatan gerak bintang (buat sangat lambat)
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        },
        detectRetina: true
    });
});