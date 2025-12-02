document.addEventListener('DOMContentLoaded', function() {
    
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail-image');
    const buyButton = document.querySelector(".buy-button");
    const zoomButton = document.querySelector(".zoom-btn");

    // --- BARU: Fungsionalitas Hamburger Menu ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavList = document.getElementById('mainNavList');

    if (menuToggle && mainNavList) {
        menuToggle.addEventListener('click', function() {
            mainNavList.classList.toggle('active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Ganti ikon hamburger (fa-bars) menjadi X (fa-xmark) dan sebaliknya
            const icon = this.querySelector('i');
            if (mainNavList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }
    // --- AKHIR Fungsionalitas Hamburger Menu ---


    // --- Fungsionalitas Galeri Thumbnail ---
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // 1. Ganti Gambar Utama
            const fullSrc = this.getAttribute('data-full-src');
            mainImage.src = fullSrc;
            
            // 2. Hapus 'active' dari semua thumbnail, tambahkan ke yang diklik
            thumbnails.forEach(img => img.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- Fungsionalitas Tombol Beli (Hubungi Penjual via WA) ---
    if (buyButton) {
        buyButton.onclick = function() {
            const laptopName = document.querySelector(".product-title").textContent;
            const phoneNumber = "6281234567890"; // GANTI dengan nomor WhatsApp Anda!
            const message = `Halo FaultX, saya tertarik dengan "${laptopName}" yang Anda jual. Mohon info detail dan proses pembelian lebih lanjut.`;
            
            // Format URL WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappURL, '_blank');
        }
    }

    // --- Fungsionalitas Zoom (Placeholder) ---
    if (zoomButton) {
        zoomButton.onclick = function() {
            window.open(mainImage.src, '_blank');
        }
    }
});