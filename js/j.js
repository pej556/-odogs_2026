$(function(){

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




//메인뷰 슬라이드
$(document).ready(function() {
    let isAnimated = false; // 중복 클릭 방지
    let timer = null;

    // 현재 화면에 실제로 노출되고 있는 active 'ul'을 찾아내는 함수
    function getActiveUl() {
        let $activeUl = null;

        // 1. 태블릿 메뉴(.tab_main_view)가 화면에 보이고 있다면 그 안의 ul을 선택
        if ($('.tab_main_view').is(':visible')) {
            $activeUl = $('.tab_main_view ul');
        } else {
            // 2. 태블릿 메뉴가 숨겨져 있다면 PC용 ul(.pc_main_view)을 선택
            $activeUl = $('.pc_main_view');
        }
        return $activeUl;
    }

    // [다음 슬라이드] 함수
    function nextSlide() {
        if (isAnimated) return;
        const $ul = getActiveUl();
        if (!$ul || $ul.length === 0) return;

        isAnimated = true;
        const $firstLi = $ul.children('li').first();
        const width = $ul.parent().width(); // 부모 엘리먼트의 정확한 가로폭(100%) 기준

        $ul.animate({ marginLeft: -width }, 500, function() {
            $ul.append($firstLi);
            $ul.css('marginLeft', 0);
            isAnimated = false;
        });
    }

    // [이전 슬라이드] 함수
    function prevSlide() {
        if (isAnimated) return;
        const $ul = getActiveUl();
        if (!$ul || $ul.length === 0) return;

        isAnimated = true;
        const $lastLi = $ul.children('li').last();
        const width = $ul.parent().width();

        $ul.prepend($lastLi);
        $ul.css('marginLeft', -width);
        $ul.animate({ marginLeft: 0 }, 500, function() {
            isAnimated = false;
        });
    }

    // 자동 슬라이드 시작 (3초)
    function startTimer() {
        if (!timer) {
            timer = setInterval(nextSlide, 4000);
        }
    }

    // 자동 슬라이드 정지
    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    // 버튼 클릭 이벤트 (이전/다음)
    $(document).on('click', '.view_next', function(e) {
        e.preventDefault();
        stopTimer();
        nextSlide();
        startTimer();
    });

    $(document).on('click', '.view_prev', function(e) {
        e.preventDefault();
        stopTimer();
        prevSlide();
        startTimer();
    });

    // 화면 크기 바뀔 때 위치 오작동 방지 리셋
    $(window).on('resize', function() {
        $('.main_view ul').css('marginLeft', 0);
    });

    // 최초 실행
    startTimer();
});
  












/*
let auto = setInterval(next, 3000);

function next(){
  let w = $(".re_box li").outerWidth(true);

  $(".re_box ul").stop().animate({ left: -w }, 500, "swing", function(){
    $(".re_box ul li:first").appendTo(".re_box ul");
    $(".re_box ul").css("left", 0);
  });
}

function prev(){
  let w = $(".re_box li").outerWidth(true);

  $(".re_box ul li:last").prependTo(".re_box ul");
  $(".re_box ul").css("left", -w);

  $(".re_box ul").stop().animate({ left: 0 }, 500, "swing");
}

// 버튼
$(".next").click(function(){
  next();
});

$(".prev").click(function(){
  prev();
});*/
  

});


