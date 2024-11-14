// Funktion, um die Antwort zu überprüfen
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
console.log(process.env.RIDDLEANSWER1);
function checkAnswer(answerId, contentId, riddleNr, errorId) {
    const userAnswer = document.getElementById(answerId).value.trim();
    const errorMessage = document.getElementById(errorId);
    const correctAnswer = "";
    console.log(process.env.RIDDLEANSWER1);

    if (riddleNr == 1) {
        correctAnswer = process.env.RIDDLEANSWER1;
        console.log(process.env.RIDDLEANSWER1);
    }

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        // Zeige den Inhalt an
        document.getElementById(contentId).style.display = 'block';
        console.log(process.env.RIDDLEANSWER1);
        // Verstecke das Textfeld und das Rätsel
        document.getElementById(answerId).parentElement.style.display = 'none';
    } else {
        // alert('Falsche Antwort! Versuche es nochmal.');

        // Zeige die Fehlermeldung bei einer falschen Antwort an
        errorMessage.style.display = 'block';
        console.log(process.env.RIDDLEANSWER1);
    }
}

// Ereignislistener für Enter-Taste hinzufügen
function addEnterKeyListener(answerId, contentId, riddleNr, errorId) {
    console.log(process.env.RIDDLEANSWER1);
    const answerInput = document.getElementById(answerId);
    answerInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAnswer(answerId, contentId, riddleNr, errorId);
            console.log(process.env.RIDDLEANSWER1);
        }
    });
}

console.log(process.env.RIDDLEANSWER1);

// Listener beim Laden der Seite für jedes Rätsel hinzufügen
document.addEventListener('DOMContentLoaded', function() {
    console.log(process.env.RIDDLEANSWER1);
    addEnterKeyListener('answer1', 'content1', 1, 'error1');
});