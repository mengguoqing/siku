$(function(){
	$(".zz").focus(function(){
		$(this).parent().css("border-color","red").parent().siblings().children().css("border-color","#ccc");
	})
})
