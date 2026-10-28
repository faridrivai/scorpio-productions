document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOADING SCREEN & REVEAL KONTEN ---
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    // Jika halaman memiliki loader (biasanya di Homepage)
    if(loader) {
        document.body.classList.add('animate-logo'); // Trigger animasi logo 3D di loader
        
        setTimeout(() => {
            loader.classList.add('fade-out'); // Hilangkan background hitam perlahan
            if(content) content.classList.add('show-content'); // Munculkan web utama
            
            // Hapus loader dari sistem agar tidak menutupi klik (setelah transisi CSS selesai)
            setTimeout(() => {
                loader.style.display = 'none';
            }, 1500); 
            
        }, 3500); // Tampil selama 3.5 detik
        
    } else if (content) {
        // Jika halaman tidak pakai loader (seperti halaman About/Contact), langsung munculkan
        content.classList.add('show-content');
    }

    // --- 2. SCROLL ANIMATION (Efek elemen muncul saat di-scroll) ---
    const scrollElements = document.querySelectorAll('.js-scroll');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) { // Elemen muncul saat masuk 25% ke layar
                displayScrollElement(el);
            }
        })
    }
    
    // Cek elemen saat web pertama kali beres loading
    setTimeout(() => { handleScrollAnimation(); }, 3600);
    
    // Cek elemen setiap kali user melakukan scroll
    window.addEventListener('scroll', () => { 
        handleScrollAnimation(); 
    });

    // --- 3. NAVBAR SCROLL (Efek Glassmorphism saat scroll turun) ---
    const navbar = document.getElementById('navbar');
    if(navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }
});