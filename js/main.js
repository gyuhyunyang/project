// 헤더효과
const headerEl = document.querySelector('header');
const mainMenuEl = document.querySelector('.gnb > .main-menu');
const subMenuEl = document.querySelectorAll('.gnb .sub-menu');

mainMenuEl.addEventListener('mouseover', function (){
  headerEl.style.height = '300px';

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


// product
const swiper = new Swiper('.product .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수  
  spaceBetween: 20, // 슬라이드 사이 여백(간격) px

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// notice
const swiper = new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: 1, // 한번에 보여줄 슬라이드 갯수  


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


