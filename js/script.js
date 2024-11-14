// Funktion, um die Antwort zu überprüfen

console.log(process.env.RIDDLEANSWER1);

function checkAnswer(answerId, contentId, riddleNr, errorId) {
    const userAnswer = document.getElementById(answerId).value.trim();
    const errorMessage = document.getElementById(errorId);

    let correctAnswer = "";
    console.log(process.env.RIDDLEANSWER1);

    if (riddleNr == 1) {
        correctAnswer = process.env.RIDDLEANSWER1 || ""; // Falls process.env.RIDDLEANSWER1 undefined ist, setze es auf einen leeren String
        console.log(correctAnswer);
        console.log(process.env.RIDDLEANSWER1);
    }


    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        // Zeige den Inhalt an
        document.getElementById(contentId).style.display = 'block';
        // Verstecke das Textfeld und das Rätsel
        document.getElementById(answerId).parentElement.style.display = 'none';
        console.log(process.env.RIDDLEANSWER1);
    } else {
        // alert('Falsche Antwort! Versuche es nochmal.');

        // Zeige die Fehlermeldung bei einer falschen Antwort an
        errorMessage.style.display = 'block';
        console.log(process.env.RIDDLEANSWER1);
    }

    console.log(process.env.RIDDLEANSWER1);
}

// Ereignislistener für Enter-Taste hinzufügen
function addEnterKeyListener(answerId, contentId, riddleNr, errorId) {
    const answerInput = document.getElementById(answerId);
    console.log(process.env.RIDDLEANSWER1);

    if (answerInput) {
        answerInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkAnswer(answerId, contentId, riddleNr, errorId);
            }
        });
    }

    answerInput?.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAnswer(answerId, contentId, riddleNr, errorId);
        }
    });
    
}

// Listener beim Laden der Seite für jedes Rätsel hinzufügen
document.addEventListener('DOMContentLoaded', function() {
    addEnterKeyListener('answer1', 'content1', 1, 'error1');
    console.log(process.env.RIDDLEANSWER1);
});