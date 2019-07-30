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

tabCtrl('.m_wmfz');

tabCtrl('.m_zczy');

  tabCtrl('.m_jmjq');
// 导航
$('.bar li.icon').click(function(){
    $('.nav li').eq($(this).index()).addClass('active').siblings().removeClass('active');
    $('.wrap').fadeIn();
    $('.inner .show').eq($(this).index()-1).slideDown().find('.des').animate({"opacity":"1"},2000);
  });
  $('.nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');

    if($(this).index()==0){
        return;
    }else{
        $('.wrap').fadeIn().css('opacity',"0");
        $('.inner .show').eq($(this).index()-1).slideDown().find('.des').animate({"opacity":"1"},2000);
    }
  });
$('.close').click(function(){
    $('.inner .show').slideUp();
    $('.wrap').fadeOut();
    $('.inner .show').find('.des').animate({"opacity":"0"},1000);
});

  var flag=true;
  $('.bar1').click(function(){
    if(flag){
      $('.nav').slideDown();
      flag=false;
    }else{
      
      $('.nav').slideUp();
      flag=true;
    }
    
  });
  
});