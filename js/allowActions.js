//AllowActions 二级权限
	//认证机构
		var userToOpCfOrgAllow = function(data){
			// $(".mdOpCfOrgEditBtn").show();
			// $(".mdOpCfOrgDelBtn").show();
			// if ( data.root.allowActions.indexOf("Modify")> -1 ) { $(".mdOpCfOrgEditBtn").show(0); 	} else { $(".mdOpCfOrgEditBtn").show(0); }
			// if ( data.root.allowActions.indexOf("Delete")	> -1 ) { $(".mdOpCfOrgDelBtn").show(); 	} else { $(".mdOpCfOrgDelBtn").show(); }
		}
	//订单列表详情操作权限
		var userToOmListAllow = function(data){
			if ( data.root.allowActions.indexOf("Modify") 		> -1 ) { $(".mdOmEditBtn").show(0); 	} else { $(".mdOmEditBtn").hide(0); }
			if ( data.root.allowActions.indexOf("Delete") 		> -1 ) { $(".mdOmDelBtn").show(0); 	} else { $(".mdOmDelBtn").hide(0); }
			if ( data.root.allowActions.indexOf("SetState") 	> -1 ) { $(".mdOmSetStateBtn").show(0); 	} else { $(".mdOmSetStateBtn").hide(0); }
			$(".mdOmEvaluateBtn").hide(0);
			// if ( data.root.allowActions.indexOf("Evaluate") 	> -1 ) { $(".mdOmEvaluateBtn").show(0); 	} else { $(".mdOmEvaluateBtn").hide(0); }
		}