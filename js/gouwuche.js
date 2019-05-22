$(function(){
	$(".hong").mouseenter(function(){
		$(this).css({"color":"red"}).mouseleave(function(){
			$(this).css({"color":"#a4a4a4"})
		})
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
	    var v = 1 + num;
	    $("input").val(v)
	})
})



