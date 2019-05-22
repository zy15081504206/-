$(window).scroll(function(){
	if($(this).scrollTop()>500){
	$(".fan").css({"display":"block"})
	}else{
		$(".fan").css({"display":"none"})
	}
})
$(".fan").click(function(){
	$("html,body").animate({scrollTop:"0px"},500)
})
var phone = $(".phone").offset().top;
var ben = $(".ben").offset().top;
var ping = $(".ping").offset().top;
var jia = $(".jia").offset().top;
var re = $(".re").offset().top;
var footer = $(".footer").offset().top;

// $(window).scroll(function(){
// 	if($(this).scrollTop()>=phone){
// 		$(".rnav").css({"display":"block"})
// 		console.log($(window).scrollTop())
// 		if($(window).scrollTop()>phone&&$(window).scrollTop()<ben){
// 			$(".phone1").addClass("red3").siblings().removeClass("red3")
// 		}else if($(window).scrollTop()>ben&&$(window).scrollTop()<ping){
// 			$(".notebook1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>ping&&$(window).scrollTop()<jia){
// 			$(".slab1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>jia&&$(window).scrollTop()<re){
// 			$(".acc1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>re&&$(window).scrollTop()<footer){
// 			$(".parts1").addClass("red3").siblings().removeClass("red3")
// 		}
// 	}else{
// 		$(".rnav").css({"display":"none"})
// 	}
	
// })
$(function(){
	$(".hong").mouseenter(function(){
		$(this).css({"color":"red"}).mouseleave(function(){
			$(this).css({"color":"#a4a4a4"})
		})
	})
})
$(function(){
	$(".nav li a").mouseenter(function(){
		$(this).css({"color":"red"}).mouseleave(function(){
			$(this).css({"color":"black"})
		})
	})
})
$(function(){
	$(".nav li a").mouseenter(function(){
		$(this).parent("li").css({"border-bottom":" 2px solid red"})

	$(".nav li a").mouseleave(function(){
		$(this).parent("li").css({"border-bottom":"none"})
		})
	})
})
$(function(){
	$(".bottom li").mouseenter(function(){
		$(this).find(".red4").css({"background":"rgba(238,44,44,0.4)"})
	})
	$(".bottom li").mouseleave(function(){
		$(".red4").css({"background":"rgba(0,0,0,0.4)"})
	})
})
$(function(){
	$(".v").mouseenter(function(){
		$(this).find(".red4").css({"background":"rgba(255,0,0,0.4)"})
	})
	$(".v").mouseleave(function(){
		$(".red4").css({"background":"rgba(0,0,0,0.4)"})
	})
})
$(function(){
	$(".po").mouseenter(function(){
		$(".ma").css({"display":"block"})
	}).mouseleave(function(){
		$(".ma").css({"display":"none"})
	})
	$(".xgwc").mouseenter(function(){
		$(".mini").css({"display":"block"})
	}).mouseleave(function(){
		$(".mini").css({"display":"none"})
	})
})


$(".nav>li").mouseenter(function(){
		var ind=$(this).index();
		$(".xbottom .box1").eq(ind).css("display","block").siblings().css("display","none")
		$(".xbottom").stop().slideDown(1000);
		
	})
$(".nav").mouseleave(function(){
	$(".xbottom").stop().slideUp(1000);
})
