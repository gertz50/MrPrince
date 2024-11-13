var clicked = false;
var moment = randomMoment();
updateIcon(moment);

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
    var audio = new Audio('sounds/sanji.mp3');
    audio.play();
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

function updateIcon(moment) {
      const favicon = document.getElementById('favicon');
      const faviconSmall = document.getElementById('favicon-small');

      if (moment === 'love') {
        favicon.href = 'pics/love-Icon32.png';
        faviconSmall.href = 'pics/love-Icon16.png';
      } 
    
    if (moment === 'evil') {
        favicon.href = 'pic/evil-Icon32.png';
        faviconSmall.href = 'pics/evil-Icon16.png';
      }
}

document.addEventListener('DOMContentLoaded', function() {
  var redirectLink = document.getElementById('redirect-link');
  redirectLink.addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = 'https://snake.rambonl.com/';
  });

  var button = document.querySelector('.button');
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = 'ww.html';
  });

  var title = document.getElementById('title-text');
  var description = document.getElementById('redirect-link');
    
  if (moment === "evil") {
    document.body.addEventListener('click', evilMoment);
  }

  if (moment === "love") {
    title.classList.add('dark-background');
    description.classList.add('dark-background');
    document.body.addEventListener('click', loveMoment);
  }
    
  
});
