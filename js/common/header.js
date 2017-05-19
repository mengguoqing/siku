

define("header",["jquery"],function($){
	
		return {
			head:function(){
			return	new Promise(function(resolve,reject){
					$.ajax("/siku/html/common/header.html").done(function(data){

						var _data = $(data).filter(".searchBar").find(".searchInput input").keyup(function(){
							 console.log($(this).val());
							var oInput=$($(".searchInput input")[0]);
								$.ajax({
									url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3",
									dataType:"jsonp",
									jsonp:"cb",
									success:function(data){
										console.log(data);
										var lists=data.s;						
										var oUl=$("#tipList");
										console.log(oUl)										
										oUl.html("");
										for(var i in lists){
											var oLi=$("<li></li>");
											oLi.html(lists[i]);
											oUl.append(oLi);
										}
										// $("#tipList").css({
										// 	position:"absolute",
										// 	top:10,
										// 	left:100
										// })
									}
								})

						}).end().end();

						// console.log(data);
						// $("#header").html(data);

							// var oInput=$($(".searchInput input")[0]);
							// oInput.keyup(function(){
							// 	$.ajax({
							// 		url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3",
							// 		dataType:"jsonp",
							// 		jsonp:"cb",
							// 		success:function(data){
							// 			console.log(data);
							// 			var lists=data.s;						
							// 			var oUl=$("#tipList");
							// 			oUl.html("");
							// 			for(var i in lists){
							// 				var oLi=$("<li></li>");
							// 				oLi.html(lists[i]);
							// 				oUl.append(oLi);
							// 			}
							// 		}
							// 	})
							// 	//			二级导航效果
							var _data=$(_data).find(".dl").mouseover(function(){
								//console.log(111)
								$(".dd").css({"visibility":"visible","top":"-2px"})
							}).end();
							var _data=$(_data).mouseout(function(){
								$(".dd").css("visibility","hidden")
							});
							// $("#"+header).html(data);
						resolve(_data);
						
						
					})

				})
				
			}
		}
			// $.ajax("/html/common/header.html").done(function(data){
			// 	//			搜索栏效果
			// 	var oInput=$($(".searchInput input")[0]);
			// 	oInput.keyup(function(){
			// 		$.ajax({
			// 			url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3",
			// 			dataType:"jsonp",
			// 			jsonp:"cb",
			// 			success:function(data){
			// 				console.log(data);
			// 				var lists=data.s;						
			// 				var oUl=$("#tipList");
			// 				oUl.html("");
			// 				for(var i in lists){
			// 					var oLi=$("<li></li>");
			// 					oLi.html(lists[i]);
			// 					oUl.append(oLi);
			// 				}
			// 			}
			// 		})
			// 	});
			// 	//			二级导航效果
			// 	$(".dl").mouseover(function(){
			// 		$(".dd").css({"visibility":"visible","top":"-2px"})
			// 	});
			// 	$(".dl").mouseout(function(){
			// 		$(".dd").css("visibility","hidden")
			// 	});
			// 	$("#"+header).html(data);

			// })

		
	
})







