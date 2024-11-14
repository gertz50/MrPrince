// Funktion, um die Antwort zu überprüfen
function checkAnswer(answerId, contentId, correctAnswer, errorId) {
    const userAnswer = document.getElementById(answerId).value.trim();
    const errorMessage = document.getElementById(errorId);

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        // Zeige den Inhalt an
        document.getElementById(contentId).style.display = 'block';
        // Verstecke das Textfeld und das Rätsel
        document.getElementById(answerId).parentElement.style.display = 'none';
    } else {
        // alert('Falsche Antwort! Versuche es nochmal.');

        // Zeige die Fehlermeldung bei einer falschen Antwort an
        errorMessage.style.display = 'block';
    }
}

// Ereignislistener für Enter-Taste hinzufügen
function addEnterKeyListener(answerId, contentId, correctAnswer, errorId) {
    const answerInput = document.getElementById(answerId);

    if (answerInput) {
        answerInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkAnswer(answerId, contentId, correctAnswer, errorId);
            }
        });
    }

    answerInput?.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAnswer(answerId, contentId, correctAnswer, errorId);
        }
    });
    
}

// Listener beim Laden der Seite für jedes Rätsel hinzufügen
document.addEventListener('DOMContentLoaded', function() {
    addEnterKeyListener('answer1', 'content1', 'jason', 'error1');
});