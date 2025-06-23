document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body; // caso eu use elemento pai, preciso disso

    // aplica o tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // ve se o usuarios tem tema do sistema, caso não tenha ele roda normalmente
        applyTheme('dark');
    } else {
        applyTheme('light'); // padrão branquelo
    }

    // evento, óbvio    
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});