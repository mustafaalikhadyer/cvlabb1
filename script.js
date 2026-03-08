document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navigering: Markera aktiv länk ---
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if(currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
        if((currentPath === '/' || currentPath.endsWith('/')) && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });

    // --- 2. Modal-logik (Portfolio & Påskägg) ---
    const modalBtns = document.querySelectorAll('.modal-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Öppna Portfolio-modaler
    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-target');
            const modal = document.getElementById(modalId);
            if(modal) modal.style.display = 'block';
        });
    });

    // Stäng ALLA modaler vid klick på krysset (X)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hitta modalen som knappen ligger i och stäng den
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Stäng modal vid klick utanför rutan
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // --- PÅSKÄGG 1: Svampen (Bakgrundsbyte + Modal) ---
    const mushroom = document.getElementById('mushroom-trigger');
    
    if(mushroom) {
        mushroom.addEventListener('click', () => {
            // 1. Byt bakgrund
            document.body.style.background = "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)";
            
            // 2. Visa modal istället för alert
            const mushroomModal = document.getElementById('modal-mushroom');
            if (mushroomModal) {
                mushroomModal.style.display = 'block';
            }
        });
    }

    // --- PÅSKÄGG 2: Kod 1337 (Bara Modal) ---
    let keySequence = '';
    const secretCode = '1337';

    document.addEventListener('keydown', (e) => {
        keySequence += e.key;
        
        // Håll strängen kort för att spara minne
        if (keySequence.length > secretCode.length) {
            keySequence = keySequence.slice(-secretCode.length);
        }

        // Om koden matchar
        if (keySequence === secretCode) {
            const eliteModal = document.getElementById('modal-1337');
            
            // Visa modal istället för alert
            if (eliteModal) {
                eliteModal.style.display = 'block';
            }
            
            // Nollställ sekvensen så man kan göra det igen
            keySequence = '';
        }
    });
});
