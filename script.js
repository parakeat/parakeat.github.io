'use strict'

document.getElementById('tribe').addEventListener('onclick', function() {
  var logo = document.getElementsByClassName('parakeat-logo')[0];
  logo.classList.remove('fade-in')
  logo.classList.add('bouncer');
});



