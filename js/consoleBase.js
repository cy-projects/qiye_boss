$(function(){
	slimScrollFn();
	// sidebarHeight( $(".systemData"), 		50 );
	sidebarHeight( $(".orderParameter"), 	70 );
	sidebarHeight( $(".userManagement"), 	70 );
	sidebarHeight( $(".orderManagement"), 	50 );
	// sidebarHeight( $(".systemManagement"), 	70 );
//头部用户名详情 下拉小箭头
	$(".username_wrap").click(function(event){
		if ( $(".user_setting").is(":hidden") ) {
			$(".user_setting").stop().slideDown();
		} else {
			$(".user_setting").stop().slideUp();
		}
	})
	$(document).click(function(event){
		var target = $(event.target);
		if(target.closest('.username_wrap,.user_setting').length != 0){
			if(target.closest('.change_password,.user_setting .exit').length == 0){
				return false;
			}
		}else{
			$(".user_setting").stop().slideUp();
		}
	})
//侧边栏切换动画效果
	$(".side_menu_item >li").click(function(){
		sidebarAnimateFn($(this));
		$(".bugMain").html('');
		$(".bugContent").css({ 'left': '250px', opacity: 0 });
		$(".bugContent").animate({ 'left': '220px', opacity: 1 },700);
		setTimeout(function(){
			sliderBarShowBodyWidthFn($(".main_table >thead th"));
			slimScrollFn();
		},150);
	})
//侧边栏左右收放
	$(".hiddenSidebar").click(function(){
		if ( $(".hiddenSidebar").attr("data-value") == 1 ) {
			$(".hiddenSidebar").attr("data-value",2);
			$(".headerLogo, .sidebar").stop().animate({ left: '-220px' });
			$(".headerRight, .bugContent").stop().animate({ left: 0 });
			$(".hiddenSidebar").addClass("hiddenSidebar_animate");
			sliderBarHiddenBodyWidthFn( $(".main_table >thead th") );
		} else if ( $(".hiddenSidebar").attr("data-value") == 2 ) {
			$(".hiddenSidebar").attr("data-value",1);
			$(".headerLogo, .sidebar").stop().animate({ left: 0 });
			$(".headerRight, .bugContent").stop().animate({ left: '220px' });
			$(".hiddenSidebar").removeClass("hiddenSidebar_animate");
			sliderBarShowBodyWidthFn( $(".main_table >thead th") );				
		}
	})
//侧边栏收缩按钮tips
	$(document).on('mouseover','.hiddenSidebar',function(){
		if ( $(".hiddenSidebar").attr("data-value") == 1 ) {			
			// layer.tips('收起左边栏','.hiddenSidebar',{ tips: 2, time: 1000 });
			$(".hiddenSidebar").attr('title','收起左边栏');

		} else if ( $(".hiddenSidebar").attr("data-value") == 2 ) {
			// layer.tips('展开左边栏','.hiddenSidebar',{ tips: 2, time: 1000 });
			$(".hiddenSidebar").attr('title','展开左边栏');
		}
	})

	//筛选框按钮点击动画效果
	buttonDownFn('.main_dropdown button');
	
	//主页下拉(js自写，没有采用Bootstrap，详情页的下拉采用了Bootstrap)
	$(document).on('click','.mainNav >li',function(event){
		event.stopPropagation();
		$(this).siblings("ul").css({width:$(this).width()});
		if ( $(this).siblings("ul").is(":hidden") ) {
			$(this).siblings("ul").show().parent().siblings("ul").children("ul").hide();
		} else if ( $(this).siblings("ul").is(":visible") ) {
			$(this).siblings("ul").hide();
		}
	})
	$(document).click(function(){ $(".mainNav").children("ul").hide(); })

//下拉列表 赋值、事件
	//内容主区域下拉列表 赋值函数
	function pickInfoMain(th){
		$(th).parent().parent().parent().siblings("li").find("strong").html( $(th).find("a").html() );
		$(th).parent().parent().parent().siblings("li").find("strong").attr( 'data-value' , $(th).find("a").attr('data-value') );
		$(th).parent().parent().parent().hide();		
	}
	function pickInfoMain_dataName(th){
		$(th).parent().parent().parent().siblings("li").find("strong").attr( 'data-name' , $(th).find("a").attr('data-name') );
	}

	//弹出层下拉列表 赋值函数
	function pickInfoPopup(th){
		$(th).parents(".input-group-btn").siblings("input").val ( $(th).find("a").html() );
		$(th).parents(".input-group-btn").siblings("input").attr( 'data-value' , $(th).find("a").attr('data-value') );	
		$(th).parents(".dropdown-menu-right").hide();
		$(th).parents(".input-group-btn").children("button").attr("data-value",1);
	}

	//主页下拉 和弹出层下拉事件
	$(document).on("click",".dropdown-menu-right li",	function(event){ pickInfoPopup(this); })
	$(document).on("click",".mainFilter 			.main_drop_menu li",function(event){ pickInfoMain_dataName(this); pickInfoMain(this); $(".main_detail").attr("data-value",""); })
	$(document).on("click",".mainFilterOmList 		.main_drop_menu li",function(event){ omListCountFn(); })

	//主页下拉 筛选输入框文本发生改变时
		// $(document).on("change","#weeklyReports_beginDate, #weeklyReports_endDate",function(){ 
		// 	getWeeklyReportsInfo_TableFn();
		// })
		// $(document).on("change","#monthlyReports_year",function(){ getMonthlyReportsInfo_TableFn(); })
		// $(document).on("change","#checkInHistoryDate",function(){ getCheckInHistoryInfo_TableFn(); })

//主页下拉 筛选搜索
	$(document).on('mouseup','.mainFilter 				.main_dropdown button',function(){ $(".main_detail").attr("data-value",""); })
	$(document).on('mouseup','.mainFilterOmList 		.main_dropdown button',function(){ omListCountFn(); })
	$(document).on('mouseup','.mainFilterUser 		.main_dropdown button',function(){ userCountFn(); })
	$(document).keyup(function(event){
		if ( event.keyCode == 13 ){
			if ($(".mainFilter .main_dropdown input:focus").length != 0){ $(".main_detail").attr("data-value",""); }
			if ($(".mainFilterOmList input:focus").length != 0){ omListCountFn(); }
			if ($(".mainFilterUser input:focus").length != 0){ userCountFn(); }
			
		};
	});	
//表格排序事件
	mainTableSortFn(".omList_table >thead >tr >th", omListCountFn);
	mainTableSortFn(".user_table >thead >tr >th", userCountFn);
//详情页隐藏事件
	main_detail_hidden();

//详情页下拉框按钮变色
	function layer_p_xiala(){
		$(".dropdown-menu-right li").each(function(){
			if ( $(this).children("a").html() == $(this).parents(".input-group-btn").siblings("input").val() ) {
				$(this).children("a").css({
					"background-color": "#ccc",
					color: '#000'
				}).parent().siblings("li").children("a").css({
					"background-color": "",
					color: ''
				});
			}
		})
	}
	$(document).on("click",".layer_p .input-group-btn button", function(ev){
		ev.stopPropagation();
		$(this).siblings("ul").css({ width: $(this).parents(".input-group").width() });
		layer_p_xiala();
		if ($(this).attr("data-value") == 1) {
			$(this).parent().siblings("input").focus();
			$(this).attr("data-value",2);
			$(this).siblings("ul").show();
		} else if ($(this).attr("data-value") == 2){
			$(this).attr("data-value",1);
			$(this).siblings("ul").hide();
		}
		
	})
	$(document).on("click",".layer_p .input-group input[type=text]",function(ev){
		var iptSibBtn = $(this).siblings(".input-group-btn").children("button");
		iptSibBtn.siblings("ul").css({ width: $(this).parents(".input-group").width() });
		layer_p_xiala();
		if (iptSibBtn.attr("data-value") == 1) {
			iptSibBtn.attr("data-value",2);			
			iptSibBtn.siblings("ul").show();
		} else if (iptSibBtn.attr("data-value") == 2){
			iptSibBtn.attr("data-value",1);
			iptSibBtn.siblings("ul").hide();
			$(this).blur();
		}
	})
	$(document).on("blur",".layer_p .input-group input[type=text]",function(event){
		setTimeout(function(){
			$(".layer_p .input-group-btn button").attr("data-value",1);
			$(".layer_p .input-group-btn button").siblings("ul").hide();
		},200);
	})


	

})
//认证项目 定价 点选
	function projectSetp_click(ele){
		ele.find("input[type=checkbox]").change(function(){
			if ($(this).is(":checked")){
				$(this).siblings("input[type=text]").attr("disabled",true);
				$(this).siblings("input[type=text]").attr("data-dis","true");
				$(this).siblings("input[type=text]").val(0);
				$(this).siblings('strong').css("color","#c81623");
			} else {
				$(this).siblings("input[type=text]").attr("disabled",false);
				$(this).siblings("input[type=text]").attr("data-dis","false");
				$(this).siblings("input[type=text]").val($(this).siblings("input[type=text]").attr("data-value"));
				$(this).siblings('strong').css("color","#666");
			}
		})
	}



//侧边栏切换动画效果
	function sidebarAnimateFn(ele){
		//解决IE，火狐虚线框
		ele.children("li").css({"outline":"medium","border":"none"});
		ele.children("li").children("a").css({"outline":"medium","border":"none"});
		//背景色
		ele.css({"background-color":"rgb(238,238,238)"}).siblings("li").css({"background-color":""});
		ele.parent("ul").siblings("ul").children("li").css({"background-color":""});
		//文字颜色和大小
		ele.find("a").css({color: "#056839"}).parents("li").siblings("li").find("a").css({color: ""});
		ele.parent("ul").siblings("ul").children("li").find("a").css({color: ""});
		//左边小红竖线
		ele.children("div").css({"height":"30px",top:"0px"}).parents("li").siblings("li").children("div").css({"height":"",top:""});
		ele.parent("ul").siblings("ul").children("li").children("div").css({"height":"",top:""});
	}
//sidebar 侧边栏赋值高度， 上下收缩	
	var sidebarHeight = function(item, num){
		var sidebarItemLength = item.children("li:visible").length;
		var sidebarItemHeight = num + sidebarItemLength*30;
		item.css({ height: sidebarItemHeight });
		item.children("h5").click(function(){
			if ( item.height() == sidebarItemHeight ){
				item.stop(false,true).animate({ height: num });
				item.children("h5").children("span").eq(1).children("i").addClass("fa-caret-down").removeClass("fa-caret-up");
			} else {
				item.stop(false,true).animate({ height: sidebarItemHeight });
				item.children("h5").children("span").eq(1).children("i").addClass("fa-caret-up").removeClass("fa-caret-down");
			}
		})
		if ( sidebarItemLength == 0 || item.height() == num ) { item.hide(); } else { item.show(); }
	}


//详情页出现
	var main_detail_show = function(ev,th, fn){
		ev.stopPropagation();
		if ( $(th).hasClass("main_table_tbody_tr_active") ){
			mdHid();
		} else{
			$(".main_detail").addClass("main_detail_active");
			$(th).addClass("main_table_tbody_tr_active").siblings("tr").removeClass("main_table_tbody_tr_active");
			if (fn) { 
				fn();
				setTimeout(function(){slimScrollFn()},200);
			}

		}
	}
	function mdHid(){
		$(".main_detail 			").removeClass("main_detail_active").html('').attr('data-value','');
		$(".main_table >tbody >tr 	").removeClass("main_table_tbody_tr_active");
	}
	function tableTrKeepBg(th){
		if ( $(th).attr("data-value") == $(".main_detail").attr("data-value") ) {
			$(th).addClass("main_table_tbody_tr_active").siblings("tr").removeClass("main_table_tbody_tr_active");
		}
	}
//详情页消失
	var main_detail_hidden = function(){
		$(document).click(function(event){
			var target = $(event.target);
			if(target.closest('.main_detail, .layui-layer-page, .layui-layer-close, .layui-layer-iconext, .layui-layer-shade, .layui-layer-btn, .ui-datepicker, .datetimepicker').length != 0){
				if(target.closest('label,button,input[type=checkbox],input[type=radio],input[type=file],input[type=button],input[type=submit], a').length == 0){
					// if (target.closest(".layer_p .input-group").length == 0) {$(".dropdown-menu-right").hide(); $(".layer_p .input-group-btn button").attr("data-value",1);	 }
					// if (target.closest(".layui-layer-shade").length != 0) {layer.closeAll();$(".main_table >tbody >tr").removeClass("blackListDelTdOn");}
					// if (target.closest(".layui-layer-btn >a").length != 0) { $(".main_table >tbody >tr").removeClass("blackListDelTdOn"); }
					return false;
				}else{
					// if (target.closest(".layer_for >input[type=button]").length != 0) {layer.closeAll();}
				}
			}else{
				mdHid();
			}
		})
		$(document).on("click",".main_detail_hidden",function(event){
			event.stopPropagation();
			mdHid();
		})
	}

//认证项目		详情页 右侧弹出
	var opCfProjectDetailShow = function(){
		$(".opCfProject_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opCfProject_detail',
					success: function(){
						opCfProjectDetailFn();
					}
				});
			});
		})
	}
//企业认证人数 	详情页 右侧弹出
	var opCfPeoNumDetailShow = function(){
		$(".opCfPeoNum_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opCfPeoNum_detail',
					success: function(){
						opCfPeoNumDetailFn();
					}
				});
			});
		})
	}
//认证机构		详情页 右侧弹出
	var opCfOrgDetailShow = function(){
		$(".opCfOrg_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opCfOrg_detail',
					success: function(){
						opCfOrgDetailFn();
					}
				});
			});
		})
	}
//有无设计		详情页 右侧弹出
	var opIsDesignDetailShow = function(){
		$(".opIsDesign_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opIsDesign_detail',
					success: function(){
						opIsDesignDetailFn();
					}
				});
			});
		})
	}
//获证时间周期	详情页 右侧弹出
	var opCfCycleDetailShow = function(){
		$(".opCfCycle_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opCfCycle_detail',
					success: function(){
						opCfCycleDetailFn();
					}
				});
			});
		})
	}
//法律法规文件	详情页 右侧弹出
	var opcfLawDetailShow = function(){
		$(".opcfLaw_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opcfLaw_detail',
					success: function(){
						opcfLawDetailFn();
					}
				});
			});
		})
	}
//有无许可证要求	详情页 右侧弹出
	var opIsLicenseDetailShow = function(){
		$(".opIsLicense_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opIsLicense_detail',
					success: function(){
						opIsLicenseDetailFn();
					}
				});
			});
		})
	}
//城市选择		详情页 右侧弹出
	var opCfCityDetailShow = function(){
		$(".opCfCity_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opCfCity_detail',
					success: function(){
						opCfCityDetailFn();
					}
				});
			});
		})
	}
//发票需求		详情页 右侧弹出
	var opCfInvoiceDetailShow = function(){
		$(".opCfInvoice_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opCfInvoice_detail',
					success: function(){
						opCfInvoiceDetailFn();
					}
				});
			});
		})
	}
//配合度			详情页 右侧弹出
	var opCfCooperationDetailShow = function(){
		$(".opCfCooperation_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opCfCooperation_detail',
					success: function(){
						opCfCooperationDetailFn();
					}
				});
			});
		})
	}
//需上门洽谈		详情页 右侧弹出
	var opVisitDetailShow = function(){
		$(".opVisit_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opVisit_detail',
					success: function(){
						opVisitDetailFn();
					}
				});
			});
		})
	}
//参数说明		详情页 右侧弹出
	var opDescriptionDetailShow = function(){
		$(".opDescription_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.opDescription_detail',
					success: function(){
						opDescriptionDetailFn();
					}
				});
			});
		})
	}
//订单列表		详情页 右侧弹出
	var omListDetailShow = function(){
		$(".omList_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.omList_detail',
					success: function(){
						omListDetailFn();
						slimScrollFn();
					}
				});
			});
		})
	}
//用户列表		详情页 右侧弹出
	var userDetailShow = function(){
		$(".user_table >tbody >tr").click(function(event){
			main_detail_show(event, this, function(){
				$(".main_detail").loadPage({
					url: 'mainDetail.html',
					id: '.userD',
					success: function(){
						userDetailFn();
					}
				});
			});
		})
	}



