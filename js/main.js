// 헤더효과
const headerEl = document.querySelector('header');
const mainMenuEl = document.querySelector('.gnb > .main-menu');
const subMenuEl = document.querySelectorAll('.gnb .sub-menu');


mainMenuEl.addEventListener('mouseover', function (){
  headerEl.style.height = '300px';
  headerEl.classList.add('bg');

  subMenuEl.forEach(function(subMenuEl) {
    subMenuEl.style.opacity='1';
    subMenuEl.style.visibility = 'visible';
  });
});

headerEl.addEventListener('mouseleave', function (){
  headerEl.style.height = '100px';
  headerEl.classList.remove('bg');

  subMenuEl.forEach(function(subMenuEl) {
    subMenuEl.style.opacity='0';
    subMenuEl.style.visibility = 'hidden';
  });
});





// 스크롤시 bg넣기
window.addEventListener('scroll', function(){
  if (window.scrollY > 10){
    headerEl.classList.add('bg2');
  } else {
    headerEl.classList.remove('bg2'); 
  }  
});

// 햄버거버튼
const btnHamburger = document.querySelector('.btn-hamburger');
const allEl = document.querySelector('.all-menu');

btnHamburger.addEventListener('click', function(){
  allEl.classList.toggle('active')
})

// 닫기버튼
const btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', function() {
  allEl.classList.remove('active');
});


// 비주얼
const visualSwiper = new Swiper('.visual .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초 마다 슬라이드 바뀜
   },
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


// product
const productSwiper = new Swiper('.product .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 2000 // 5초 마다 슬라이드 바뀜
   },
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수  
  spaceBetween: 20,  // 슬라이드 사이 여백(간격) px
 
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

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


// notice
const noticeSwiper = new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'horizontal',
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



// 현재 연도 표시
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); //





const toTopEl = document.querySelector('.top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.6,{
    scrollTo: 0 // 페이지의 0px 지점(최상단)으로 이동
  });
});

// window : 브라우저 창 객체
window.addEventListener('scroll', function(){
  // console.log(window.scrollY);

  if (window.scrollY > 500){

    // 상단으로 이동 버튼 보이기 
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0 // x축 0px 지점으로 이동
    });
  } else {

    // 상단으로 이동 버튼 숨기기 
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100 // x축 0px 지점으로 이동
    });

  }
})






