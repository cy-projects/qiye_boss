$(function(){
//系统数据
	$(".sdOutline").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_systemOutline',
			success: function(){
				// opCfProjectHomeFn();
			}
		})
	})
//认证项目
	$(".opCfProject").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opCfProject',
			success: function(){
				opCfProjectHomeFn();
				slimScrollFn();
			}
		})
	})
//企业认证人数
	$(".opCfPeoNum").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opCfPeoNum',
			success: function(){
				opCfPeoNumHomeFn();
			}
		})
	})
//认证机构
	$(".opCfOrg").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opCfOrg',
			success: function(){
				opCfOrgHomeFn();
			}
		})
	})
//有无设计
	$(".opIsDesign").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opIsDesign',
			success: function(){
				opIsDesignHomeFn();
			}
		})
	})
//获证时间周期
	$(".opCfCycle").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opCfCycle',
			success: function(){
				opCfCycleHomeFn();
			}
		})
	})
//法律法规文件
	$(".opcfLaw").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMian_opcfLaw',
			success: function(){
				opcfLawHomeFn();
			}
		})
	})
//有无许可证要求
	$(".opIsLicense").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMian_opIsLicense',
			success: function(){
				opIsLicenseHomeFn();
			}
		})
	})
//城市选择
	$(".opCfCity").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMian_opCfCity',
			success: function(){
				opCfCityHomeFn();
			}
		})
	})
//发票需求
	$(".opCfInvoice").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMian_opCfInvoice',
			success: function(){
				opCfInvoiceHomeFn();
			}
		})
	})
//配合度
	$(".opCfCooperation").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opCfCooperation',
			success: function(){
				opCfCooperationHomeFn();
			}
		})
	})
//需上门洽谈
	$(".opVisit").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opVisit',
			success: function(){
				opVisitHomeFn();
			}
		})
	})
//参数说明
	$(".opDescription").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opDescription',
			success: function(){
				opDescriptionHomeFn();
			}
		})
	})
//参数说明
	$(".opSetting").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opSetting',
			success: function(){
				opSettingHomeFn();
			}
		})
	})
//用户列表
	$(".userList").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_user',
			success: function(){
				userCountFn();
			}
		})
	})
//订单列表
	$(".omList").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_omList',
			success: function(){
				omListCountFn();
				slimScrollFn();
			}
		})
	})
//系统列表
	$(".opSymSetting").click(function(){
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_opSymSetting',
			success: function(){
				opSymSettingListHomeFn();
				slimScrollFn();
			}
		})
	})












})