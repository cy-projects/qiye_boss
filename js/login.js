$(function(){
	$(document).keyup(function(event){
		if ( event.keyCode == 13 ){
			var userName = $("#userName").val();
			var pwd = $("#pwd").val();
			if ( userName == '' && pwd == '' ){
				$(".userName_inputTips").html('<i class="fa fa-times-circle"></i> 用户名不能为空');
				$(".pwd_inputTips").html('<i class="fa fa-times-circle"></i> 密码不能为空');
			} else if ( userName != '' && pwd == '' ){
				$(".userName_inputTips").html('');
				$(".pwd_inputTips").html('<i class="fa fa-times-circle"></i> 密码不能为空');
			} else if ( userName == '' && pwd != '' ){
				$(".userName_inputTips").html('<i class="fa fa-times-circle"></i> 用户名不能为空');
				$(".pwd_inputTips").html('');
			} else if ( userName != '' && pwd != '' ){
				$(".userName_inputTips").html('');
				$(".pwd_inputTips").html('');
				$('#login_btn').attr('disabled','disabled').css('opacity',.45).text('登陆中...');
				$.ajax({
					url: '/cgi/manager/login',
					type: 'post',
					data: {
						username: userName,
						password: pwd
					},
					success: function(data){
						console.log(data);
						if ( data.success ){
							bugStorage.setItem('boss_token', data.root);
							if ( bugStorage.getItem('boss_bugInfoUrl') != null ) {
								var newUrl=bugStorage.getItem("boss_bugInfoUrl");
								bugStorage.delItem("boss_bugInfoUrl");
								window.locationhref.href = newUrl;
							} else {
								window.location.href = '/boss/console.html';
							}
							$("#changePwdBtn").removeAttr('disabled').removeAttr('style').text('提交');
						} else {
							errorType(data);
							$("#changePwdBtn").removeAttr('disabled').removeAttr('style').text('提交');
						}
						
					}
				})
			}
		}
	})







	$("#userLoginForm").submit(function(){
		var userName = $("#userName").val();
		var pwd = $("#pwd").val();
		if ( userName == '' && pwd == '' ){
			$(".userName_inputTips").html('<i class="fa fa-times-circle"></i> 用户名不能为空');
			$(".pwd_inputTips").html('<i class="fa fa-times-circle"></i> 密码不能为空');
		} else if ( userName != '' && pwd == '' ){
			$(".userName_inputTips").html('');
			$(".pwd_inputTips").html('<i class="fa fa-times-circle"></i> 密码不能为空');
		} else if ( userName == '' && pwd != '' ){
			$(".userName_inputTips").html('<i class="fa fa-times-circle"></i> 用户名不能为空');
			$(".pwd_inputTips").html('');
		} else if ( userName != '' && pwd != '' ){
			$(".userName_inputTips").html('');
			$(".pwd_inputTips").html('');
			$('#login_btn').attr('disabled','disabled').css('opacity',.45).text('登陆中...');
			$.ajax({
				url: '/cgi/manager/login',
				type: 'post',
				data: {
					username: userName,
					password: pwd
				},
				success: function(data){
					console.log(data);
					if ( data.success ){
						bugStorage.setItem('boss_token', data.root);
						if ( bugStorage.getItem('bugInfoUrl') != null ) {
							var newUrl=bugStorage.getItem("bugInfoUrl");
							bugStorage.delItem("bugInfoUrl");
							window.locationhref.href = newUrl;
						} else {
							window.location.href = '/boss/console.html';
						}
						$("#changePwdBtn").removeAttr('disabled').removeAttr('style').text('提交');
					} else {
						errorType(data);
						$("#changePwdBtn").removeAttr('disabled').removeAttr('style').text('提交');
					}
					
				}
			})
		}
		return false;
	})

})
