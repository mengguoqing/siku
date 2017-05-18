 

define("index",["jquery"],function($){

	$(function(){
		

		//吸顶
		$(window).scroll(function(){
			var scrollTop =$(window).scrollTop();
			if(scrollTop>=720){
				$(".search-w").css("display","block")
				$(".louti").css("display","block")
			}else if(scrollTop<=720){
				$(".search-w").css("display","none")
				$(".louti").css("display","none")
			}
		})
		//楼梯
		var isClick=false;
		$(".louti ul li").click(function(){
			var iTop=$(".loutiti").eq($(this).index()).offset().top;
			$("body,html").stop().animate({scrollTop:iTop},1000)
		})
		$(window).scroll(function(){
				if(!isClick){
					var iScrollTop=$(this).scrollTop();
					$(".loutiti").each(function(){
						if(iScrollTop>=$(this).offset().top){
							$(".louti ul li").eq($(this).index(".loutiti")).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
						}
					})
				}	
			})	
		$(".louti i").click(function(){	
			$("body,html").animate({scrollTop:0},1000)
		})
		//轮播图	

		var iLeft=-iNow*($(".lunbo-ul li")[0].offsetWidth);
		var iNow = 1;
		clearInterval($(".lunbo-ul").timer)
		$(".lunbo-ul").timer=setInterval(function(){
			
			iNow++;
		//	var iLeft=-iNow*($(".lunbo-ul li")[0].offsetWidth);
			$(".lunbo-ul").stop().animate({left:iLeft},1000)
		},2000)

		$(".lunbo").mouseover(function(){
			clearInterval($(".lunbo-ul").timer)
			$(".preve,.next").css("display","block");
			
		})
		$(".lunbo").mouseout(function(){
			$(".preve,.next").css("display","none");
		})
		$(".preve").click(function(){
			$(".lunbo-ul").stop().animate({left:iLeft},1000)
		})
		$(".next").click(function(){
			$(".lunbo-ul").stop().animate({left:iLeft},1000)
		})

	})
})




