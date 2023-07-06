var clicked = false;
var moment = randomMoment();

if (moment === "evil") {
    document.getElementById('title-text').innerText = "Dies ist eine böse Webseite, du hättest nicht herkommen sollen...";
}

if (moment === "love") {
    document.getElementById('title-text').innerText = "Dies ist die Prüfung der Liebe...";
}

function evilMoment(event) {
  if (!clicked) {
    document.body.style.backgroundImage = "url('pics/hintergrund2.gif')";
    var audio = new Audio('sounds/roundstart.mp3');
    audio.play();
    clicked = true;
  }
  event.stopPropagation();
}

function loveMoment(event) {
  if (!clicked) {
    document.body.style.backgroundImage = "url('pics/hintergrund3.gif')";
    //var audio = new Audio('sounds/roundstart.mp3');
    //audio.play();
    clicked = true;
  }
  event.stopPropagation();
}

function randomMoment() {
  var random = Math.random();
  if (random < 0.5) {
    //evilMoment(event);
    return("evil");
  } else {
    //loveMoment(event);
    return("love");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var redirectLink = document.getElementById('redirect-link');
  redirectLink.addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = 'https://yungztr.de';
  });

  var button = document.querySelector('.button');
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = 'ww.html';
  });


//Text dunkler Hintergrund
  var title = document.getElementById('title-text');
  var description = document.getElementById('redirect-link');
  title.classList.add('dark-background');
  description.classList.add('dark-background');
    
  if (moment === "evil") {
    document.body.addEventListener('click', evilMoment);
  }

  if (moment === "love") {
    document.body.addEventListener('click', loveMoment);
  }
    
  
});
