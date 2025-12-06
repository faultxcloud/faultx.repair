/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// Variable untuk menyimpan posisi scroll sebelumnya
let prevScrollPos = window.pageYOffset;

// Fungsi untuk menangani efek hide/show
const handleHideShow = () => {
    const currentScrollPos = window.pageYOffset;
    const mainNav = document.getElementById('mainNav');

    if (!mainNav) {
        return;
    }

    // Tentukan arah scroll
    if (prevScrollPos > currentScrollPos) {
        // Scroll ke atas (Menampilkan Navbar)
        mainNav.classList.remove('navbar-hide');
    } else {
        // Scroll ke bawah (Menyembunyikan Navbar)
        if (currentScrollPos > 100) { // Sembunyikan jika sudah scroll lebih dari 100px
            mainNav.classList.add('navbar-hide');
        }
    }

    // Update posisi scroll sebelumnya
    prevScrollPos = currentScrollPos;
};

// Tambahkan event listener untuk menjalankan fungsi saat scrolling
window.addEventListener('scroll', handleHideShow);



window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  const backToTopBtn = document.getElementById("safeBackToTop");
  
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.classList.add("show"); 
  } else {
    backToTopBtn.classList.remove("show"); 
  }
}
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById("safeBackToTop");

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah aksi link default (melompat tiba-tiba)
            
            // Gulir halaman ke posisi paling atas (0, 0)
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Menggunakan animasi smooth bawaan browser
            });
            
            // Opsional: Untuk browser yang lebih lama (IE, dll.)
            // document.body.scrollTop = 0; 
            // document.documentElement.scrollTop = 0; 
        });
    }
});

