//返回双数
	var tDouble = function(n) {
		if (n<10) {
			return "0" + n ;
		} else {
			return "" + n;  
		}
	}
	var pageHeight = $(window).height();



	//table 表格隔行变色
  function interlaceColor() {
      for (var i=0; i<$("table").length;i++){
          // var aRows=$("table")[i].tBodies[0].rows;
          // var aRows=$("table").eq(i).children("tbody").children("tr");
          var aRows=$("table").children("tbody").children("tr");
      }
      for (var i=0;i<aRows.length;i++) {
          if (i%2) {
              aRows[i].style.background='';
          } else {
              aRows[i].style.background='#fafafa';
          }
      }
  }

	//滚动条
	function slimScrollFn(){
		//一定时间不动 允许隐藏滚动条
		function slimScrollFn_disable(th){
			if ( $(th).hasClass("slimScrollDiv") ){
			} else {
				$(th).slimScroll({
					height : '100%',
					allowPageScroll : false,
					railOpacity: 0.6
				})
			}			
		}
		function slimScrollFn_allowPageScrollTrue(th){
			if ( $(th).hasClass("slimScrollDiv") ){
			} else {
				$(th).slimScroll({
					height : '100%',
					allowPageScroll : false,
					railOpacity: 0.6,
					allowPageScroll: true 	//滚动到头时，允许页面滚动
				})
			}			
		}
		function slimScrollLeftFn_disable(th){
			if ( $(th).hasClass("slimScrollDiv") ){
			} else {
				$(th).slimScroll({
					height: "100%",
					allowPageScroll: false,
					position: "left",		//滚动条位置
					disableFadeOut :false,	//鼠标在内容处一定时间不动是否隐藏滚动条
				})
			}
		}
		$(".sidebar				>div").each(function(){ slimScrollLeftFn_disable(this); })
		$(".bugContent 			>div").each(function(){ slimScrollFn_disable(this); })
		$('.main_detail_content >div').each(function(){ slimScrollFn_disable(this); })
		$(".main_drop_menu 		>div").each(function(){ slimScrollFn_disable(this); })
		$(".dropdown-menu-right >div").each(function(){ slimScrollFn_disable(this); })
		// $(".layer_p 			>div.main_detail_checkbox").each(function(){ slimScrollFn_allowPageScrollTrue(this); })
	}

	//表格排序
	function sortTable(th){
		if ( $(th).find("i").hasClass("fa-sort") ) {
			$(th).find("i").addClass("fa-sort-asc").removeClass("fa-sort-desc").removeClass("fa-sort");
			$(th).siblings("th").find("i").addClass("fa-sort").removeClass("fa-sort-asc").removeClass("fa-sort-desc");
			$(th).find("i").css({color:"rgba(50,50,50,1)"}).parent().siblings("th").find("i").css({color:"rgba(50,50,50,0.5)"});
			var sortAsc = $(th).find("i").attr("data-value") + ' asc';
			$(th).parent().attr("data-value",sortAsc);
			// console.log("sort变asc");

		} else if ( $(th).find("i").hasClass("fa-sort-asc") ) {
			$(th).find("i").addClass("fa-sort-desc").removeClass("fa-sort-asc").removeClass("fa-sort");
			$(th).siblings("th").find("i").addClass("fa-sort").removeClass("fa-sort-asc").removeClass("fa-sort-desc");
			$(th).find("i").css({color:"rgba(50,50,50,1)"}).parent().siblings("th").find("i").css({color:"rgba(50,50,50,0.5)"});
			var sortDesc = $(th).find("i").attr("data-value") + ' desc';
			$(th).parent().attr("data-value",sortDesc);
			// console.log("asc变desc");

		} else if ( $(th).find("i").hasClass("fa-sort-desc") ) {
			$(th).find("i").addClass("fa-sort-asc").removeClass("fa-sort-desc").removeClass("fa-sort");
			$(th).siblings("th").find("i").addClass("fa-sort").removeClass("fa-sort-asc").removeClass("fa-sort-desc");
			$(th).find("i").css({color:"rgba(50,50,50,1)"}).parent().siblings("th").find("i").css({color:"rgba(50,50,50,0.5)"});
			var sortAsc = $(th).find("i").attr("data-value") + ' asc';
			$(th).parent().attr("data-value",sortAsc);
			// console.log("desc变asc");
		}	
	}

	// 表格排序函数
	function mainTableSortFn(id, fn){
		$(document).on("click", id, function(){
			sortTable(this);
			if ( $(this).hasClass("sort") ) { 
				if(fn){fn();}
			}
		})
	}

	//body,html滚动条
	function sliderBarShowBodyWidthFn( ele ){
		var result = 0;
		ele.each(function(){
			var aaa = parseInt(getStyle( this, 'min-width' ));
			result += aaa;		
		})
		$(".wrapperChange").animate({'min-width': (result + 290) + 'px' });
	}
	function sliderBarHiddenBodyWidthFn( ele ){
		var result = 0;
		ele.each(function(){
			var aaa = parseInt(getStyle( this, 'min-width' ));
			result += aaa;		
		})
		$(".wrapperChange").animate({'min-width': (result + 70) + 'px' });
	}

	//按钮点击
	function buttonDownFn(id){
		$(document).on('mouseover',id,function(){
			$(this).css({
				'background-color': 'rgba(0,0,0,0.15)',
				'box-shadow': 'none'
			});
		})
		$(document).on('mousedown',id,function(){

			$(this).css({ 
				'background-color': 'rgba(5,104,57,1)',
				'box-shadow': 'inset 0 10px 20px rgba(0,0,0,0.5)'
			});
		})
		$(document).on('mouseup',id,function(){
			$(this).css({ 
				'background-color': 'rgba(5,104,57,0.5)',
				'box-shadow': 'none'
			});
		})	
		$(document).on('mouseout',id,function(){
			$(this).css({
				'background-color': 'rgba(5,104,57,1)',
				'box-shadow': 'none'
			});
		})
	}

	//ajax返回值 过滤+颜色处理+中英处理

	//过滤掉为空，未定义等情况
	function filterS(text){
		if ( text === undefined || text === '' || text === [] ) {
			return '';
		} else {
			return text;
		}
	}
	function filterSS(text){
		if ( text === undefined || text === '' || text === [] ) {
			return '';
		} else {
			return strRegExp(text);
		}
	}
	//boolean 是否
	function trueToYes(id, text){
		if (text === undefined){
			id.html('');
		} else {
			switch ( text.toString() ) {
				case 'true'	: id.html('是'); id.css({ 'color': '#5cb853' });	break;
				case 'false': id.html('否'); id.css({ 'color': '#a2a2a2' });	break;
				default 	: id.html('');
			}			
		}
	}
	//boolean 禁止，正常
		function trueToDisable(id, text){
			if (text === undefined){
				id.html('');
			} else {
				switch ( text.toString() ) {
					case 'true'	: id.html('禁止').css({ 'color': '#d9534f' });break;
					case 'false': id.html('正常').css({ 'color': '#5cb853' });break;
					default 	: id.html('');
				}			
			}
		}
	//boolean 已解决，未解决
		function isResolved(id, text){
			if (text === undefined){
				id.html('');
			} else {
				switch ( text.toString() ) {
					case 'true'	: id.html('已关闭').css({ 'color': '#5cb853' });	break;
					case 'false': id.html('未解决').css({ 'color': '#f0ad4e' });	break; 
					default 	: id.html('');
				}
			}
		}
	//订单状态中英转换
		function orderStateFn(id, text){
			if (text === undefined){
				id.html('');
			} else {
				switch(text.toString()){
					case 'Ready'	: id.html('未开始').css({color: '#a2a2a2'});break;
					case 'Pending'	: id.html('进行中').css({color: '#00aeef'});break;
					case 'Success'	: id.html('支付成功').css({color: '#5cb853'});break;
					case 'Failed'	: id.html('支付失败').css({color: '#d9534f'});break;
					default 		: id.html('').css({color: '#a2a2a2'});
				}
			}
		}
	//参数类型中英转换
		function fromOpDescriptionType(item){
			if (item){
				switch ( item ) {
					case 'Project' 	: return "认证项目"; break;
					case 'Auth' 	: return "认证机构"; break;
					case 'City' 	: return "城市选择"; break;
					case 'Design' 	: return "有无设计"; break;
					case 'Person' 	: return "企业认证人数"; break;
					case 'Time' 	: return "获取时间周期"; break;
					case 'Description' 	: return "认证范围描述"; break;
					case 'Legal' 	: return "法律法规文件"; break;
					case 'License' 	: return "有无许可证要求"; break;
					case 'Invoice' 	: return "发票需求"; break;
					case 'Operate' 	: return "配合度"; break;
					case 'Visit' 	: return "需上门洽谈"; break;
					case 'TravelPrice' 	: return "包含差旅费"; break;
					case 'Notes' 	: return "备注"; break;
					default 		: return "";
				}
			} else {
				return "";
			}
		}
	//订单列表-用户
		function omD_userFn(ele, str){
			if (str.company && str.company != ''){
				ele.html(str.company);
			} else {
				if (str.name && str.name != ''){
					ele.html(str.name);
				}else{
					ele.html(str.phone);
				}
			}
		}
	//订单列表-state
		function omD_stateFn(ele, str){
			if (str){
				switch (str){
					case 'Draft': 		ele.html('草稿'		).css({color: '#999'});break;		//灰色
					case 'Ready': 		ele.html('未确认'	).css({color: '#f0ad4e'});break;	//黄色
					case 'Confirmed': 	ele.html('已确认'	).css({color: '#00aeef'});break;	//蓝色

					case 'Signed': 		ele.html('已签合同'	).css({color: '#056839'});break;	//绿色
					case 'FirstPayed': 	ele.html('已付首款'	).css({color: '#056839'});break;	//绿色
					case 'Operating': 	ele.html('实施中'	).css({color: '#056839'});break;	//绿色
					case 'FinalPayed': 	ele.html('已付尾款'	).css({color: '#056839'});break;	//绿色

					case 'Finished': 	ele.html('已认证'	).css({color: '#056839'});break;	//绿色
					default 		: 	ele.html('');
				}
			} else {
				ele.html('');
			}
		}
//详情页判断时间的有无 赋值，隐显
	var isHidden_detailTime = function(a,b){
		if ( a == undefined ) {
			b.hide();
		} else {
			b.show();
			b.children("div").children("div").html( changeTime_YMD(a) );
		}
	}
//传参小时分钟 字符串获取时间
	var getHhiissFromTimeStringFn = function (time) {
		if ( time == undefined || time == '' ) {
			var result = '';
		} else {
			var result = time;
		}
		return result;
	}
//传参0-11数字获得英文月份
	var getMonthEnFromNumberFn = function(num){
		var result = null;
		var monthEnArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var result = monthEnArr[num];
        return result;
	}
	

//订单详情编辑框初始赋值
	function popupCheck_Init(ele, text){
		if ( text === [] || text === undefined || text === ""  ) { 
			ele.find("input").prop("checked",false);
		} else {
			ele.find("input").prop("checked",false);
			if ($.type(text) == "array"){
				ele.attr("data-value",text.join(","));
				ele.find("input").each(function(){
					if 		( text.indexOf(parseInt($(this).val())) >-1  ) 	{ $(this).prop("checked",true); }
					else if ( text.indexOf(parseInt($(this).val())) == -1 ) { $(this).prop("checked",false);}
				})
			} else{
				text = text.toString();
				ele.attr("data-value",text);
				// if (ele.attr("data-color") == 'changeGreen'){
				// 	ele.find("label").css('color', '#333');

				// 	ele.find("input").each(function(){
				// 		if ($(this).val() == text){
				// 			$(this).prop("checked",true);
				// 			console.log($(this).siblings("label"))

				// 			$(this).siblings("label").css('color', '#5cb853');
				// 		} else {
				// 			$(this).prop("checked",false);
				// 		}
				// 	})
				// } else {
					ele.find("input").each(function(){
						$(this).val() == text ? $(this).prop("checked",true) : $(this).prop("checked",false);
					})
				// }
							
			}
		};
	}
//订单详情编辑框点选赋值data-value
	function popupCheck_click(ele){
		ele.find("input").change(function(){
			var result = [];

			// if (ele.attr("data-color") == 'changeGreen'){
			// 	ele.find("label").css('color', '#333');

			// 	for ( var i=0; i<ele.find("li").size(); i++ ){
			// 		if ( ele.find("li").eq(i).find("input").is(":checked") ){
			// 			ele.find("li").eq(i).find("label").css('color', '#5cb853');
			// 			result.push( ele.find("li").eq(i).find("input").val() );	
			// 		}	
			// 	}
			// 	var re = result.join(",");
			// 	ele.attr("data-value",re);
			// } else {
				for ( var i=0; i<ele.find("li").size(); i++ ){
					if ( ele.find("li").eq(i).find("input").is(":checked") ){
						result.push( ele.find("li").eq(i).find("input").val() );	
					}	
				}
				var re = result.join(",");
				ele.attr("data-value",re);
			// }
			
		})		
	}
//单选、复选  popup 赋值
	function checkFuzhi(element, text){
		if ( text == [] || text == undefined || text == ""  ) { 
			element.find("li").removeClass("checked");
		} else {
			element.find("li").removeClass("checked");

			if ($.type(text) == 'array'){
				element.attr("data-value",text.join(","));
				element.find("li").each(function(){
					if ( text.indexOf($(this).attr("data-value")) >-1  ) { $(this).addClass("checked"); }
				})
			} else{
				element.attr("data-value",text);
				element.find("li").each(function(){
					$(this).attr("data-value") == text ? $(this).addClass("checked") : $(this).removeClass("checked");		
				})			
			}
		};
	}
//单选、复选  popup 点选
	function checkPick(element){
		$(document).on("click", element.find(".pick ul li"), function(event){
			var ev = event || window.event;
			var target = $(ev.target);
			var result = [];
			if (target.parent().attr("data-mode") == 'duo'){
				if (target.hasClass('checked')){
					target.removeClass('checked');
				} else{
					target.addClass('checked');
				}
			} else if(target.parent().attr("data-mode") == 'dan'){
				if (target.hasClass('checked')){
				} else {
					target.addClass('checked').siblings("li").removeClass("checked");
				}
			}
			checkRefresh(target.parents(".pick"));
		})
	}
//订单-刷新传参值
	function checkRefresh(hgk){	//hgk 指 .smfl
		var result = [];
		for (var j=0; j<hgk.children("ul").find("li").length; j++){
			var lis = hgk.children("ul").find("li");
			if (lis.eq(j).hasClass("checked")){
				result.push(lis.eq(j).attr("data-value"));
			}
		}
		var re = result.join(",");
		hgk.attr("data-value", re);
	}

//认证项目id 获取title
	var getOpCfProjectTitle = function(num){
		var boss_opCfProjectList = JSON.parse(bugStorage.getItem('boss_opCfProjectList'));
		for (var i=0; i<boss_opCfProjectList.length; i++){
			if ( num == boss_opCfProjectList[i].id ){
				return boss_opCfProjectList[i].title;
			}
		}
	}
//企业认证人数id 获取title
	var getOpCfPeoNumTitle = function(num){
		var boss_opCfPeoNumList = JSON.parse(bugStorage.getItem('boss_opCfPeoNumList'));
		for (var i=0; i<boss_opCfPeoNumList.length; i++){
			if ( num == boss_opCfPeoNumList[i].id ){
				return boss_opCfPeoNumList[i].title;
			}
		}
	}
//认证机构id 获取title
	var getOpCfOrgTitle = function(num){
		var boss_opCfOrgList = JSON.parse(bugStorage.getItem('boss_opCfOrgList'));
		for (var i=0; i<boss_opCfOrgList.length; i++){
			if ( num == boss_opCfOrgList[i].id ){
				return boss_opCfOrgList[i].title;
			}
		}
	}
//有无设计id 获取title
	var getOpIsDesignTitle = function(num){
		var boss_opIsDesignList = JSON.parse(bugStorage.getItem('boss_opIsDesignList'));
		for (var i=0; i<boss_opIsDesignList.length; i++){
			if ( num == boss_opIsDesignList[i].id ){
				return boss_opIsDesignList[i].title;
			}
		}
	}
//获证时间周期id 获取title
	var getOpCfCycleTitle = function(num){
		var boss_opCfCycleList = JSON.parse(bugStorage.getItem('boss_opCfCycleList'));
		for (var i=0; i<boss_opCfCycleList.length; i++){
			if ( num == boss_opCfCycleList[i].id ){
				return boss_opCfCycleList[i].title;
			}
		}
	}
//法律法规文件id 获取title
	var getOpcfLawTitle = function(num){
		var boss_opcfLawList = JSON.parse(bugStorage.getItem('boss_opcfLawList'));
		for (var i=0; i<boss_opcfLawList.length; i++){
			if ( num == boss_opcfLawList[i].id ){
				return boss_opcfLawList[i].title;
			}
		}
	}
//有无许可证要求id 获取title
	var getOpIsLicenseTitle = function(num){
		var boss_opIsLicenseList = JSON.parse(bugStorage.getItem('boss_opIsLicenseList'));
		for (var i=0; i<boss_opIsLicenseList.length; i++){
			if ( num == boss_opIsLicenseList[i].id ){
				return boss_opIsLicenseList[i].title;
			}
		}
	}
//城市选择id 获取province
	var getOpCfCityProvince = function(num){
		var boss_opCfCityList = JSON.parse(bugStorage.getItem('boss_opCfCityList'));
		for (var i=0; i<boss_opCfCityList.length; i++){
			if ( num == boss_opCfCityList[i].id ){
				return boss_opCfCityList[i].province;
			}
		}
	}
//城市选择id 获取city
	var getOpCfCityCity = function(num){
		var boss_opCfCityList = JSON.parse(bugStorage.getItem('boss_opCfCityList'));
		for (var i=0; i<boss_opCfCityList.length; i++){
			if ( num == boss_opCfCityList[i].id ){
				return boss_opCfCityList[i].city;
			}
		}
	}
//发票需求id 获取title
	var getOpCfInvoiceTitle = function(num){
		var boss_opCfInvoiceList = JSON.parse(bugStorage.getItem('boss_opCfInvoiceList'));
		for (var i=0; i<boss_opCfInvoiceList.length; i++){
			if ( num == boss_opCfInvoiceList[i].id ){
				return boss_opCfInvoiceList[i].title;
			}
		}
	}
//配合度id 获取title
	var getOpCfCooperationTitle = function(num){
		var boss_opCfCooperationList = JSON.parse(bugStorage.getItem('boss_opCfCooperationList'));
		for (var i=0; i<boss_opCfCooperationList.length; i++){
			if ( num == boss_opCfCooperationList[i].id ){
				return boss_opCfCooperationList[i].title;
			}
		}
	}
//需上门洽谈id 获取title
	var getOpVisitTitle = function(num){
		var boss_opVisitList = JSON.parse(bugStorage.getItem('boss_opVisitList'));
		for (var i=0; i<boss_opVisitList.length; i++){
			if ( num == boss_opVisitList[i].id ){
				return boss_opVisitList[i].title;
			}
		}
	}