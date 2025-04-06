document.getElementById('buttonImage').addEventListener('click', function() {
    window.open('ricevuta.html', '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
    // Funzione per aggiornare la data e l'ora
    function aggiornaDataEOra() {
        const now = new Date();
        const optionsDate = { day: '2-digit', month: '2-digit', year: '2-digit' };
        const optionsTime = { hour: '2-digit', minute: '2-digit' };

        // Calcola l'orario mezz'ora avanti
        const futureTime = new Date(now.getTime() + 52 * 60000); // Aggiunge 30 minuti (30 * 60 * 1000 ms)

        const formattedDate = now.toLocaleDateString('it-IT', optionsDate);
        const formattedTime = futureTime.toLocaleTimeString('it-IT', optionsTime);

        // Aggiorna gli elementi della pagina
        document.querySelector('.data').textContent = formattedDate;
        document.querySelector('.ora').textContent = formattedTime;
    }

    // Chiama la funzione per aggiornare la data e l'ora al caricamento della pagina
    aggiornaDataEOra();

    // Aggiungi un listener al pulsante di refresh
    const refreshButton = document.getElementById('refreshImage');
    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            aggiornaDataEOra();
        });

    }
});

// Funzione per mostrare l'overlay di caricamento
function mostraCaricamento() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

// Funzione per nascondere l'overlay di caricamento
function nascondiCaricamento() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Aggiungi un event listener ai pulsanti del footer e al pulsante "Acquista Biglietto"
document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i bottoni del footer
    const footerButtons = document.querySelectorAll('footer .footer-item, #acquistaButton, #infoButtonImage');

    footerButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            mostraCaricamento();
            // Simula un'attesa di 2 secondi prima di nascondere il caricamento
            setTimeout(nascondiCaricamento, 2000); // Modifica il tempo se necessario
        });
    });
});
