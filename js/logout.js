$(function(){
	$(".user_setting .exit").click(function(){
		layer.confirm("确定退出登录?",{
			title : '提示',
			move : false
		},function(index){
			// var loadIngTips = setTimeout(function(){
			// 	layer.msg('<i class="fa fa-spinner fa-spin"></i>Exiting...',{
			// 		time : 5*60*1000,
			// 		shade : [ 0.4, '#000',true ],	//控制遮罩  0.4:遮罩透明度,’#000′:遮罩颜色,true:是否遮罩(否:false)
			// 	});
			// },10);
			var userLogout = {
				type : "get",
				url : 'user/logout',
				dataJson : { token : boss_token }
			}
			bugAjax(userLogout,function(data){
				console.log(data);
				if (data.success)  {
					// layer.msg('Exit Success');
					bugStorage.delItem('token');
					window.location.href = '/boss/login.html';
				} else {
					errorType(data);
				}
				// clearTimeout(loadIngTips);
			});
		})
		$(".layui-layer-setwin a").removeClass("layui-layer-ico").addClass("fa fa-remove");
	})


})