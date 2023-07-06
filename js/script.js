var clicked = false;

function evilMoment(event) {
  if (!clicked) {
    document.body.style.backgroundImage = "url('pics/hintergrund3.gif')";
    var audio = new Audio('sounds/roundstart.mp3');
    audio.play();
    clicked = true;
  }
  event.stopPropagation();
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

  document.body.addEventListener('click', evilMoment);
});
