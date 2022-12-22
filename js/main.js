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

const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function (spyEl) {

  new ScrollMagic.Scene ({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 감시할 요소를 지정
    triggerHook : 0.8 // 화면의 80% 지점에서 보여짐 여부감시(0~1 사이지정)
  })
  .setClassToggle(spyEl, 'show')  // 요소가 화면에 보이면 show 클래스추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당 
});


// // notice
// const swiper = new Swiper('.notice .swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//   slidesPerView: 1, // 한번에 보여줄 슬라이드 갯수  


//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });




