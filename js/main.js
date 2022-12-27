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



// div.search 요소 선택시 강제 포커스 및 제어
// 검색창 요소 (.search) 찾기
const searchEl = document.querySelector('.btn-search');
const searchInputEl = searchEl.querySelector('input');


// js
// 검색창 요소를 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function(){
  searchInputEl.style.visibility = "visible";
  searchInputEl.focus();
  });
  
  // input요소에 포커스되면 실행
  searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  });
  
  // input요소에 포커스가 해제(블러)되면 실행
  searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  searchInputEl.style.visibility = "hidden";
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






const allMenuEl = document.querySelector('.all-menu');


body.addEventListenerr('click', function() {
  allMenuEl.classList.remove('.active');
})

