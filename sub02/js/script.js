//문서열고 실행
$(function(){

  //ScrollGiveClass 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline :100 //화면을 100px 내려가면 클래스가 부여되게함
});


 //돋보기
  $(".pp").click(function(){
    $(".search_box").show();
    return false;
  });
  

  $(".close").click(function(){
     $(".search_box").hide();
  });


  //위로가기
  $(".top").on("click",function(){
  $('html, body').animate({
  scrollTop : 0
  },900)
  return false;
  });


    //태블릿 헤더메뉴 열기
  $(".tab_btn").click(function () {
  if ($(".tab_menu_bar").is(":visible")) {
    $(".tab_menu_bar").hide();
  } else {
    $(".tab_menu_bar").show();
  }
  return false;
});
  
//태블릿 헤더메뉴 스크롤
$(".tab_menu_bar span").click(function(){
    $(this).parent().next().slideToggle();
});




})


