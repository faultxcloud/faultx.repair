// Fungsi untuk menerapkan tema pada body
function applyTheme(theme) {
    const body = document.body;
    body.classList.remove('theme-light', 'theme-dark');

    if (theme === 'light') {
        body.classList.add('theme-light');
    } else if (theme === 'dark') {
        body.classList.add('theme-dark'); 
    } else if (theme === 'system') {
        // Cek preferensi sistem saat ini
        const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        if (systemTheme === 'light') {
            body.classList.add('theme-light');
        }
    }
}

// Fungsi inisialisasi
function initTheme() {
    const storedTheme = localStorage.getItem('theme');
    let initialTheme = storedTheme || 'system';

    applyTheme(initialTheme);
    updateThemeSwitcherText(initialTheme);

    // Menambahkan event listener untuk perubahan preferensi sistem
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (localStorage.getItem('theme') === 'system') {
            applyTheme('system');
        }
    });
}

// Fungsi untuk memperbarui teks dropdown
function updateThemeSwitcherText(theme) {
    const themeDropdown = document.getElementById('themeDropdown');
    if (themeDropdown) {
        let label = theme.charAt(0).toUpperCase() + theme.slice(1);
        // Pastikan Anda telah menyertakan Font Awesome (fas fa-adjust) di HTML Anda
        themeDropdown.innerHTML = `<i class="fas fa-adjust me-1"></i> ${label}`;
    }
}

// Event listener untuk klik dropdown
document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedTheme = element.getAttribute('data-bs-theme-value');
        
        localStorage.setItem('theme', selectedTheme);
        
        applyTheme(selectedTheme);
        updateThemeSwitcherText(selectedTheme);
    });
});

// Jalankan inisialisasi saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', initTheme);