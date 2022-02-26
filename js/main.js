$(document).ready(function(){
    // $(".loadingCover").delay(3000).fadeOut();
    $(".coverpage").on("mousewheel DOMMouseScroll",function(e){
        var evt = e.originalEvent;
        delta = 0;
        if(evt.detail){
            delta = evt.detail * -40;
        }
        else{
            delta = evt.wheelDelta;
        }
        var contentsTop = $(".main").offset().top;
        if(delta<0){
            $("html,body").clearQueue().animate({scrollTop:contentsTop},1000);
        }

        $(".main > div").on("mousewheel DOMMouseScroll",function(e){
            var evt = e.originalEvent;
            delta = 0;
            if(evt.detail){
            delta = evt.detail * -40;
            }else{
            delta = evt.wheelDelta;
            }
        
            if(delta>0){
            var crTop = $(window).scrollTop();
            var introTop = $(".section_01").offset().top;
            if(crTop == introTop){
                $("html,body").clearQueue().animate({scrollTop:0},1000);
            }else{
                var targetTop = $(this).prev().offset().top;
                // $("html,body").animate({scrollTop:targetTop},1000);
                $("html,body").clearQueue().animate({scrollTop:targetTop},1000);
            }
        
            }else{
            var targetTop = $(this).next().offset().top;
            // $("html,body").animate({scrollTop:targetTop},1000);
            $("html,body").clearQueue().animate({scrollTop:targetTop},1000);
            }
        });
        /* scroll */
        let maxScrollValue;
        function resizeHandler() {
            maxScrollValue = document.body.offsetHeight - window.innerHeight;
        }
        window.addEventListener('scroll', function() {
            console.log(pageYOffset/maxScrollValue);
        })
        window.addEventListener('resize', resizeHandler);
            resizeHandler()
    });

    $(window).scroll(function(){
        var currentTop = $(window).scrollTop();

        if(currentTop >= 500){
            $(".menuBtn").addClass("on");
          }else{
            $(".menuBtn").removeClass("on");
          }

        if(currentTop >= 1200){
          $(".topBtn").addClass("on");
        }else{
          $(".topBtn").removeClass("on");
        }

        $('.topBtn').click(function(e){
            e.preventDefault();
            var scrolltarget = $($(this).attr("data-target")).offset().top;
            $('html').animate({
                scrollTop: scrolltarget
            }, 0);
        });

        /* scroll opcatiy */
        $('.intro_con').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'}, 3000);
            }
        });
        $('.portfolio_con').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'}, 2000);
            }
        });
        $('.portfolio_con2').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'}, 2000);
            }
        });
    })
    var menuStatus = false;
    $(".menuBtn > .menu").click(function(){
        if(menuStatus == false){
            $(".menuBtn > ul").addClass("on");
            $(".menu > p").text("CLOSE");
            menuStatus = true;
        }
        else{
            $(".menuBtn > ul").removeClass("on");
            $(".menu > p").text("MENU");
            menuStatus = false;
        }
    });

    $(".menuBtn > ul > li > a").click(function(){
        var obj = $(this).attr("href");
        var posTop = $(obj).offset().top;
        $("html,body").animate({scrollTop:posTop},800);
    });
    

    var particles = document.getElementById("particles");
    var border = ["50%","0%"];
    var colors = ["#FF6B6B","#FFE66D","#4472CA"];

    function createParticle(event){
        var x = event.clientX;
        var y = event.clientY;
        var color = Math.floor(Math.random() * 3);

        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.marginLeft = x+"px";
        div.style.marginTop = y+"px";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.animation = "move 5s ease-in infinite";
        particles.appendChild(div);
        setTimeout(
            function(){
                div.remove();
            }
        , 5000);
    }

    function getParticles(){
        var np = document.documentElement.clientWidth / 30;
        particles.innerHTML = "";
        for (var i = 0; i < np; i++) {
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            var rndw = Math.floor(Math.random() * w ) + 1;
            var rndh = Math.floor(Math.random() * h ) + 1;
            var widthpt = Math.floor(Math.random() * 12) + 7;
            var opty = Math.floor(Math.random() * 4) + 1;
            var anima = Math.floor(Math.random() * 12) + 8;
            var bdr = Math.floor(Math.random() * 2);
            var color = Math.floor(Math.random() * 3);

            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.marginLeft = rndw+"px";
            div.style.marginTop = rndh+"px";
            div.style.width = widthpt+"px";
            div.style.height = widthpt+"px";
            div.style.opacity = opty;
            div.style.backgroundColor = colors[color];
            div.style.borderRadius = border[bdr];
            div.style.animation = "move "+anima+"s ease-in infinite";
            particles.appendChild(div);
        }
    }

    function converpage_main(event){
        getParticles();
    }

    window.addEventListener("resize", converpage_main);
    window.addEventListener("load", converpage_main);

});

/* image change */
$(function(){
    $('.miff_smallImg').on({
        "click" : function(){
            var imgSrc = $(this).attr('src');
            $('#miff_bigImg').fadeOut(200, function(){
                $('#miff_bigImg').attr('src',imgSrc).fadeIn(1500);
            })
        }
    }); 
    $('.mhf_smallImg').on({
        "click" : function(){
            var imgSrc = $(this).attr('src');
            $('#mhf_bigImg').fadeOut(200, function(){
                $('#mhf_bigImg').attr('src',imgSrc).fadeIn(1500);
            })
        }
    });
    $('.balmuda_smallImg').on({
        "click" : function(){
            var imgSrc = $(this).attr('src');
            $('#balmuda_bigImg').fadeOut(200, function(){
                $('#balmuda_bigImg').attr('src',imgSrc).fadeIn(1500);
            })
        }
    });             
});