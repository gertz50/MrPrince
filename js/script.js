var clicked = false;

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

function randomMoment(event) {
  var random = Math.random();
  if (random < 0.5) {
    evilMoment(event);
  } else {
    loveMoment(event);
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

  document.body.addEventListener('click', randomMoment);
});
