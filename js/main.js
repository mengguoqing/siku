require.config({      //配置
      paths:{    //资源路径
          "jquery":"/siku/lib/jquery-1.12.3",  //src不加后缀js
          "header":"/siku/js/common/header",
          "index":"/siku/js/index"
     }
});

require(["jquery","header","index"], function($, h, i){

	// console.log($)
})