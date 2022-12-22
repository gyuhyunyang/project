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


window.addEventListener('scroll', function(){
  if (window.scrollY > 100){
    headerEl.classList.add('bg');
  } else {
    headerEl.classList.remove('bg'); 
  }  
});


// div.search 요소 선택시 강제 포커스 및 제어
// 검색창 요소 (.search) 찾기

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function(){
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

});




window.addEventListener('scroll', function(){
  // console.log(window.scrollY);

  if (window.scrollY > 500){
    // badgeEl.style.display = 'none';

    // gsap.to(요소, 시간, 속성) 메소드: css속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });

    // 상단으로 이동 버튼 보이기 
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0 // x축 0px 지점으로 이동
    });
  } else {
    // badgeEl.style.display = 'block'

    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });

    // 상단으로 이동 버튼 숨기기 
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100 // x축 0px 지점으로 이동
    });

  }
})





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
