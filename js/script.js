$(function(){

    //메뉴 슬라이드 다운,업

/*     
    $('.nav > ul > li').mouseover(function(){
        $('.nav > ul > li> ul').stop().slideDown(400);
    });
    $('.nav > ul > li').mouseout(function(){
        $('.nav > ul > li> ul').stop().slideUp(400);
    }); 
*/

    //메뉴 하나씩 떨어지도록
    $('.nav > ul > li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('.nav > ul > li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });

    
    //슬라이드 배너
    var banner = $('#banner li');
    var current = 0; //현재 보여지는 상태의 순번을 첫번째 0으로 초기화

    setInterval(function(){
        var prev = banner.eq(current); //현재 보여지는 배너를 prev라고하고
        move(prev,0,'100%');

        current++; //1씩증가

        //배너의 순번이 끝까지 찼다면 다시 순번 0으로 초기화
        //size()는 배너의 갯수
        if(current==banner.size()){current=0}

        var next = banner.eq(current);
        move(next,'-100%',0);
    },2000);

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},400);
    }

    //탭메뉴
    var tab = $('.tab>li');
    var content = $('.tab_con>div');

    content.hide().eq(0).show();

    //탭메뉴를 클릭했을 때 해당 컨텐츠가 보여지도록~~

    tab.click(function(e){
        e.preventDefault();

        var tg = $(this);
        var i = tg.index()

        //활성화된 버튼에 컬러주기
        tab.removeClass('active');
        tg.addClass("active");

        //탭메뉴에 클릭한 대상의 순번 i의 컨텐츠 영역만 보여지도록
        content.css("display","none");
        content.eq(i).css("display","block");

    });


    //모달팝업
    //게시판의 첫번째 목록을 클릭했을 때 모달팝업 띄우기
    $('#contents .popup').click(function(){
        $('.pop').css("display","block");
        $('.pop button').css("cursor","pointer");

    });
    $('.pop button').click(function(){
        $('.pop').css("display","none");
    });

});