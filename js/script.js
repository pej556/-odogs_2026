


//문서열고 실행
$(function(){

  //ScrollGiveClass 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline :100 //화면을 100px 내려가면 클래스가 부여되게함
});


})



//공지사항
const noticeSwiper = new Swiper('.notice_txt', {
  direction: 'vertical',
  loop: true,

  slidesPerView: 1,
  spaceBetween: 0,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  speed: 600,

  navigation: {
    nextEl: '.notice_btn .swiper-button-next',
    prevEl: '.notice_btn .swiper-button-prev',
  },
});




//위로가기
let goTop = new EzenScroll(".top");




//리뷰 슬라이드
const swiper2 = new Swiper('.re_box', {
  // Optional parameters
  //direction: 'horizontal',
  slidesPerView:4,
  spaceBetween: 23,
  loop: true,




  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 12
    },

    856: {
      slidesPerView: 3,
      spaceBetween: 18
    },

    1290: {
      slidesPerView: 4,
      spaceBetween: 23
    }
    },



  //자동재생
    autoplay: {
    delay: 2000,
  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});