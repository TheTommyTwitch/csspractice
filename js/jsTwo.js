var navButton = document.querySelector('.nav-button');
var topNav = document.querySelector('.top-nav');

navButton.addEventListener('click', function() {
  if (topNav.style.marginTop === '-80px') {
    navButton.innerHTML = 'Down';
    topNav.style.marginTop = '0px';
  } else {
    navButton.innerHTML = 'Up';
    topNav.style.marginTop = '-80px';
  }
});
