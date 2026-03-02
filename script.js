document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navigering: Markera aktiv länk ---
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        // Kontrollera om länkens href finns i nuvarande URL
        if(currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
        // Specialfall för startsidan (om path är tom eller bara /)
        if((currentPath === '/' || currentPath.endsWith('/')) && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });

    // --- 2. Modal-logik (Portfolio & Påskägg) ---
    const modalBtns = document.querySelectorAll('.modal-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Öppna modal vid knapptryck
    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-target');
            const modal = document.getElementById(modalId);
            if(modal) modal.style.display = 'block';
        });
    });

    // Stäng modal vid klick på krysset
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Stäng modal vid klick utanför rutan
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // --- PÅSKÄGG 1: Svampen ---
    const mushroom = document.getElementById('mushroom-trigger');
    if(mushroom) {
        mushroom.addEventListener('click', () => {
            document.body.style.background = "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)";
            alert("🍄 Super Mario Mode Activated! (Bakgrunden ändrades)");
        });
    }

    // --- PÅSKÄGG 2: Kod 1337 ---
    let keySequence = '';
    const secretCode = '1337';

    document.addEventListener('keydown', (e) => {
        keySequence += e.key;
        
        // Håll strängen kort
        if (keySequence.length > secretCode.length) {
            keySequence = keySequence.slice(-secretCode.length);
        }

        if (keySequence === secretCode) {
            const eggModal = document.getElementById('easter-egg-modal');
            // Om vi är på startsidan finns modalen
            if (eggModal) {
                eggModal.style.display = 'block';
            } else {
                // Om vi är på en annan sida, kör en alert istället
                alert("👾 ELITE! Du hittade det hemliga påskägget!");
            }
            // Nollställ sekvensen
            keySequence = '';
        }
    });
});