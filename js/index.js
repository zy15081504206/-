$(function(){
	$(".xxx a").mouseenter(function(){
		$(this).css({"color":"red"}).mouseleave(function(){
			$(this).css({"color":"#a4a4a4"})
		})
	})
})

$(function(){
	$(".xxx").mouseenter(function(){
		$(this).css({"color":"red"}).mouseleave(function(){
			$(this).css({"color":"#000"})
		})
	})
})
$(function(){
	$(".xxxxx a").mouseenter(function(){
		$(this).css({"color":"red"}).mouseleave(function(){
			$(this).css({"color":"#000"})
		})
	})
})
$(function(){
	$(".xxxx").mouseenter(function(){
		$(this).css({"border-bottom":"2px solid red"}).mouseleave(function(){
			$(this).css({"border":"none"})
		})
	})
})
$(function(){
	$(".xxx1").mouseenter(function(){
		$(".ma").css({"display":"block"})
	}).mouseleave(function(){
		$(".ma").css({"display":"none"})
	})
	$(".xxx2").mouseenter(function(){
		$(".mini").css({"display":"block"})
	}).mouseleave(function(){
		$(".mini").css({"display":"none"})
	})
	$(".zzz li").mouseenter(function(){
		var ind=$(this).index();
		$(".right1 .box1").eq(ind).css("display","block").siblings().css("display","none");
	})
	$(".boox").mouseleave(function(){
		$(".right1 .box1").css("display","none")
	})
	$(".red1").mouseenter(function(){
		$(this).addClass("red2")
	})
	$(".xiao").mouseenter(function(){
		$(this).stop().animate({"margin-top":"-2px"},200)
	})
	$(".xiao").mouseleave(function(){
		$(this).stop().animate({"margin-top":"0"},200)
	})
	$(".shouji").mouseenter(function(){
		$(this).stop().animate({"margin-top":"-2px"},200)
	})
	$(".shouji").mouseleave(function(){
		$(this).stop().animate({"margin-top":"0"},200)
	})
})
$(".red1").mouseleave(function(){
		$(".red1").removeClass("red2");
})
$(function(){
	$(".snav a").mouseenter(function(){
		$(this).css({"color":"red"}).mouseleave(function(){
			$(this).css({"color":"#a4a4a4"})
		})
	})
})
$(function(){
	$(".snav a").mouseenter(function(){
		$(this).css({"border-bottom":"2px solid red"}).mouseleave(function(){
			$(this).css({"border":"none"})
		})
	})
})
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
	var notebook = $(".notebook").offset().top;
	var slab = $(".slab").offset().top;
	var watch = $(".watch").offset().top;
	var fur = $(".fur").offset().top;
	var acc = $(".acc").offset().top;
	var parts = $(".parts").offset().top;
	var lbanner = $(".lbanner").offset().top;
// $(window).scroll(function(){
// 	if($(this).scrollTop()>=phone){
// 		$(".rnav").css({"display":"block"})
// 		console.log($(window).scrollTop())
// 		if($(window).scrollTop()>phone&&$(window).scrollTop()<notebook){
// 			$(".phone1").addClass("red3").siblings().removeClass("red3")
// 		}else if($(window).scrollTop()>notebook&&$(window).scrollTop()<slab){
// 			$(".notebook1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>slab&&$(window).scrollTop()<watch){
// 			$(".slab1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>watch&&$(window).scrollTop()<fur){
// 			$(".watch1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>fur&&$(window).scrollTop()<acc){
// 			$(".fur1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>acc&&$(window).scrollTop()<parts){
// 			$(".acc1").addClass("red3").siblings().removeClass("red3")
// 		}
// 		else if($(window).scrollTop()>parts&&$(window).scrollTop()<lbanner){
// 			$(".parts1").addClass("red3").siblings().removeClass("red3")
// 		}
// 	}else{
// 		$(".rnav").css({"display":"none"})
// 	}
	
// })

$(function(){
	var count=0;
	$(".rrr").click(function(){
		count = count + 1;
		if(count>= 3){
			count = 2;
		}
		$(".sbox9").stop().animate({"margin-left":count*(-1200)})
	})
	$(".lll").click(function(){
		count = count - 1;
		if(count<= 0){
			count = 0;
		}
		$(".sbox9").stop().animate({"margin-left":count*(-1200)})
	})
			

/*广告轮播图*/
	$(".bottom2 li").mouseenter(function(){
		var i = $(this).index()
		var path = "url(images/banner0"+i+".jpg)"
		$(".banner").css({"background-image":path})
		$(this).addClass("bai").siblings().removeClass("bai");
	})
})	
// 右边导航
if($("body").width()<1250){
	$(".rnav").css({"display":"none"})
}else{
	$(window).scroll(function(){
	if($(this).scrollTop()>=phone){
		$(".rnav").css({"display":"block"})
		console.log($(window).scrollTop())
		if($(window).scrollTop()>phone&&$(window).scrollTop()<notebook){
			$(".phone1").addClass("red3").siblings().removeClass("red3")
		}else if($(window).scrollTop()>notebook&&$(window).scrollTop()<slab){
			$(".notebook1").addClass("red3").siblings().removeClass("red3")
		}
		else if($(window).scrollTop()>slab&&$(window).scrollTop()<watch){
			$(".slab1").addClass("red3").siblings().removeClass("red3")
		}
		else if($(window).scrollTop()>watch&&$(window).scrollTop()<fur){
			$(".watch1").addClass("red3").siblings().removeClass("red3")
		}
		else if($(window).scrollTop()>fur&&$(window).scrollTop()<acc){
			$(".fur1").addClass("red3").siblings().removeClass("red3")
		}
		else if($(window).scrollTop()>acc&&$(window).scrollTop()<parts){
			$(".acc1").addClass("red3").siblings().removeClass("red3")
		}
		else if($(window).scrollTop()>parts&&$(window).scrollTop()<lbanner){
			$(".parts1").addClass("red3").siblings().removeClass("red3")
		}
	}else{
		$(".rnav").css({"display":"none"})
	}
	
})
}