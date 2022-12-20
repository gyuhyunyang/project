// 헤더효과
const headerEl = document.querySelector('header');
const mainMenuEl = document.querySelector('.gnb > .main-menu');
const subMenuEl = document.querySelectorAll('.gnb .sub-menu');

mainMenuEl.addEventListener('mouseover', function (){
  headerEl.style.height = '250px';

  subMenuEl.forEach(function(subMenuEl) {
    subMenuEl.style.opacity='1';
    subMenuEl.style.visibility = 'visible';
  });
});

mainMenuEl.addEventListener('mouseleave', function (){
  headerEl.style.height = '100px';

  subMenuEl.forEach(function(subMenuEl) {
    subMenuEl.style.opacity='0';
    subMenuEl.style.visibility = 'hidden';
  });
});


// 