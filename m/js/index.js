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
  var open0 = true;
  var open1 = true;
  var open2 = true;
  var open3 = true;
  var open4 = true;
  var open5 = true;
  $('.more_audio li').click(function(){
        music.pause();
        $('.music_bg').find('img').attr("src","images/play.png");
        $('.music_bg').removeClass('play');

        $('.more_audio li').removeClass('active');
        
        music.pause();
        music1.pause();
        music2.pause();
        music3.pause();
        music4.pause();
        music5.pause();
        music6.pause();
       
        
        if($(this).index()==0){
            if(open0){
                music1.play();
                $(this).addClass('active');
                open0=false;
            }else{
                music1.pause();
                $(this).removeClass('active');
                open0=true;
            }
            
        }else if($(this).index()==1){
            if(open1){
                music2.play();
                $(this).addClass('active');
                open1=false;
            }else{
                music2.pause();
                $(this).removeClass('active');
                open1=true;
            }
            console.log(2);
        }else if($(this).index()==2){
            if(open2){
                music3.play();
                $(this).addClass('active');
                open2=false;
            }else{
                music3.pause();
                $(this).removeClass('active');
                open2=true;
            }
            console.log(3);
        }else if($(this).index()==3){
            if(open3){
                music4.play();
                $(this).addClass('active');
                open3=false;
            }else{
                music4.pause();
                $(this).removeClass('active');
                open3=true;
            }
            console.log(4);
        }else if($(this).index()==4){
            if(open4){
                music5.play();
                $(this).addClass('active');
                open4=false;
            }else{
                music5.pause();
                $(this).removeClass('active');
                open4=true;
            }
            console.log(5);
        }else if($(this).index()==5){
            if(open5){
                music6.play();
                $(this).addClass('active');
                open5=false;
            }else{
                music6.pause();
                $(this).removeClass('active');
                open5=true;
            }
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


  
//   $('.down').click(function(){
//       $(this).next('.des').slideDown();
//   });
            
//             var startY = 0;
//             document.addEventListener("touchstart",function(e){
//                 startY = e.changedTouches[0].pageY;
//             },false);
//             document.addEventListener("touchend",function(e){
//                     var endY = e.changedTouches[0].pageY;
//                     var changeVal = endY - startY;
//                     if(endY < startY){//向上滑
//                         //alert("向上滑");
//                     }else if(endY > startY){//向下滑
//                        $('.down').next('.des').slideDown();
//                     }else{
//                         //alert("没有偏移");
//                     }
//                 },false);
    $('.cl').click(function(){
        $('.nav_list').slideUp();
    });
    $('.nav').click(function(){
        $('.nav_list').slideDown();
    });

    function tabCtrl1(ele) {
        $(ele + ' .tabContents .tabContent').css('visibility','hidden').eq(0).css('visibility','visible');
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
            $(ele + ' .tabContents .tabContent').css('visibility','hidden').eq(index).css('visibility','visible');
        });
      }
      tabCtrl1('.zczy_c');
      tabCtrl1('.jmjq_c');
      $('.djkd_b').click(function(){
          $('.meng').fadeOut();
          $(this).fadeOut();
          $('.navbar').fadeIn();
          $('.dp').fadeIn();
      });
      $('.navbar li').click(function(){
        $('.big .show').css("top",'-150%').eq($(this).index()).animate({"top":'0'},1000);
      });
      $('.close').click(function(){
        $('.big .show').animate({"top":'-150%'},1000);
        });
    $('.nav_list li.list').click(function(){
        $('.nav_list').slideUp();
       console.log($(this).index());
       $('.big .show').css("top",'-150%').eq($(this).index()-1).animate({"top":'0'},1000);
      });
});
