var hamburger = document.querySelector('.hamburger');
var links = document.querySelector('.link-menu')
var body =  document.querySelector('.content-container');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  links.classList.toggle('active');
  body.classList.toggle('active');
})


var singleLinks = document.querySelectorAll('.link');


for(var i = 0; i < singleLinks.length; i++) {
  singleLinks[i].addEventListener('click', afterClick);
}

function afterClick () {
  hamburger.classList.toggle('active');
  links.classList.toggle('active');
  body.classList.toggle('active');
}