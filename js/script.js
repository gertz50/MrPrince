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

function addEnterKeyListener(inputId, contentId, correctAnswer, errorId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                checkAnswer(inputId, contentId, correctAnswer, errorId);
            }
        });
    }
}




// Lade die JSON-Datei mit fetch
fetch('../posts.json')
  .then(response => response.json())  // Konvertiere die Antwort in JSON
  .then(data => {
    // Jetzt haben wir die Daten in der Konstante 'data'


    const sortedPosts = data.posts.sort((a, b) => b.id - a.id);
    const postsContainer = document.getElementById('posts-container');
    sortedPosts.forEach( (post, index) => {

        if(post.is_visible) {
            //Struktur
            const postElement = document.createElement('div');
            const leerElement = document.createElement('br');
            const abtrennLinieElement = document.createElement('hr');
            const leerElement2 = document.createElement('br');
            if (post.is_riddle) {
                
                //kommt in Post rein
                const divElement = document.createElement('div');

                //kommt alles in divElement rein
                const titleElement = document.createElement('h1');
                const warningElement = document.createElement('p');
                const riddleElement = document.createElement('p');
                const authorElement = document.createElement('span');

                const errorElement = document.createElement('p');
                errorElement.id = 'error' + post.id;
                errorElement.style.color = 'red';
                errorElement.style.display = 'none';

                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.id = 'answer' + post.id;
                
                const buttonElement = document.createElement('button');
                buttonElement.style.display = 'inline-block';
                buttonElement.onclick = () => checkAnswer('answer' + post.id, 'content' + post.id, post.riddle_answer, 'error' + post.id);

                const contentElement = document.createElement('div');
                contentElement.style.display = 'none';
                contentElement.id = 'content' + post.id;

                titleElement.innerHTML = post.title;
                warningElement.innerHTML = "🔒<b>Attention!</b>🔒<br><br>" + post.riddle_warning.replaceAll("\n", "<br>");
                riddleElement.innerHTML = "<b>" + post.riddle_content.replaceAll("\n", "<br>") + "</b>";
                errorElement.innerHTML = 'Wrong answer.';
                inputElement.placeholder = 'Your answer';
                buttonElement.innerHTML = 'Submit answer';
                contentElement.innerHTML = post.html_content;
                authorElement.innerHTML = post.created_at + " | Posted by " + post.author;

                //in post einfügen
                
                postElement.appendChild(warningElement);
                postElement.appendChild(riddleElement);
                postElement.appendChild(errorElement);
                postElement.appendChild(inputElement);
                postElement.appendChild(document.createTextNode(' '));
                postElement.appendChild(buttonElement);
                
                
                


                divElement.appendChild(contentElement);
                divElement.appendChild(postElement)

                //zu den vorherigen posts hinzufügen
                postsContainer.appendChild(titleElement);
                postsContainer.appendChild(divElement);
                postsContainer.appendChild(authorElement);
                postsContainer.appendChild(document.createElement('br'));

                addEnterKeyListener('answer' + post.id, 'content' + post.id, post.riddle_answer, 'error' + post.id);
            } else {
                //Struktur
                // const postElement = document.createElement('div');
                // const leerElement = document.createElement('br');
                // const abtrennLinieElement = document.createElement('hr');
                // const leerElement2 = document.createElement('br');

                //kommt alles in Post rein
                const titleElement = document.createElement('h1');
                const contentElement = document.createElement('p');
                const authorElement = document.createElement('span');

                titleElement.innerHTML = post.title;
                contentElement.innerHTML = post.html_content;
                authorElement.innerHTML = post.created_at + " | Posted by " + post.author;

                //in post einfügen
                postElement.appendChild(titleElement);
                postElement.appendChild(contentElement);
                postElement.appendChild(authorElement);

                //zu den vorherigen posts hinzufügen
                postsContainer.appendChild(postElement);
                
            }


            //posts voneinander abtrennen
            if(index != sortedPosts.length-1){
                postsContainer.appendChild(leerElement);
                postsContainer.appendChild(abtrennLinieElement);
                postsContainer.appendChild(leerElement2);
            }



        }

        
    })
    

  })
  .catch(error => console.error('Fehler beim Laden der JSON-Datei:', error));