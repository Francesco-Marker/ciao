// Dati corretti per il login
const datiCorretti = {
    nome: "Aurora",  // Nome giusto
    cognome: "Landi",  // Cognome giusto
    dataNascita: "03/04/2008",  // La data di nascita corretta
    password: "auroralandi"  // La password corretta
};

// Funzione per inviare un "messaggio" via pop-up (simulazione)
function inviaMessaggio(nome, orario) {
    alert(`Messaggio inviato: ${nome} ha scelto l'orario ${orario}`);
    // Qui si potrebbe integrare un servizio di invio email, ma richiede un backend.
}

// Verifica delle credenziali
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Impedisce che il modulo venga inviato normalmente
    
    // Ottieni i dati inseriti nel modulo
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const dataNascita = document.getElementById("dataNascita").value; // Data inserita manualmente
    const password = document.getElementById("password").value;
    
    // Controlla se i dati inseriti corrispondono a quelli corretti
    if (nome === datiCorretti.nome && cognome === datiCorretti.cognome && dataNascita === datiCorretti.dataNascita && password === datiCorretti.password) {
        // Se i dati sono corretti, nascondi il modulo di login e mostra la domanda
        document.getElementById("login").style.display = "none";
        document.getElementById("domanda").style.display = "block";
    } else {
        // Se i dati sono errati, mostra il messaggio di errore
        document.getElementById("errore").style.display = "block";
        document.getElementById("errore").innerText = "Credenziali errate! Riprova.";
    }
});

// Mostra la domanda e i pulsanti di risposta quando si clicca sul pulsante "Clicca per scoprire la domanda!"
document.getElementById("rivelareDomanda").addEventListener("click", function() {
    // Nascondi il messaggio iniziale
    document.getElementById("messaggioIniziale").style.display = "none";
    
    // Mostriamo la domanda e i pulsanti
    document.getElementById("domandaVisibile").style.display = "block";
    document.getElementById("risposte").style.display = "block";
});

// Gestiamo la risposta "Sì"
document.getElementById("si").addEventListener("click", function() {
    document.getElementById("risposta").style.display = "block";
    document.getElementById("risposta").innerText = "Perfetto, grazie (ti amo) 💖";
    document.getElementById("risposte").style.display = "none";  // Nasconde i pulsanti
    document.getElementById("orario").style.display = "block"; // Mostra la selezione dell'orario
});

// Gestiamo la risposta "No"
document.getElementById("no").addEventListener("click", function() {
    document.getElementById("risposta").style.display = "block";
    document.getElementById("risposta").innerText = "Opzione errata! 😜";  // Mostra l'errore
    setTimeout(function() {
        document.getElementById("risposta").style.display = "none"; // Nasconde il messaggio
        document.getElementById("risposte").style.display = "block"; // Mostra di nuovo i pulsanti "Sì" e "No"
    }, 2000); // Il messaggio di "Opzione errata" verrà visualizzato per 2 secondi
});

// Gestione della conferma dell'orario
document.getElementById("confermaOrario").addEventListener("click", function() {
    const orario = document.getElementById("orarioSelezionato").value;
    // Invia un messaggio di conferma
    inviaMessaggio("Aurora", orario);
});