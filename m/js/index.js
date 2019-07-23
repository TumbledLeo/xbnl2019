$(function(){
  var music = document.getElementById('aud');
  var music1 = document.getElementById('aud1');
  var music2 = document.getElementById('aud2');
  var music3 = document.getElementById('aud3');
  var music4 = document.getElementById('aud4');
  var music5 = document.getElementById('aud5');
  var music6 = document.getElementById('aud6');

  $('.music_bg').click(function(){
    $('.more_audio li').removeClass('active');
        music1.pause();
        music2.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music6.pause();  
    if($(this).hasClass('play')){
        music.pause();
        $(this).find('img').attr("src","images/play.png");
        $(this).removeClass('play');
    }else{
        music.play(); 
        console.log(0);
        $(this).addClass('play'); 
        $(this).find('img').attr("src","images/music.png");
        $('.pl').find('img').attr("src","images/sj.png");
    }       
    });
  $('.more_audio li').click(function(){
        music.pause();
        $('.music_bg').find('img').attr("src","images/play.png");
        $('.music_bg').removeClass('play');

        $('.more_audio li').removeClass('active');
        $(this).addClass('active');
        music.pause();
        music1.pause();
        music2.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music6.pause();
       
        if($(this).index()==0){
            music1.play();
        }else if($(this).index()==1){
            music2.play();
            console.log(2);
        }else if($(this).index()==2){
            music3.play();
            console.log(3);
        }else if($(this).index()==3){
            music4.play();
            console.log(4);
        }else if($(this).index()==4){
            music5.play();
            console.log(5);
        }else if($(this).index()==5){
            music6.play();
            console.log(6);
        }
    }); 
    // tab切换
  function tabCtrl(ele) {
    $(ele + ' .tabContents .tabContent').hide().eq(0).show();
    $(ele + ' .tabs .tab').eq(0).addClass('active');
    $(ele + ' .tabs .tab').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        var me = $(this);
        var index = 0;
        $(ele + ' .tabs .tab').each(function (i) {
            if (me.get(0) === $(this).get(0)) {
                index = i;
            }
        });
        $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
    });
  }
  tabCtrl('.wmfz_c');
  tabCtrl('.jmjq_c');
  tabCtrl('.zczy_c');
  $('.close').click(function(){
      $(this).parents('.des').slideUp();

  });
  $('.down').click(function(){
      $(this).next('.des').slideDown();
  });
            
            var startY = 0;
            document.addEventListener("touchstart",function(e){
                startY = e.changedTouches[0].pageY;
            },false);
            document.addEventListener("touchend",function(e){
                    var endY = e.changedTouches[0].pageY;
                    var changeVal = endY - startY;
                    if(endY < startY){//向上滑
                        //alert("向上滑");
                    }else if(endY > startY){//向下滑
                       $('.down').next('.des').slideDown();
                    }else{
                        //alert("没有偏移");
                    }
                },false);
    $('.cl').click(function(){
        $('.nav_list').slideUp();
    });
    $('.nav').click(function(){
        $('.nav_list').slideDown();
    });
    
});