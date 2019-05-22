$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $(".fan").css({ "display": "block" })
    } else {
        $(".fan").css({ "display": "none" })
    }


})
$(".fan").click(function() {
    $("html,body").animate({ scrollTop: "0px" }, 500)
})
$(window).scroll(function() {
    var snav = $(".snav").offset().top;
    if ($(this).scrollTop() > snav) {
        $(".snav .inner").css({
            "position": "fixed",
            "top": "0"
        })
    } else {
        $(".snav .inner").css({
            "position": "relative"
        })
    }
})
$(".shang1").click(function() {
    var tu = $(".tu").offset().top;
    $("html,body").animate({ scrollTop: tu }, 500)
})
$(".gui1").click(function() {
    var guige = $(".guige").offset().top;
    $("html,body").animate({ scrollTop: guige }, 500)
})
$(".bao1").click(function() {
    var bao = $(".bao").offset().top;
    $("html,body").animate({ scrollTop: bao }, 500)
})
$(".yonghu1").click(function() {
    var ping = $(".yonghu").offset().top;
    $("html,body").animate({ scrollTop: ping }, 500)
})
$(".x1").mouseenter(function() {
    $(".dimg>img").attr("src", "images/1.jpg")
})
$(".x2").mouseenter(function() {
    $(".dimg>img").attr("src", "images/2.jpg")
})
$(".x3").mouseenter(function() {
    $(".dimg>img").attr("src", "images/3.jpg")
})
$(".x4").mouseenter(function() {
    $(".dimg>img").attr("src", "images/4.jpg")
})
$(".x5").mouseenter(function() {
    $(".dimg>img").attr("src", "images/5.jpg")
})
$(function() {
    $(".hong").mouseenter(function() {
        $(this).css({ "color": "red" }).mouseleave(function() {
            $(this).css({ "color": "#a4a4a4" })
        })
    })
})
$(function() {
    $(".nav li a").mouseenter(function() {
        $(this).css({ "color": "red" }).mouseleave(function() {
            $(this).css({ "color": "black" })
        })
    })
})
$(function() {
    $(".nav li a").mouseenter(function() {
        $(this).parent("li").css({ "border-bottom": " 2px solid red" })

        $(".nav li a").mouseleave(function() {
            $(this).parent("li").css({ "border-bottom": "none" })
        })
    })
})
$(function() {
    $(".oo a").click(function() {
        $(this).css({ "border": "1px solid red" }).siblings().css({ "border": "1px solid #a4a4a4" });
    })
})
$(function() {
    $(".p a").click(function() {
        $(this).css({ "border": "1px solid red" }).siblings().css({ "border": "1px solid #a4a4a4" });
    })
    $(".sub").click(function() {
	    var num = Number($("input").val());
	    var x = num - 1;
	    if (x > 1) {
	        x = num - 1
	    } else {
	        x = 0;
	    }
	    $("input").val(x)
	})
	$(".add").click(function() {
	    var num = Number($(".x1 input").val());
	    var v = num + 1;
	    $("input").val(v)
	})
})

