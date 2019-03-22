window.onload = function(){
	layer.closeAll();
}

$(function(){
	$(".bugMain").loadPage({
		url: 'bugContent.html',
		id: '.bugMain_omList',
		// id: '.bugMain_opCfProject',
		success: function(){
			omListCountFn();
			sidebarAnimateFn($(".omList"));
			slimScrollFn();
			sliderBarShowBodyWidthFn( $(".main_table >thead th") );
			

			// opCfProjectHomeFn();
			// sidebarAnimateFn($(".opCfProject"));
			// slimScrollFn();
			// sliderBarShowBodyWidthFn( $(".main_table >thead th") );
		}
	})
	


//用户登录信息
	bugAjax({
		type: 'get',
		url: 'manager/get'
	},function(data){
		// console.log(data.root);
		if (data.success){
			$(".setting .username_txt").html(data.root.fullName);
			$(".setting .userSetFace_username").html(data.root.username);
			var bossUserObj = {
				id: data.root.id,
				username: data.root.username,
				fullName: data.root.fullName,
				disabled: data.root.disabled,
				roles: data.root.roles,
				expireTime: data.root.expireTime
			};
			bugStorage.setItem( 'bossUserObj',JSON.stringify(bossUserObj) );
			
		} else {
			errorType(data);
		}
	})
//登陆时进行缓存操作
	setTimeout(opCfProjectHomeFn,50);
	setTimeout(opCfPeoNumHomeFn,100);
	setTimeout(opCfOrgHomeFn,150);
	setTimeout(opIsDesignHomeFn,200);
	setTimeout(opCfCycleHomeFn,250);
	setTimeout(opcfLawHomeFn,300);
	setTimeout(opIsLicenseHomeFn,350);
	setTimeout(opCfCityHomeFn,400);
	setTimeout(opCfInvoiceHomeFn,450);
	setTimeout(opCfCooperationHomeFn,500);
	setTimeout(opVisitHomeFn,550);

//企业认证人数Add
	$(document).on('submit','#opCfPeoNumAddForm',function(ev){
		preDef(ev);
		if ( $("#opCfPeoNumAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfPeoNumAddPrice").val() != '' && !validateNInteger($("#opCfPeoNumAddPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfPeoNumAddTravelDays").val() != '' && !validateNInteger($("#opCfPeoNumAddTravelDays").val()) ){
			layer.msg("差旅费必须为非负整数!");
		} else if ( $("#opCfPeoNumAddSeq").val() != '' && !validateNInteger($("#opCfPeoNumAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfPeoNumAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'personOption/add',
				dataJson: { 
					title: $("#opCfPeoNumAddTitle").val(),
					price: $("#opCfPeoNumAddPrice").val(),
					travelDays: $("#opCfPeoNumAddTravelDays").val(),
					seq: $("#opCfPeoNumAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfPeoNumHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfPeoNumAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfPeoNumAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//企业认证人数Edit
	$(document).on('submit','#opCfPeoNumEditForm',function(ev){
		preDef(ev);
		if ( $("#opCfPeoNumEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfPeoNumEditPrice").val() !== '' && !validateNInteger($("#opCfPeoNumEditPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfPeoNumEditTravelDays").val() !== '' && !validateNInteger($("#opCfPeoNumEditTravelDays").val()) ){
			layer.msg("差旅费必须为非负整数!");
		} else if( $("#opCfPeoNumEditSeq").val() !== '' && !validateNInteger($("#opCfPeoNumEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfPeoNumEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'personOption/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opCfPeoNumEditTitle").val(),
					price: $("#opCfPeoNumEditPrice").val(),
					travelDays: $("#opCfPeoNumEditTravelDays").val(),
					seq: $("#opCfPeoNumEditSeq").val()
				}
			},function(data){
				console.log(data.root,data);
				if (data.success) {
					opCfPeoNumHomeFn();
					opCfPeoNumDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfPeoNumEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfPeoNumEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//企业认证人数del
	$(document).on("click",".mdOpCfPeoNumDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'personOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opCfPeoNumHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})


//认证机构Add
	$(document).on('submit','#opCfOrgAddForm',function(ev){
		preDef(ev);
		if ( $("#opCfOrgAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfOrgAddPrice").val() != '' && !validateNInteger($("#opCfOrgAddPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfOrgAddSeq").val() != '' && !validateNInteger($("#opCfOrgAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfOrgAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'authOption/add',
				dataJson: { 
					title: $("#opCfOrgAddTitle").val(),
					price: $("#opCfOrgAddPrice").val(),
					seq: $("#opCfOrgAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfOrgHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfOrgAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfOrgAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//认证机构Edit
	$(document).on('submit','#opCfOrgEditForm',function(ev){
		preDef(ev);
		if ( $("#opCfOrgEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfOrgEditPrice").val() != '' && !validateNInteger($("#opCfOrgEditPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfOrgEditSeq").val() != '' && !validateNInteger($("#opCfOrgEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfOrgEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'authOption/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opCfOrgEditTitle").val(),
					price: $("#opCfOrgEditPrice").val(),
					seq: $("#opCfOrgEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfOrgHomeFn();
					opCfOrgDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfOrgEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfOrgEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//认证机构del
	$(document).on("click",".mdOpCfOrgDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'authOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opCfOrgHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})	

//有无设计Add
	$(document).on('submit','#opIsDesignAddForm',function(ev){
		preDef(ev);
		if ( $("#opIsDesignAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opIsDesignAddPrice").val() != '' && !validateNInteger($("#opIsDesignAddPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opIsDesignAddSeq").val() != '' && !validateNInteger($("#opIsDesignAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opIsDesignAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'designOption/add',
				dataJson: { 
					title: $("#opIsDesignAddTitle").val(),
					price: $("#opIsDesignAddPrice").val(),
					seq: $("#opIsDesignAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opIsDesignHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opIsDesignAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opIsDesignAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//有无设计Edit
	$(document).on('submit','#opIsDesignEditForm',function(ev){
		preDef(ev);
		if ( $("#opIsDesignEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opIsDesignEditPrice").val() != '' && !validateNInteger($("#opIsDesignEditPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opIsDesignEditSeq").val() != '' && !validateNInteger($("#opIsDesignEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opIsDesignEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'designOption/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opIsDesignEditTitle").val(),
					price: $("#opIsDesignEditPrice").val(),
					seq: $("#opIsDesignEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opIsDesignHomeFn();
					opIsDesignDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opIsDesignEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opIsDesignEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//有无设计del
	$(document).on("click",".mdOpIsDesignDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'designOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opIsDesignHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//获证时间周期Add
	$(document).on('submit','#opCfCycleAddForm',function(ev){
		preDef(ev);
		if ( $("#opCfCycleAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfCycleAddPrice").val() != '' && !validateNInteger($("#opCfCycleAddPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfCycleAddSeq").val() != '' && !validateNInteger($("#opCfCycleAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfCycleAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'timeOption/add',
				dataJson: { 
					title: $("#opCfCycleAddTitle").val(),
					price: $("#opCfCycleAddPrice").val(),
					seq: $("#opCfCycleAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfCycleHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfCycleAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfCycleAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//获证时间周期Edit
	$(document).on('submit','#opCfCycleEditForm',function(ev){
		preDef(ev);
		if ( $("#opCfCycleEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfCycleEditPrice").val() != '' && !validateNInteger($("#opCfCycleEditPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfCycleEditSeq").val() != '' && !validateNInteger($("#opCfCycleEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfCycleEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'timeOption/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opCfCycleEditTitle").val(),
					price: $("#opCfCycleEditPrice").val(),
					seq: $("#opCfCycleEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfCycleHomeFn();
					opCfCycleDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfCycleEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfCycleEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//获证时间周期del
	$(document).on("click",".mdOpCfCycleDelBtn",function(){
		layer.confirm('确定删除吗 ?',confirmObj,function(index){
			bugAjax({
				url : 'timeOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				console.log(data.root,data);
				if ( data.success ){
 					opCfCycleHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//法律法规文件Add
	$(document).on('submit','#opcfLawAddForm',function(ev){
		preDef(ev);
		if ( $("#opcfLawAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opcfLawAddSeq").val() != '' && !validateNInteger($("#opcfLawAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opcfLawAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
			bugAjax({
				url : 'legalOption/add',
				dataJson: { 
					title: $("#opcfLawAddTitle").val(),
					seq: $("#opcfLawAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opcfLawHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opcfLawAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opcfLawAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//法律法规文件Edit
	$(document).on('submit','#opcfLawEditForm',function(ev){
		preDef(ev);
		if ( $("#opcfLawEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opcfLawEditSeq").val() != '' && !validateNInteger($("#opcfLawEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opcfLawEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'legalOption/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opcfLawEditTitle").val(),
					seq: $("#opcfLawEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opcfLawHomeFn();
					opcfLawDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opcfLawEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opcfLawEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//法律法规文件del
	$(document).on("click",".mdOpcfLawDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'legalOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opcfLawHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//有无许可证要求Add
	$(document).on('submit','#opIsLicenseAddForm',function(ev){
		preDef(ev);
		if ( $("#opIsLicenseAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opIsLicenseAddSeq").val() != '' && !validateNInteger($("#opIsLicenseAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opIsLicenseAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'licenseOption/add',
				dataJson: { 
					title: $("#opIsLicenseAddTitle").val(),
					seq: $("#opIsLicenseAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opIsLicenseHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opIsLicenseAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opIsLicenseAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//有无许可证要求Edit
	$(document).on('submit','#opIsLicenseEditForm',function(ev){
		preDef(ev);
		if ( $("#opIsLicenseEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opIsLicenseEditSeq").val() != '' && !validateNInteger($("#opIsLicenseEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opIsLicenseEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'licenseOption/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opIsLicenseEditTitle").val(),
					seq: $("#opIsLicenseEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opIsLicenseHomeFn();
					opIsLicenseDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opIsLicenseEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opIsLicenseEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//有无许可证要求del
	$(document).on("click",".mdOpIsLicenseDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'licenseOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				console.log(data.root,data);
				if ( data.success ){
 					opIsLicenseHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//城市选择Add
	$(document).on('submit','#opCfCityAddForm',function(ev){
		preDef(ev);
		if ( $("#opCfCityAddProvince").val() == '' ) { layer.msg("省份不能为空!");
		} else if ( $("#opCfCityAddCity").val() == '' ){ layer.msg("城市不能为空!");
		} else if ( $("#opCfCityAddPrice").val() != '' && !validateNInteger($("#opCfCityAddPrice").val()) ){ layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfCityAddSeq").val() != '' && !validateNInteger($("#opCfCityAddSeq").val()) ){ layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfCityAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
			bugAjax({
				url : 'cityOption/add',
				dataJson: { 
					province: 	$("#opCfCityAddProvince").val(),
					city: 		$("#opCfCityAddCity").val(),
					price: 		$("#opCfCityAddPrice").val(),
					travelPriceEnabled: $(".opCfCityAddTravelPrice").attr("data-value"),
					seq: 		$("#opCfCityAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfCityHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfCityAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfCityAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//城市选择Edit
	$(document).on('submit','#opCfCityEditForm',function(ev){
		preDef(ev);
		if ( $("#opCfCityEditProvince").val() == '' ) { layer.msg("省份不能为空!");
		} else if ( $("#opCfCityEditCity").val() == '' ){ layer.msg("城市不能为空!");
		} else if ( $("#opCfCityEditPrice").val() != '' && !validateNInteger($("#opCfCityEditPrice").val()) ){ layer.msg("价格必须为非负整数!");
		} else if ( $("#opCfCityEditSeq").val() != '' && !validateNInteger($("#opCfCityEditSeq").val()) ){ layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfCityEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
			bugAjax({
				url : 'cityOption/modify',
				dataJson: {
					id: 		$(".main_detail").attr("data-value"),
					province: 	$("#opCfCityEditProvince").val(),
					city: 		$("#opCfCityEditCity").val(),
					price: 		$("#opCfCityEditPrice").val(),
					travelPriceEnabled: $(".opCfCityEditTravelPrice").attr("data-value"),
					seq: 		$("#opCfCityEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfCityHomeFn();
					opCfCityDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfCityEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfCityEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//城市选择del
	$(document).on("click",".mdOpCfCityDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'cityOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opCfCityHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//发票需求Add
	$(document).on('submit','#opCfInvoiceAddForm',function(ev){
		preDef(ev);
		if ( $("#opCfInvoiceAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfInvoiceAddPercent").val() != '' && !validateNRealNum($("#opCfInvoiceAddPercent").val()) ){
			layer.msg("百分比必须为非负整数!");
		} else if ( $("#opCfInvoiceAddSeq").val() != '' && !validateNInteger($("#opCfInvoiceAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfInvoiceAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'invoiceOption/add',
				dataJson: { 
					title: $("#opCfInvoiceAddTitle").val(),
					percent: $("#opCfInvoiceAddPercent").val(),
					seq: $("#opCfInvoiceAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfInvoiceHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfInvoiceAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfInvoiceAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//发票需求Edit
	$(document).on('submit','#opCfInvoiceEditForm',function(ev){
		preDef(ev);
		if ( $("#opCfInvoiceEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfInvoiceEditPercent").val() != '' && !validateNRealNum($("#opCfInvoiceEditPercent").val()) ){
			layer.msg("百分比必须为非负整数!");
		} else if ( $("#opCfInvoiceEditSeq").val() != '' && !validateNInteger($("#opCfInvoiceEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfInvoiceEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'invoiceOption/modify',
				dataJson: {
					id: 	$(".main_detail").attr("data-value"),
					title: 	$("#opCfInvoiceEditTitle").val(),
					percent: $("#opCfInvoiceEditPercent").val(),
					seq: 	$("#opCfInvoiceEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfInvoiceHomeFn();
					opCfInvoiceDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfInvoiceEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfInvoiceEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//发票需求del
	$(document).on("click",".mdOpCfInvoiceDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'invoiceOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opCfInvoiceHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//配合度Add
	$(document).on('submit','#opCfCooperationAddForm',function(ev){
		preDef(ev);
		if ( $("#opCfCooperationAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfCooperationAddPercent").val() != '' && !validateNRealNum($("#opCfCooperationAddPercent").val()) ){
			layer.msg("百分比必须为非负整数!");
		} else if ( $("#opCfCooperationAddSeq").val() != '' && !validateNInteger($("#opCfCooperationAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfCooperationAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'operateOption/add',
				dataJson: { 
					title: $("#opCfCooperationAddTitle").val(),
					percent: $("#opCfCooperationAddPercent").val(),
					seq: $("#opCfCooperationAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfCooperationHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfCooperationAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfCooperationAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//配合度Edit
	$(document).on('submit','#opCfCooperationEditForm',function(ev){
		preDef(ev);
		if ( $("#opCfCooperationEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfCooperationEditPercent").val() != '' && !validateNRealNum($("#opCfCooperationEditPercent").val()) ){
			layer.msg("百分比必须为非负整数!");
		} else if ( $("#opCfCooperationEditSeq").val() != '' && !validateNInteger($("#opCfCooperationEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfCooperationEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'operateOption/modify',
				dataJson: {
					id: 		$(".main_detail").attr("data-value"),
					title: 		$("#opCfCooperationEditTitle").val(),
					percent: 	$("#opCfCooperationEditPercent").val(),
					seq: 		$("#opCfCooperationEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfCooperationHomeFn();
					opCfCooperationDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfCooperationEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfCooperationEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//配合度del
	$(document).on("click",".mdOpCfCooperationDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'operateOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opCfCooperationHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//需上门洽谈Add
	$(document).on('submit','#opVisitAddForm',function(ev){
		preDef(ev);
		if ( $("#opVisitAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opVisitAddPrice").val() != '' && !validateNInteger($("#opVisitAddPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opVisitAddSeq").val() != '' && !validateNInteger($("#opVisitAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opVisitAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'visitOption/add',
				dataJson: { 
					title: $("#opVisitAddTitle").val(),
					price: $("#opVisitAddPrice").val(),
					seq: $("#opVisitAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opVisitHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opVisitAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opVisitAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//需上门洽谈Edit
	$(document).on('submit','#opVisitEditForm',function(ev){
		preDef(ev);
		if ( $("#opVisitEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opVisitEditPrice").val() != '' && !validateNInteger($("#opVisitEditPrice").val()) ){
			layer.msg("价格必须为非负整数!");
		} else if ( $("#opVisitEditSeq").val() != '' && !validateNInteger($("#opVisitEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opVisitEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'visitOption/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opVisitEditTitle").val(),
					price: $("#opVisitEditPrice").val(),
					seq: $("#opVisitEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opVisitHomeFn();
					opVisitDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opVisitEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opVisitEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//需上门洽谈del
	$(document).on("click",".mdOpVisitDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'visitOption/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				if ( data.success ){
 					opVisitHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})

//认证项目Add
	$(document).on('submit','#opCfProjectAddForm',function(ev){
		preDef(ev);
		if ( $("#opCfProjectAddTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfProjectAddDayTravelPrice").val() === '' || !validateNInteger($("#opCfProjectAddDayTravelPrice").val()) ){
			layer.msg("每日差旅费必须为非负整数!");
		} else if ( $("#opCfProjectAddSeq").val() !== '' && !validateNInteger($("#opCfProjectAddSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
			console.log('fsdf', $("#opCfProjectAddDayTravelPrice").val() !== '' )
	 		$('#opCfProjectAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'project/add',
				dataJson: { 
					title: $("#opCfProjectAddTitle").val(),
					dayTravelPrice: $("#opCfProjectAddDayTravelPrice").val(),
					travelPriceEnabled : $(".opCfProjectAddTravelPrice").attr("data-value"),
					seq: $("#opCfProjectAddSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfProjectHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfProjectAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfProjectAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//认证项目Edit
	$(document).on('submit','#opCfProjectEditForm',function(ev){
		preDef(ev);
		if ( $("#opCfProjectEditTitle").val() == '' ) {
			layer.msg("标题不能为空!");
		} else if ( $("#opCfProjectEditDayTravelPrice").val() === '' || !validateNInteger($("#opCfProjectEditDayTravelPrice").val()) ){
			layer.msg("每日差旅费必须为非负整数!");
		} else if ( $("#opCfProjectEditSeq").val() != '' && !validateNInteger($("#opCfProjectEditSeq").val()) ){
			layer.msg("次序必须为非负整数!");
		} else {
	 		$('#opCfProjectEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'project/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					title: $("#opCfProjectEditTitle").val(),
					dayTravelPrice: $("#opCfProjectEditDayTravelPrice").val(),
					travelPriceEnabled : $(".opCfProjectEditTravelPrice").attr("data-value"),
					seq: $("#opCfProjectEditSeq").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opCfProjectHomeFn();
					opCfProjectDetailFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opCfProjectEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opCfProjectEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//认证项目del
	$(document).on("click",".mdOpCfProjectDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'project/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				// console.log(data.root,data);
				if ( data.success ){
 					opCfProjectHomeFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})
//认证项目定价
	$(document).on('submit','#opCfProjectSetpForm',function(ev){
		preDef(ev);
		var flag = true;
		var projectIpt = $("#opCfProjectSetpForm input[type=text]");
		var personIptBox = 	$('.opCfProjectSetp_person 	>div');
		var timeIptBox = 	$('.opCfProjectSetp_time 	>div');
		for (var i=0; i<projectIpt.length; i++){
			if ( $.trim(projectIpt.eq(i).val()) === "" ){
				flag = false; layer.msg('不能为空');
			} else if ((parseInt(projectIpt.eq(i).val()) < 1000 && parseInt(projectIpt.eq(i).val()) > 0) || !nonnegativeIntegerReg.test(projectIpt.eq(i).val()) ){
				flag = false; layer.msg('数值超出范围,必须大于或等于1000');
			}
		}
		if (flag){
 			$('#opCfProjectSetpSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
	 		for (var k=0 ;k< personIptBox.length; k++){
	 			bugAjax({
					url : 'project/setPersonPrice',
					dataJson: {
						id: $(".main_detail").attr("data-value"),
						optionId: personIptBox.eq(k).find("input").attr("data-id"),
						price: personIptBox.eq(k).find("input").val()
					}
				},function(data){
					// console.log(data.root,data);
					if (data.success) {
						if (k == personIptBox.length){
							setTimeout(function(){
								opCfProjectDetailFn();
								layer.closeAll();
							},700)
						}
					} else {
						errorType(data);
					}
				})	
	 		}
	 		for (var k=0 ;k< timeIptBox.length; k++){
	 			bugAjax({
					url : 'project/setTimePrice',
					dataJson: {
						id: $(".main_detail").attr("data-value"),
						optionId: timeIptBox.eq(k).find("input").attr("data-id"),
						price: timeIptBox.eq(k).find("input").val(),
						disabled: timeIptBox.eq(k).find("input").attr("data-dis")
					}
				},function(data){
					// console.log(data.root,data);
					if (data.success) {
						if (k == timeIptBox.length){
							setTimeout(function(){
								opCfProjectDetailFn();
								layer.closeAll();
							},700)
						}
					} else {
						errorType(data);
					}
				})	
	 		}
	 		setTimeout(function(){
				$("#opCfProjectSetpSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},1000)		
		}

	})

//参数说明Add
	$(document).on('submit','#opDescriptionAddForm',function(ev){
		preDef(ev);
		if ( $("#opDescriptionAddOptionType").val() == '' ) {
			layer.msg("参数类型不能为空!");
		} else if ( $("#opDescriptionAddNotes").val() == '' ) {
			layer.msg("参数说明不能为空!");
		} else {
	 		$('#opDescriptionAddSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'optionDescription/set',
				dataJson: { 
					optionType: $("#opDescriptionAddOptionType").attr("data-value"),
					notes: $("#opDescriptionAddNotes").val()
				}
			},function(data){
				console.log(data.root,data);
				if (data.success) {
					opDescriptionHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opDescriptionAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opDescriptionAddSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//参数说明Edit
	$(document).on('submit','#opDescriptionEditForm',function(ev){
		preDef(ev);
		if ( $("#opDescriptionEditNotes").val() == '' ) {
			layer.msg("参数说明不能为空!");
		} else {
	 		$('#opDescriptionEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'optionDescription/set',
				dataJson: { 
					optionType: $("#opDescriptionEditOptionType").attr("data-value"),
					notes: $("#opDescriptionEditNotes").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					opDescriptionHomeFn(opDescriptionDetailFn);
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#opDescriptionEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#opDescriptionEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//訂單设置Edit
	$(document).on('submit','#opSettingEditForm',function(ev){
		preDef(ev);
		$('#opSettingEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
		var obj = {};
		if ( $(".opSettingEditPercentLabel").attr("data-value") == "discountPercent" ){
			obj = {
				url : 'settings/set',
				dataJson: { 
					discountPercent: $("#opSettingEditPercent").attr("data-value")
				}
			};
		} else if ( $(".opSettingEditPercentLabel").attr("data-value") == "profitPercent" ){
			obj = {
				url : 'settings/set',
				dataJson: { 
					profitPercent: $("#opSettingEditPercent").attr("data-value")
				}
			};
		}
		bugAjax(obj,function(data){
			console.log(data.root,data);
			if (data.success) {
				opSettingHomeFn();
				layer.closeAll();
			} else {
				errorType(data);
			}
			$("#opSettingEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#opSettingEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
		})
	})

// 系统设置add
	$(document).on('submit','#opSymSettingAddForm',function(ev){
		preDef(ev);
		var opSymSettingAddFlag = true;

		//验证
		//手机号
		// if (  $.trim($(".regPhone").val()) === "" ){
		// 	$(".regPhoneTip").html('<i class="fa fa-times-circle"></i>手机号不能为空');
		// 	opSymSettingAddFlag = false;
		// } else if (!check_regPhone()){
		// 	$(".regPhoneTip").html('<i class="fa fa-times-circle"></i>手机号格式错误');
		// 	opSymSettingAddFlag = false;
		// }


		if (opSymSettingAddFlag){
			$('#opDescriptionEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
			bugAjax({
				url: 'settings/set',
				dataJson: {
					companyName: $("#opSymSettingAdd_companyFullname").val(),
			    englishName: $("#opSymSettingAdd_companyEnname").val(),
			    briefName: $("#opSymSettingAdd_companyBrief").val(),
			    introduction: $("#opSymSettingAdd_companyIntro").val(),
			    companyAddress: $("#opSymSettingAdd_companyAddress").val(),
			    contact: $("#opSymSettingAdd_companyContact").val(),
			    contactPhone: $("#opSymSettingAdd_companyContactPhone").val(),
			    email: $("#opSymSettingAdd_companyContactEmail").val(),
			    businessPhone: $("#opSymSettingAdd_companyBusinessPhone").val(),

			    bankAccount: $("#opSymSettingAdd_companyBankAccount").val(),
			    bankName: $("#opSymSettingAdd_companyBankName").val(),
			    taxCode: $("#opSymSettingAdd_companyTaxCode").val(),

			    bankPhone: $("#opSymSettingAdd_companyTaxCodePhone").val(),
			    companyQQ: $("#opSymSettingAdd_companyQQ").val(),
			    weixinCodeUrl: $("#opSymSettingAdd_companyWeixinCodeUrl").val(),
				}
			}, function(data){
				console.log(data);

				if (data.success) {
					opSymSettingListHomeFn();
					layer.closeAll();
				} else {
					errorType(data);
				}

				$("#opDescriptionEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			}, function(data){
				$("#opDescriptionEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})


//订单列表操作成功后相似封装
	function omListDetailBtnSuccess(){
		if ( $(".main_table").hasClass("omList_table") ){
			omListHomeFn($(".main_pagination").attr("data-value"));					
		}
		omListDetailFn();
		layer.closeAll();
	}
//订单参数Edit
	$(document).on('submit','#omListEditForm',function(ev){
		preDef(ev);
 		$('#omListEditSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
		bugAjax({
			url : 'order/modify',
			dataJson: {
				id: 		$(".main_detail").attr("data-value"),
				projectIds: 	$(".omListEditProject").attr("data-value"),
				personOptionId: $(".omListEditPerson").attr("data-value"),
				timeOptionId: 	$(".omListEditTime").attr("data-value"),
				description: 	$("#omListEditDescription").val(),
				cityOptionId: 	$(".omListEditCity .city :selected").val(),
				designOptionId: $(".omListEditDesign").attr("data-value"),
				licenseOptionId:$(".omListEditLicense").attr("data-value"),
				legalOptionIds: $(".omListEditLegal").attr("data-value"),
				invoiceOptionId:$(".omListEditInvoice").attr("data-value"),
				authOptionId: 	$(".omListEditAuth").attr("data-value"),
				operateOptionId:$(".omListEditOperate").attr("data-value"),
				visitOptionId: 	$(".omListEditVisit").attr("data-value"),
				notes: 			$("#omListEditNotes").val(),
				travelPriceIncluded: $(".omListEditTravelPrice").attr("data-value"),
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
				omListDetailBtnSuccess();
			} else {
				errorType(data);
			}
			$("#omListEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#omListEditSub").removeAttr('disabled').removeAttr('style').text("Submit");
		})
	})
//订单列表del
	$(document).on("click",".mdOmDelBtn",function(){
		layer.confirm('确定删除吗 ?', confirmObj, function(index){
			bugAjax({
				url : 'order/delete',
				dataJson : { 
					id : $(".main_detail").attr("data-value")
				}
			},function(data){
				console.log(data.root,data);
				if ( data.success ){
 					omListCountFn();
 					mdHid();
 					layer.closeAll();
				} else {
					errorType(data);
				}
			})
		})
		
	})


	// $.ajax({
 //        type: ,
 //        cache: false,
 //        url: ,

 //        data: {

 //        },
 //        dataType: 'json',
 //        success: function(data){
 //            console.log(data.root, data);
 //            if (data.state ==1 ){
 //                console.log("上传ajax参数成功，获取数据成功");
 //            } else {
 //            	console.log("上传ajax参数成功，获取数据失败");
 //            }
 //        },
 //        error: function(data){
 //        	console.log("上传ajax参数失败")
 //        }
 //    });
//订单列表 详情 跳转订单人详情
	$(document).on("click",".mdOmUserId",function(ev){
		stopPro(ev);
		var mdOmUserId = $(".mdOmUserId").html();
		$(".main_detail").loadPage({
			url: 'mainDetail.html',
			id: '.userD',
			success: function(){
				$(".main_detail").attr('data-value', mdOmUserId);
				$(".main_detail_hidden").attr("title","返回");
				userDetailFn();
				slimScrollFn();
				$(".main_detail_hidden").click(function(ev){
					ev.stopPropagation();
					if ( $(".main_table").hasClass("omList_table") ){
						var boss_mdOmObj = JSON.parse(bugStorage.getItem('boss_mdOmObj'));
						$(".main_detail").loadPage({
							url: 'mainDetail.html',
							id: '.omList_detail',
							success: function(){
								$(".main_detail").attr('data-value',boss_mdOmObj.id);
								omListDetailFn();
								slimScrollFn();
							}
						});
					}
				})
			}
		});
	})
//订单列表 状态修改
	$(document).on('submit','#omListSetStateForm',function(ev){
		preDef(ev);
 		$('#omListSetStateSub').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
		bugAjax({
			url : 'order/setState',
			dataJson: {
				id: 		$(".main_detail").attr("data-value"),
				state: $(".omListEdit_state").attr("data-value")
			}
		},function(data){
			console.log(data.root,data);
			if (data.success) {
				omListDetailBtnSuccess();
			} else {
				errorType(data);
			}
			$("#omListSetStateSub").removeAttr('disabled').removeAttr('style').text("Submit");
		},function(){
			$("#omListSetStateSub").removeAttr('disabled').removeAttr('style').text("Submit");
		})
	})
//订单列表 服务评价修改
	$(document).on('submit','#omListEvaluateForm',function(ev){
		preDef(ev);
		var flag = true;

		if ($.trim($("#addOrderEvaluate_score").val()) === ""){
			layer.msg('评分不能为空');
			flag = false;
		}

		if ($.trim($("#addOrderEvaluate_comment").val()) === ""){
			layer.msg('评价不能为空');
			flag = false;
		}

 		
 		if (flag){
 			$('#omListEvaluateBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');
 			bugAjax({
				url : 'order/evaluate',
				dataJson: {
					id: 		$(".main_detail").attr("data-value"),
					score: 	$("#addOrderEvaluate_score").val(),
					comment: $("#addOrderEvaluate_comment").val(),
				}
			},function(data){
				console.log(data.root,data);
				if (data.success) {
					omListDetailBtnSuccess();
				} else {
					errorType(data);
				}
				$("#omListEvaluateBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#omListEvaluateBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
 		}
	})

//用户列表操作成功后相似封装
	function userDetailBtnSuccess(){
		if ( $(".main_table").hasClass("user_table") ){
			userHomeFn($(".main_pagination").attr("data-value"));					
		}
		userDetailFn();
		layer.closeAll();
	}
//用户列表Add
	$(document).on('submit','#userAddForm',function(ev){
		preDef(ev);
		if ( $("#userAdd_phone").val() == '' ) {
			layer.msg("手机号不能为空!");
		} else if( !phoneReg.test($.trim($("#userAdd_phone").val())) ) {
			layer.msg("手机号格式错误!");
		} else if( $("#userAdd_password").val() == '' ) {
			layer.msg("密码不能为空!");
		} else if( !/^\w{6,20}$/.test($.trim($("#userAdd_password").val())) ) {
			layer.msg("密码必须6-20个字符!");
		} else if( $("#userAdd_name").val() == '' ) {
			layer.msg("姓名不能为空!");
		} else if( $("#userAdd_company").val() == '' ) {
			layer.msg("公司不能为空!");
		} else{
	 		$('#userAddBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'user/add',
				dataJson: { 
					phone: 		$("#userAdd_phone").val(),
					password: 	$("#userAdd_password").val(),
					name: 		$("#userAdd_name").val(),
					company: 	$("#userAdd_company").val()
				}
			},function(data){
				// console.log(data.root,data);
				if (data.success) {
					userCountFn();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#userAddBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#userAddBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//用户列表Edit
	$(document).on('submit','#userEditForm',function(ev){
		preDef(ev);
		if( $("#userEdit_name").val() == '' ) {
			layer.msg("姓名不能为空!");
		} else if( $("#userEdit_company").val() == '' ) {
			layer.msg("公司不能为空!");
		} else{
	 		$('#userEditBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'user/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					name: 		$("#userEdit_name").val(),
					company: 	$("#userEdit_company").val()
				}
			},function(data){
				console.log(data.root,data);
				if (data.success) {
					userDetailBtnSuccess();
					layer.closeAll();
				} else {
					errorType(data);
				}
				$("#userEditBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#userEditBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//用户列表Edit密码
	$(document).on('submit','#userPwdEditForm',function(ev){
		preDef(ev);
		if( $("#userPwdEdit_pwd").val() == '' ) {
			layer.msg("密码不能为空!");
		} else if( !/^\w{6,20}$/.test($.trim($("#userPwdEdit_pwd").val())) ) {
			layer.msg("密码必须6-20个字符!");
		} else{
	 		$('#userPwdEditBtn').attr('disabled','disabled').css('opacity',.45).text('Submitting...');  
			bugAjax({
				url : 'user/modify',
				dataJson: {
					id: $(".main_detail").attr("data-value"),
					name: 		$("#userPwdEditForm").attr("data-name"),
					company: 	$("#userPwdEditForm").attr("data-company"),
					password: 	$("#userPwdEdit_pwd").val()
				}
			},function(data){
				console.log(data.root,data);
				if (data.success) {
					userDetailBtnSuccess();
					layer.closeAll();
					layer.msg('密码修改成功！');
				} else {
					errorType(data);
				}
				$("#userPwdEditBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			},function(){
				$("#userPwdEditBtn").removeAttr('disabled').removeAttr('style').text("Submit");
			})
		}
	})
//用户列表 详情 跳转用户列表 且搜索该注册IP
	$(document).on("click",".userD_searchRegisterIP_user",function(ev){
		stopPro(ev);
		var userD_registerIP = $(".userD_registerIP").html();
		mdHid();
		$(".bugContent").css({ 'left': '250px', opacity: 0 });
		$(".bugContent").stop().animate({ 'left': '220px', opacity: 1 }, 700);
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_user',
			success: function(){
				sidebarAnimateFn($(".userList"));
				$("#user_registerIP").val(userD_registerIP);	
				userCountFn();
				sliderBarShowBodyWidthFn( $(".main_table >thead th") );
				slimScrollFn();	
			}
		})
	})
//用户列表 详情 跳转订单列表 且搜索该用户ID订单
	$(document).on("click",".userD_contactOrder",function(ev){
		stopPro(ev);
		var userD_id = $(".userD_id").html();
		mdHid();
		$(".bugContent").css({ 'left': '250px', opacity: 0 });
		$(".bugContent").stop().animate({ 'left': '220px', opacity: 1 }, 700);
		$(".bugMain").loadPage({
			url: 'bugContent.html',
			id: '.bugMain_omList',
			success: function(){
				sidebarAnimateFn($(".omList"));
				$("#omList_userId").val(userD_id);
				omListCountFn();
				sliderBarShowBodyWidthFn( $(".main_table >thead th") );
				slimScrollFn();
			}
		})
	})

//用户详情 跳转邮箱
	// $(document).on("click",".userD_email span",function(ev){
	// 	stopPro(ev);
	// 	var userD_emailSpanHtml = $(".userD_email >span").html();
	// 	// var userD_emailHref = 'http://www.' + userD_emailSpanHtml;
	// 	// var userD_emailHref = 'http://www.' + userD_emailSpanHtml;
	// 	window.open(userD_emailSpanHtml);
	// })
	



})

//认证项目Page
	var opCfProjectHomeFn = function(){ 
		bugAjax({
			type : 'get',
			url : 'project/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opCfProject_table").children("tbody").html('');
				var boss_opCfProjectList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opCfProjectList = data.root[i];
				//本地存储
					var boss_opCfProjectListItem = {
						id: opCfProjectList.id,
						title: filterS( opCfProjectList.title )
					}
					boss_opCfProjectList.push(boss_opCfProjectListItem);
				//主页赋值
					$(".opCfProject_table").children("tbody").append( 
						'<tr data-value="'+ opCfProjectList.id +'"><td><span>'	+ opCfProjectList.id +
						'</span></td><td><span>'+ filterS( opCfProjectList.title ) +
						'</span></td><td><span class="travelPrice">' +
						'</span></td><td><span>'+ filterS( opCfProjectList.dayTravelPrice ) +
						'</span></td><td><span>'+ filterS( opCfProjectList.seq ) +
						'</span></td></tr>' 
					);

					trueToYes($(".opCfProject_table tbody >tr").eq(i).find('span.travelPrice'), opCfProjectList.travelPriceEnabled);
				}
				if ($(".main_table").hasClass("opCfProject_table")){opCfProjectDetailShow();}
				bugStorage.setItem('boss_opCfProjectList',JSON.stringify(boss_opCfProjectList));
				$(".opCfProject_table >tbody >tr").each(function(){tableTrKeepBg(this);});
			} else { errorType(data); }
		})
	}
//认证项目Detail
	var opCfProjectDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'project/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opCfProject_table") ){
							var _index=$(".opCfProject_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opCfProject_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
				var personJson = data.root.personPrices;
				var timeJson = data.root.timePrices;
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpCfProjectId").html(data.root.id);
				$(".mdOpCfProjectTitle").html(filterS(data.root.title));
				$(".mdOpCfProjectPrice").html(filterS(data.root.price));
				$(".mdOpCfProjectSeq").html(filterS(data.root.seq));

				trueToYes($(".mdOpCfProjectTravelPrice"), data.root.travelPriceEnabled);
				popupCheck_Init($(".opCfProjectEditTravelPrice"), data.root.travelPriceEnabled);
				
				$(".mdOpCfProjectDayTravelPrice").html(filterS(data.root.dayTravelPrice));


			//Detail赋值-企业认证人数
				var cfPerson = JSON.parse(bugStorage.getItem('boss_opCfPeoNumList'));
				$(".mdOpCfProjectPerson").html('<h4>企业认证人数</h4>')
				for (var i=0; i<cfPerson.length; i++){
					$(".mdOpCfProjectPerson").append(
						'<div class="col-sm-12">\
							<label class="col-sm-3">'+cfPerson[i].title+'</label>\
							<div class="col-sm-9">\
								<span data-id="'+cfPerson[i].id+'">'+cfPerson[i].price+'</span>&nbsp;元\
							</div>\
						</div>')
				}
				var mdPersonBox = $(".mdOpCfProjectPerson >div");
				for (var i=0; i<personJson.length; i++){						
					for (var j=0; j<mdPersonBox.length; j++){							
						if (personJson[i].optionId == mdPersonBox.eq(j).find("span").attr("data-id")){
							if (personJson[i].price){
								mdPersonBox.eq(j).find("span").html(personJson[i].price);
							}
						}
					}
				}
			//Detail赋值-获证时间周期
				var cfTime = JSON.parse(bugStorage.getItem('boss_opCfCycleList'));
				$(".mdOpCfProjectTime").html('<h4>获证时间周期</h4>')
				for (var i=0; i<cfTime.length; i++){
					$(".mdOpCfProjectTime").append(
						'<div class="col-sm-12">\
							<label class="col-sm-3">'+cfTime[i].title+'</label>\
							<div class="col-sm-9">\
								<span data-id="'+cfTime[i].id+'">'+cfTime[i].price+'</span>&nbsp;元<strong></strong>	\
							</div>\
						</div>')
				}
				var mdTimeBox = $(".mdOpCfProjectTime >div");
				for (var i=0; i<timeJson.length; i++){
					for (var j=0; j<mdTimeBox.length; j++){							
						if (timeJson[i].optionId == mdTimeBox.eq(j).find("span").attr("data-id")){
							if (timeJson[i].price){
								mdTimeBox.eq(j).find("span").html(timeJson[i].price);
							}
							if (timeJson[i].disabled){
								mdTimeBox.eq(j).find("strong").parent().html('<strong>已禁用</strong>')
							} else {
								mdTimeBox.eq(j).find("strong").html('');
							}
						}
					}
				}

			//Edit框赋值				
				$("#opCfProjectEditTitle").val(filterS(data.root.title));
				$("#opCfProjectEditSeq").val(filterS(data.root.seq));
				$("#opCfProjectEditDayTravelPrice").val(filterS(data.root.dayTravelPrice));

				if ($("#opCfProjectSetpForm")){
					$("#opCfProjectSetp_title").html(filterS(data.root.title));					
					var edPersonBox = $(".opCfProjectSetp_person >div");
					for (var i=0; i<personJson.length; i++){						
						for (var j=0; j<edPersonBox.length; j++){							
							if (personJson[i].optionId == edPersonBox.eq(j).find("input[type=text]").attr("data-id")){
								if (personJson[i].price){
									edPersonBox.eq(j).find("input[type=text]").val(personJson[i].price);
								}
							}
						}
					}
					var edTimeBox = $(".opCfProjectSetp_time >div");
					for (var i=0; i<timeJson.length; i++){
						for (var j=0; j<edTimeBox.length; j++){
							if (timeJson[i].optionId == edTimeBox.eq(j).find("input[type=text]").attr("data-id")){
								if (timeJson[i].price){
									edTimeBox.eq(j).find("input[type=text]").val(timeJson[i].price);
									edTimeBox.eq(j).find("input[type=text]").attr("data-value", timeJson[i].price);
								}
								if (timeJson[i].disabled){
									edTimeBox.eq(j).find("input[type=checkbox]").prop("checked",true);
									edTimeBox.eq(j).find("input[type=text]").attr("disabled",true);
									edTimeBox.eq(j).find("input[type=text]").attr("data-dis","true");
									edTimeBox.eq(j).find("input[type=text]").val(0);
									edTimeBox.eq(j).find("strong").css("color", "#c81623");
								}
							}
						}
					}
				}



			} else { errorType(data); }
		})
	}

//企业认证人数Page
	var opCfPeoNumHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'personOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opCfPeoNum_table").children("tbody").html('');
				var boss_opCfPeoNumList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opCfPeoNumList = data.root[i];
				//本地存储
					var boss_opCfPeoNumListItem = {
						id: opCfPeoNumList.id,
						title: filterS( opCfPeoNumList.title ),
						price: filterS( opCfPeoNumList.price )
					}
					boss_opCfPeoNumList.push(boss_opCfPeoNumListItem);
				//主页赋值
					$(".opCfPeoNum_table").children("tbody").append( 
						'<tr data-value="'+ opCfPeoNumList.id +'"><td><span>'	+ opCfPeoNumList.id +
						'</span></td><td><span>'+ filterS( opCfPeoNumList.title ) +
						'</span></td><td><span>'+ filterS( opCfPeoNumList.price ) +
						// '</span></td><td><span>'+ filterS( opCfPeoNumList.travelPrice ) +
						'</span></td><td><span>'+ filterS( opCfPeoNumList.travelDays ) +
						'</span></td><td><span>'+ filterS( opCfPeoNumList.seq ) +
						'</span></td></tr>' 
					);				
				}
				if ($(".main_table").hasClass("opCfPeoNum_table")){opCfPeoNumDetailShow();}
				bugStorage.setItem('boss_opCfPeoNumList',JSON.stringify(boss_opCfPeoNumList));
				$(".opCfPeoNum_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//企业认证人数Detail
	var opCfPeoNumDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'personOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opCfPeoNum_table") ){
							var _index=$(".opCfPeoNum_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opCfPeoNum_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpCfPeoNumId").html(data.root.id);
				$(".mdOpCfPeoNumTitle").html(filterS(data.root.title));
				$(".mdOpCfPeoNumPrice").html(filterS(data.root.price));
				// $(".mdOpCfPeoNumTravePrice").html(filterS(data.root.travelPrice));
				$(".mdOpCfPeoNumTravelDays").html(filterS(data.root.travelDays));
				$(".mdOpCfPeoNumSeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opCfPeoNumEditTitle").val(filterS(data.root.title));
				$("#opCfPeoNumEditPrice").val(filterS(data.root.price));
				// $("#opCfPeoNumEditTravePrice").val(filterS(data.root.travelPrice));
				$("#opCfPeoNumEditTravelDays").val(filterS(data.root.travelDays));
				$("#opCfPeoNumEditSeq").val(filterS(data.root.seq));

			} else { errorType(data); }
		})
	}

//认证机构Page
	var opCfOrgHomeFn = function(){ 
		bugAjax({
			type : 'get',
			url : 'authOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opCfOrg_table").children("tbody").html('');
				var boss_opCfOrgList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opCfOrgList = data.root[i];
				//本地存储
					var boss_opCfOrgListItem = {
						id: opCfOrgList.id,
						title: filterS( opCfOrgList.title )
					}
					boss_opCfOrgList.push(boss_opCfOrgListItem);
				//主页赋值
					$(".opCfOrg_table").children("tbody").append( 
						'<tr data-value="'+ opCfOrgList.id +'"><td><span>'	+ opCfOrgList.id +
						'</span></td><td><span>'+ filterS( opCfOrgList.title ) +
						'</span></td><td><span>'+ filterS( opCfOrgList.price ) +
						'</span></td><td><span>'+ filterS( opCfOrgList.seq ) +
						'</span></td></tr>' 
					);					
				}
				if ($(".main_table").hasClass("opCfOrg_table")){opCfOrgDetailShow();}
				bugStorage.setItem('boss_opCfOrgList',JSON.stringify(boss_opCfOrgList));
				$(".opCfOrg_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//认证机构Detail
	var opCfOrgDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'authOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opCfOrg_table") ){
							var _index=$(".opCfOrg_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opCfOrg_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//按钮权限
				// userToOpCfOrgAllow(data);
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpCfOrgId").html(data.root.id);
				$(".mdOpCfOrgTitle").html(filterS(data.root.title));
				$(".mdOpCfOrgPrice").html(filterS( data.root.price));
				$(".mdOpCfOrgSeq").html(filterS( data.root.seq));
			//Edit框赋值
				$("#opCfOrgEditTitle").val(filterS(data.root.title));
				$("#opCfOrgEditPrice").val(filterS( data.root.price));
				$("#opCfOrgEditSeq").val(filterS( data.root.seq));

			} else { errorType(data); }
		})
	}

//有无设计Page
	var opIsDesignHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'designOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opIsDesign_table").children("tbody").html('');
				var boss_opIsDesignList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opIsDesignList = data.root[i];
				//本地存储
					var boss_opIsDesignListItem = {
						id: opIsDesignList.id,
						title: filterS( opIsDesignList.title )
					}
					boss_opIsDesignList.push(boss_opIsDesignListItem);
				//主页赋值
					$(".opIsDesign_table").children("tbody").append( 
						'<tr data-value="'+ opIsDesignList.id +'"><td><span>'	+ opIsDesignList.id +
						'</span></td><td><span>'+ filterS( opIsDesignList.title ) +
						'</span></td><td><span>'+ filterS( opIsDesignList.price ) +
						'</span></td><td><span>'+ filterS( opIsDesignList.seq )+
						'</span></td></tr>' 
					);					
				}
				if ($(".main_table").hasClass("opIsDesign_table")){opIsDesignDetailShow();}
				bugStorage.setItem('boss_opIsDesignList',JSON.stringify(boss_opIsDesignList));
				$(".opIsDesign_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//有无设计Detail
	var opIsDesignDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'designOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opIsDesign_table") ){
							var _index=$(".opIsDesign_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opIsDesign_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpIsDesignId").html(data.root.id);
				$(".mdOpIsDesignTitle").html(filterS(data.root.title));
				$(".mdOpIsDesignPrice").html(filterS(data.root.price));
				$(".mdOpIsDesignSeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opIsDesignEditTitle").val(filterS(data.root.title));
				$("#opIsDesignEditPrice").val(filterS(data.root.price));
				$("#opIsDesignEditSeq").val(filterS(data.root.seq));

			} else { errorType(data); }
		})
	}

//获证时间周期Page
	var opCfCycleHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'timeOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opCfCycle_table").children("tbody").html('');
				var boss_opCfCycleList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opCfCycleList = data.root[i];
				//本地存储
					var boss_opCfCycleListItem = {
						id: opCfCycleList.id,
						title: filterS( opCfCycleList.title ),
						price: filterS( opCfCycleList.price )
					}
					boss_opCfCycleList.push(boss_opCfCycleListItem);
				//主页赋值
					$(".opCfCycle_table").children("tbody").append( 
						'<tr data-value="'+ opCfCycleList.id +'"><td><span>'	+ opCfCycleList.id +
						'</span></td><td><span>'+ filterS( opCfCycleList.title ) +
						'</span></td><td><span>'+ filterS(opCfCycleList.price) +
						'</span></td><td><span>'+ filterS(opCfCycleList.seq) +
						'</span></td></tr>' 
					);					
				}
				if ($(".main_table").hasClass("opCfCycle_table")){opCfCycleDetailShow();}
				bugStorage.setItem('boss_opCfCycleList',JSON.stringify(boss_opCfCycleList));
				$(".opCfCycle_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//获证时间周期Detail
	var opCfCycleDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'timeOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opCfCycle_table") ){
							var _index=$(".opCfCycle_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opCfCycle_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpCfCycleId").html(data.root.id);
				$(".mdOpCfCycleTitle").html(filterS(data.root.title));
				$(".mdOpCfCyclePrice").html(filterS(data.root.price));
				$(".mdOpCfCycleSeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opCfCycleEditTitle").val(filterS(data.root.title));
				$("#opCfCycleEditPrice").val(filterS(data.root.price));
				$("#opCfCycleEditSeq").val(filterS(data.root.seq));

			} else { errorType(data); }
		})
	}

//法律法规文件Page
	var opcfLawHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'legalOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opcfLaw_table").children("tbody").html('');
				var boss_opcfLawList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opcfLawList = data.root[i];
				//本地存储
					var boss_opcfLawListItem = {
						id: opcfLawList.id,
						title: filterS( opcfLawList.title )
					}
					boss_opcfLawList.push(boss_opcfLawListItem);
				//主页赋值
					$(".opcfLaw_table").children("tbody").append( 
						'<tr data-value="'+ opcfLawList.id +'"><td><span>'	+ opcfLawList.id +
						'</span></td><td><span>'+ filterS( opcfLawList.title ) +
						'</span></td><td><span>'+ filterS(opcfLawList.seq) +
						'</span></td></tr>' 
					);
					
				}
				if ($(".main_table").hasClass("opcfLaw_table")){opcfLawDetailShow();}
				bugStorage.setItem('boss_opcfLawList',JSON.stringify(boss_opcfLawList));
				$(".opcfLaw_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//法律法规文件Detail
	var opcfLawDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'legalOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opcfLaw_table") ){
							var _index=$(".opcfLaw_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opcfLaw_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpcfLawId").html(data.root.id);
				$(".mdOpcfLawTitle").html(filterS(data.root.title));
				$(".mdOpcfLawPrice").html(filterS(data.root.price));
				$(".mdOpcfLawSeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opcfLawEditTitle").val(filterS(data.root.title));
				$("#opcfLawEditSeq").val(filterS(data.root.seq));
			} else { errorType(data); }
		})
	}

//有无许可证要求Page
	var opIsLicenseHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'licenseOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opIsLicense_table").children("tbody").html('');
				var boss_opIsLicenseList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opIsLicenseList = data.root[i];
				//本地存储
					var boss_opIsLicenseListItem = {
						id: opIsLicenseList.id,
						title: filterS( opIsLicenseList.title )
					}
					boss_opIsLicenseList.push(boss_opIsLicenseListItem);
				//主页赋值
					$(".opIsLicense_table").children("tbody").append( 
						'<tr data-value="'+ opIsLicenseList.id +'"><td><span>'	+ opIsLicenseList.id +
						'</span></td><td><span>'+ filterS( opIsLicenseList.title ) +
						'</span></td><td><span>'+ filterS(opIsLicenseList.seq) +
						'</span></td></tr>' 
					);
				}
				if ($(".main_table").hasClass("opIsLicense_table")){opIsLicenseDetailShow();}
				bugStorage.setItem('boss_opIsLicenseList',JSON.stringify(boss_opIsLicenseList));
				$(".opIsLicense_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//有无许可证要求Detail
	var opIsLicenseDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'licenseOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opIsLicense_table") ){
							var _index=$(".opIsLicense_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opIsLicense_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpIsLicenseId").html(data.root.id);
				$(".mdOpIsLicenseTitle").html(filterS(data.root.title));
				$(".mdOpIsLicensePrice").html(filterS(data.root.price));
				$(".mdOpIsLicenseSeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opIsLicenseEditTitle").val(filterS(data.root.title));
				$("#opIsLicenseEditSeq").val(filterS(data.root.seq));
			} else { errorType(data); }
		})
	}

//城市选择Page
	var opCfCityHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'cityOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opCfCity_table").children("tbody").html('');
				var boss_opCfCityList = [];

				for (var i=0 ;i<data.root.length; i++ ) {
					var opCfCityList = data.root[i];
				//本地存储
					var boss_opCfCityListItem = {
						id: opCfCityList.id,
						province: filterS( opCfCityList.province ),
						city: filterS( opCfCityList.city ),
						travelPriceEnabled: opCfCityList.travelPriceEnabled || false,
					}
					boss_opCfCityList.push(boss_opCfCityListItem);
				//主页赋值
					$(".opCfCity_table").children("tbody").append(
						'<tr data-value="'+ opCfCityList.id +'"><td><span>'	+ opCfCityList.id +
						'</span></td><td><span>'+ filterS( opCfCityList.province ) +
						'</span></td><td><span>'+ filterS( opCfCityList.city ) +
						'</span></td><td><span>'+ filterS( opCfCityList.price ) +
						'</span></td><td><span class="travelPrice">' +
						'</span></td><td><span>'+ filterS( opCfCityList.seq ) +
						'</span></td></tr>' 
					);

					trueToYes($(".opCfCity_table tbody >tr").eq(i).find('span.travelPrice'), opCfCityList.travelPriceEnabled);
				}
				if ($(".main_table").hasClass("opCfCity_table")){opCfCityDetailShow();}
				bugStorage.setItem('boss_opCfCityList',JSON.stringify(boss_opCfCityList));
				$(".opCfCity_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//城市选择Detail
	var opCfCityDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'cityOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opCfCity_table") ){
							var _index=$(".opCfCity_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opCfCity_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpCfCityId").html(data.root.id);
				$(".mdOpCfCityProvince").html(filterS(data.root.province));
				$(".mdOpCfCityCity").html(filterS(data.root.city));
				$(".mdOpCfCityPrice").html(filterS(data.root.price));

				trueToYes($(".mdOpCfCityTravelPrice"), data.root.travelPriceEnabled);
				popupCheck_Init($(".opCfCityEditTravelPrice"), data.root.travelPriceEnabled);

				$(".mdOpCfCitySeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opCfCityEditProvince").val(filterS(data.root.province));
				$("#opCfCityEditCity").val(filterS(data.root.city));
				$("#opCfCityEditPrice").val(filterS(data.root.price));
				$("#opCfCityEditSeq").val(filterS(data.root.seq));
			} else { errorType(data); }
		})
	}
//发票需求Page
	var opCfInvoiceHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'invoiceOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opCfInvoice_table").children("tbody").html('');
				var boss_opCfInvoiceList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opCfInvoiceList = data.root[i];
				//本地存储
					var boss_opCfInvoiceListItem = {
						id: opCfInvoiceList.id,
						title: filterS( opCfInvoiceList.title )
					}
					boss_opCfInvoiceList.push(boss_opCfInvoiceListItem);
				//主页赋值
					$(".opCfInvoice_table").children("tbody").append( 
						'<tr data-value="'+ opCfInvoiceList.id +'"><td><span>'	+ opCfInvoiceList.id +
						'</span></td><td><span>'+ filterS( opCfInvoiceList.title ) +
						'</span></td><td><span>'+ opCfInvoiceList.percent.toFixed(2) +
						'</span></td><td><span>'+ filterS( opCfInvoiceList.seq )+
						'</span></td></tr>' 
					);
				}
				if ($(".main_table").hasClass("opCfInvoice_table")){opCfInvoiceDetailShow();}
				bugStorage.setItem('boss_opCfInvoiceList',JSON.stringify(boss_opCfInvoiceList));
				$(".opCfInvoice_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//发票需求Detail
	var opCfInvoiceDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'invoiceOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opCfInvoice_table") ){
							var _index=$(".opCfInvoice_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opCfInvoice_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpCfInvoiceId").html(data.root.id);
				$(".mdOpCfInvoiceTitle").html(filterS(data.root.title));
				$(".mdOpCfInvoicePercent").html(data.root.percent.toFixed(2));
				$(".mdOpCfInvoiceSeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opCfInvoiceEditTitle").val(filterS(data.root.title));
				$("#opCfInvoiceEditPercent").val(data.root.percent.toFixed(2));
				$("#opCfInvoiceEditSeq").val(filterS(data.root.seq));
			} else { errorType(data); }
		})
	}
//配合度Page
	var opCfCooperationHomeFn = function(){ 
		bugAjax({
			type : 'get',
			url : 'operateOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opCfCooperation_table").children("tbody").html('');
				var boss_opCfCooperationList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opCfCooperationList = data.root[i];
				//本地存储
					var boss_opCfCooperationListItem = {
						id: opCfCooperationList.id,
						title: filterS( opCfCooperationList.title )
					}
					boss_opCfCooperationList.push(boss_opCfCooperationListItem);
				//主页赋值
					$(".opCfCooperation_table").children("tbody").append( 
						'<tr data-value="'+ opCfCooperationList.id +'"><td><span>'	+ opCfCooperationList.id +
						'</span></td><td><span>'+ filterS( opCfCooperationList.title ) +
						'</span></td><td><span>'+ opCfCooperationList.percent.toFixed(2) +
						'</span></td><td><span>'+ filterS( opCfCooperationList.seq ) +
						'</span></td></tr>' 
					);
				}
				if ($(".main_table").hasClass("opCfCooperation_table")){opCfCooperationDetailShow();}
				bugStorage.setItem('boss_opCfCooperationList',JSON.stringify(boss_opCfCooperationList));
				$(".opCfCooperation_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//配合度Detail
	var opCfCooperationDetailFn = function(){
		bugAjax({
			type : 'get',
			url : 'operateOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opCfCooperation_table") ){
							var _index=$(".opCfCooperation_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opCfCooperation_table >tbody >tr").eq(_index).attr("data-value");
							console.log($(".opCfCooperation_table >tbody >tr").eq(_index).attr("data-value"))							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpCfCooperationId").html(data.root.id);
				$(".mdOpCfCooperationTitle").html(filterS(data.root.title));
				$(".mdOpCfCooperationPercent").html(data.root.percent.toFixed(2));
				$(".mdOpCfCooperationSeq").html(filterS( data.root.seq));
			//Edit框赋值
				$("#opCfCooperationEditTitle").val(filterS(data.root.title));
				$("#opCfCooperationEditPercent").val(data.root.percent.toFixed(2));
				$("#opCfCooperationEditSeq").val(filterS( data.root.seq));
			} else { errorType(data); }
		})
	}
//需上门洽谈Page
	var opVisitHomeFn = function(){
		bugAjax({
			type : 'get',
			url : 'visitOption/list'
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opVisit_table").children("tbody").html('');
				var boss_opVisitList = [];
				for (var i=0 ;i<data.root.length; i++ ) {
					var opVisitList = data.root[i];
				//本地存储
					var boss_opVisitListItem = {
						id: opVisitList.id,
						title: filterS( opVisitList.title )
					}
					boss_opVisitList.push(boss_opVisitListItem);
				//主页赋值
					$(".opVisit_table").children("tbody").append( 
						'<tr data-value="'+ opVisitList.id +'"><td><span>'	+ opVisitList.id +
						'</span></td><td><span>'+ filterS( opVisitList.title ) +
						'</span></td><td><span>'+ filterS( opVisitList.price ) +
						'</span></td><td><span>'+ filterS( opVisitList.seq ) +
						'</span></td></tr>'
					);
				}
				if ($(".main_table").hasClass("opVisit_table")){opVisitDetailShow();}
				bugStorage.setItem('boss_opVisitList',JSON.stringify(boss_opVisitList));
				$(".opVisit_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}
//需上门洽谈Detail
	var opVisitDetailFn = function(){ 
		bugAjax({
			type : 'get',
			url : 'visitOption/get',
			dataJson : { 
				id : function(){
						if ( $(".main_table").hasClass("opVisit_table") ){
							var _index=$(".opVisit_table >tbody >tr.main_table_tbody_tr_active").index();
							return $(".opVisit_table >tbody >tr").eq(_index).attr("data-value");							
						} else {
							return $(".main_detail").attr('data-value');
						}
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOpVisitId").html(data.root.id);
				$(".mdOpVisitTitle").html(filterS(data.root.title));
				$(".mdOpVisitPrice").html(filterS(data.root.price));
				$(".mdOpVisitSeq").html(filterS(data.root.seq));
			//Edit框赋值
				$("#opVisitEditTitle").val(filterS(data.root.title));
				$("#opVisitEditPrice").val(filterS(data.root.price));
				$("#opVisitEditSeq").val(filterS(data.root.seq));
			} else { errorType(data); }
		})
	}

//参数说明Page
	var opDescriptionHomeFn = function(fn){
		bugAjax({
			type : 'get',
			url : 'optionDescription/list'
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//重置
				$(".opDescription_table").children("tbody").html('');
				for (var i=0 ;i<data.root.length; i++ ) {
					var opDescriptionList = data.root[i];
				//主页赋值
					$(".opDescription_table").children("tbody").append( 
						'<tr data-value="'+ opDescriptionList.id +'"><td><span>'	+ opDescriptionList.id +
						'</span></td><td><span data-value="'+ filterS( opDescriptionList.optionType ) +'">'+ fromOpDescriptionType(opDescriptionList.optionType ) +
						'</span></td><td><span>'+ filterS( opDescriptionList.notes ) +
						'</span></td></tr>' 
					);
				}
				opDescriptionDetailShow();
				$(".opDescription_table >tbody >tr").each(function(){tableTrKeepBg(this);})
				if (fn) fn();
			} else { errorType(data); }
		})
	}
//参数说明Detail
	var opDescriptionDetailFn = function(){
		var _index=$(".opDescription_table >tbody >tr.main_table_tbody_tr_active").index();
		var _tr = $(".opDescription_table >tbody >tr").eq(_index);

		$(".main_detail").attr('data-value', _tr.attr("data-value") );
		$(".main_detail").attr('data-name',	 _tr.children("td").eq(1).children("span").html() );

		$(".mdOpDescriptionId" 			).html( _tr.children("td").eq(0).children("span").html() );
		$(".mdOpDescriptionOptionType" 	).html( _tr.children("td").eq(1).children("span").html() );		
		$(".mdOpDescriptionNotes" 		).html( _tr.children("td").eq(2).children("span").html() );
		$(".mdOpDescriptionOptionType" 	).attr( "data-value", _tr.children("td").eq(1).children("span").attr("data-value") );

		$("#opDescriptionEditOptionType" ).attr("data-value", _tr.children("td").eq(1).children("span").attr("data-value") );
		$("#opDescriptionEditOptionType" ).html( _tr.children("td").eq(1).children("span").html() );
		$("#opDescriptionEditNotes" 	 ).val(  _tr.children("td").eq(2).children("span").html() );

	}
//订单设置Page
	var opSettingHomeFn = function(){
		console.log('s')
		bugAjax({
			type : 'get',
			url : 'settings/get'
		},function(data){
			console.log(data.root,data);
			if (data.success) {
				var res = data.root || {}
			//重置
				$(".opSetting_table").children("tbody").html('');
				//主页赋值
				if (res.discountPercent || res.discountPercent >= 0){
					$(".opSetting_table").children("tbody").append( 
						'<tr data-value="discountPercent"><td><span>折扣率(多项目有效)'+
						'</span></td><td><span>'+ filterS(res.discountPercent)+
						'</span></td><td><span class="opSettingDelTd" data-value="'+filterS(res.discountPercent)+'" data-name="折扣率(多项目有效)">设置' +
						'</span></td></tr>'
					);
				}
				if (res.profitPercent || res.profitPercent >= 0){
					$(".opSetting_table").children("tbody").append( 
						'<tr data-value="profitPercent"><td><span>利润率'+
						'</span></td><td><span>'+ filterS(res.profitPercent)+
						'</span></td><td><span class="opSettingDelTd" data-value="'+filterS(res.profitPercent)+'" data-name="利润率">设置' +
						'</span></td></tr>'
					);
				}
				$(".opSetting_table >tbody >tr").each(function(){tableTrKeepBg(this);})
			} else { errorType(data); }
		})
	}

//用户列表总数
	var userCountFn = function(){
		bugAjax({
			type : 'get',
			url : 'user/count',
			dataJson: {
				id: 		$('#user_userId').val(),
				phone: 		$('#user_phone').val(),
				ip: $('#user_registerIP').val()
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
				$(".user_table >thead strong.allCount").html('共'+ data.root +'条记录');
				if ( data.root <= 20 ) {
					$(".userPagination").html('');
					$(".main_pagination").attr("data-value",0);
					userHomeFn(0);
				} else {
					$(".userPagination").pagination(data.root,{
						num_edge_entries: 1, 					//两侧显示的首尾分页的条目数
						num_display_entries: 4, 				//连续分页主体部分显示的分页条目数
						items_per_page:20, 						//每页显示的条目数
						current_page: 0,						//当前选中的页面
						prev_text: '上一页',
						next_text: '下一页',
						callback: userPaginationCallback,		//回调函数
					}) 
					function userPaginationCallback(index) {
						userHomeFn(index);
						$(".main_pagination").attr("data-value",index);
						$(".pagination a").click(function(){ mdHid(); })
					}
				}
			} else { errorType(data); }
		})
	}
//用户列表主页
	var userHomeFn = function(number){
		bugAjax({
			type : 'get',
			url : 'user/query',
			dataJson: {
				id: 		$('#user_userId').val(),
				phone: 		$('#user_phone').val(),
				ip: $('#user_registerIP').val(),
				sorting: 	$(".user_table >thead >tr").attr("data-value"),
				firstResult: 	number*20,
				maxResults: 	20
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".user_table").children("tbody").html('');
				for (var i=0 ;i<data.root.length; i++ ) {
					var userList = data.root[i];
				//主页赋值
					$(".user_table").children("tbody").append(
						'<tr data-value="'+ userList.id +'"><td><span>'+ userList.id +
						'</span></td><td><span>'+ filterSS(userList.name) +
						'</span></td><td><span>'+ filterSS(userList.phone) +
						'</span></td><td><span>'+ filterSS(userList.company) +
						'</span></td><td><span>'+ filterSS(userList.registerIP) +
						'</span></td><td><span>'+ getTime_fromMesc(userList.registerTime) +
						'</span></td><td><span>'+ filterSS(userList.lastLoginIP) +
						'</span></td><td><span>'+ getTime_fromMesc(userList.lastLoginTime) +
						'</span></td></tr>'
					);
				}
				userDetailShow();
				$(".user_table >tbody >tr").each(function(){ tableTrKeepBg(this); })
			} else { errorType(data); }
		})
	}
//用户列表详情页
	var userDetailFn = function(){ 
		bugAjax({
			type : 'get',
			url : 'user/get',
			dataJson : { 
				id : function(){
					if ( $(".main_table").hasClass("user_table") ){
						var _index=$(".user_table >tbody >tr.main_table_tbody_tr_active").index();
						return $(".user_table >tbody >tr").eq(_index).attr("data-value");
					} else {
						return $(".main_detail").attr("data-value");
					}					
				}
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".userD_id").html( data.root.id );
				$(".userD_name").html( filterSS(data.root.name) );
				$(".userD_phone").html( filterSS(data.root.phone) );
				// $(".userD_email").html( filterSS(data.root.email) );
				$(".userD_company").html( filterSS(data.root.company) );
				$(".userD_registerIP").html( filterSS(data.root.registerIP) );
				$(".userD_registerTime").html( getTime_fromMesc(data.root.registerTime) );
				$(".userD_lastLoginIP").html( filterSS(data.root.lastLoginIP) );
				$(".userD_lastLoginTime").html( getTime_fromMesc(data.root.lastLoginTime) );

				if (data.root.email){
					var link = filterSS(data.root.email)
					// $(".userD_email span").html(link);
					$(".userD_email a").html(link);
					$(".userD_email a").attr("href", "mailto:" + link);
					// if (data.root.email.indexOf("@") > -1 ){
					// 	$(".userD_email").html(data.root.email.split("@")[0]+"@<span class=''>"+ data.root.email.split("@")[1] +"</span>");
					// } else {
					// 	$(".userD_email").html('');
					// }
				} else {
					$(".userD_email").html('');
				}

			//弹出框赋值
				$("#userPwdEditForm").attr("data-name", filterSS(data.root.name));
				$("#userPwdEditForm").attr("data-company", filterSS(data.root.company));
				$("#userEdit_name").val(filterS(data.root.name));
				$("#userEdit_company").val(filterS(data.root.company));

			} else { errorType(data); }
		})
	}

//订单列表总数
	var omListCountFn = function(){
		bugAjax({
			type : 'get',
			url : 'order/count',
			dataJson: {
				state: 		$('.omList_stateDropdown strong').attr('data-value'),
				userId: 	$('#omList_userId').val(),
				orderNo: 	$('#omList_orderNo').val(),
				tradeNo: 	$("#omList_tradeNo").val()
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
				$(".omList_table >thead strong.allCount").html('共'+ data.root +'条记录');
				if ( data.root <= 20 ) {
					$(".omListPagination").html('');
					$(".main_pagination").attr("data-value",0);
					omListHomeFn(0);
				} else {
					$(".omListPagination").pagination(data.root,{
						num_edge_entries: 1, 					//两侧显示的首尾分页的条目数
						num_display_entries: 4, 				//连续分页主体部分显示的分页条目数
						items_per_page:20, 						//每页显示的条目数
						current_page: 0,						//当前选中的页面
						prev_text: '上一页',
						next_text: '下一页',
						callback: omListPaginationCallback,		//回调函数
					}) 
					function omListPaginationCallback(index) {
						omListHomeFn(index);
						$(".main_pagination").attr("data-value",index);
						$(".pagination a").click(function(){ mdHid(); })
					}
				}
			} else { errorType(data); }
		})
	}
//订单列表主页
	var omListHomeFn = function(number){ 
		bugAjax({
			type : 'get',
			url : 'order/query',
			dataJson: {
				state: 		$('.omList_stateDropdown strong').attr('data-value'),
				userId: 	$('#omList_userId').val(),
				orderNo: 	$('#omList_orderNo').val(),
				tradeNo: 	$("#omList_tradeNo").val(),
				sorting: 	$(".omList_table >thead >tr").attr("data-value"),
				firstResult: 	number*20,
				maxResults: 	20
			}
		},function(data){
			// console.log(data.root,data);
			if (data.success) {
			//重置
				$(".omList_table").children("tbody").html('');
				for (var i=0 ;i<data.root.length; i++ ) {
					var omList = data.root[i];
				//主页赋值
					$(".omList_table").children("tbody").append(
						'<tr data-value="'+ omList.id +'"><td><span>'+ omList.id +
						'</span></td><td><span>'+ filterS(omList.orderNo) +
						'</span></td><td><span>'+ filterS(omList.userId) +
						'</span></td><td><span class="user">'+
						'</span></td><td><span class="state">'+
						'</span></td><td><span>'+ getTime_fromMesc(omList.orderTime) +
						'</span></td><td><span>'+ filterS(omList.tradeNo) +
						'</span></td><td><span>'+ filterS(omList.fee) +
						'</span></td><td><span>'+ getTime_fromMesc(omList.tradeTime) +
						'</span></td></tr>'
					);
					if(omList.user) omD_userFn($(".omList_table tbody >tr").eq(i).find('span.user'), omList.user);
					omD_stateFn($(".omList_table tbody >tr").eq(i).find('span.state'), filterS(omList.state));
				}
				omListDetailShow();
				$(".omList_table >tbody >tr").each(function(){ tableTrKeepBg(this); })
			} else { errorType(data); }
		})
	}
//订单列表 详情页
	var omListDetailFn = function(){ 
		bugAjax({
			type : 'get',
			url : 'order/get',
			dataJson : { 
				id : function(){
					if ( $(".main_table").hasClass("omList_table") ){
						var _index=$(".omList_table >tbody >tr.main_table_tbody_tr_active").index();
						return $(".omList_table >tbody >tr").eq(_index).attr("data-value");
					} else {
						return $(".main_detail").attr("data-value");
					}					
				}
			}
		},function(data){
			console.log(data.root,data);
			if (data.success) {
			//权限
				userToOmListAllow(data);
				var boss_mdOmObj = {
					id: data.root.id,
					userId: filterS(data.root.userId)
				}
				bugStorage.setItem('boss_mdOmObj',JSON.stringify(boss_mdOmObj));
			//Detail赋值
				$(".main_detail").attr('data-value',data.root.id);
				$(".mdOmId").html( data.root.id );
				$(".mdOmUserId").html( filterS(data.root.userId) );
				$(".mdOmOrderNo").html( filterS(data.root.orderNo) );
				// $(".mdOmState").html( filterS(data.root.state) );
				$(".mdOmOrderTime").html( getTime_fromMesc(data.root.orderTime) );
				$(".mdOmTradeNo").html( filterS(data.root.tradeNo) );
				$(".mdOmFee").html( filterS(data.root.fee) );
				$(".mdOmTradeTime").html( getTime_fromMesc(data.root.tradeTime) );
				omD_stateFn($(".mdOmState"), filterS(data.root.state));

			//订单内容
				if (data.root.projectIds){//认证项目
					$(".mdOm_project").html('');
					for(var i=0; i<data.root.projectIds.length; i++){
						$(".mdOm_project").append('<p>'+getOpCfProjectTitle(data.root.projectIds[i])+'</p>');
					}
				}
				if (data.root.personOptionId){//企业认证人数
					$(".mdOm_person").html(getOpCfPeoNumTitle(data.root.personOptionId));
				}
				if (data.root.timeOptionId){//获证时间周期
					$(".mdOm_time").html(getOpCfCycleTitle(data.root.timeOptionId));
				}
				$(".mdOm_description").html(filterSS(data.root.description));
				if (data.root.cityOptionId){//城市选择
					$(".mdOm_city").html(getOpCfCityProvince(data.root.cityOptionId)+'-'+getOpCfCityCity(data.root.cityOptionId));
					$(".omListEditCity .prov option").each(function(){
						if ($(this).val() == getOpCfCityProvince(data.root.cityOptionId)){
							$(this).attr("selected","selected");
							var omListEditCityObj = JSON.parse(bugStorage.getItem('boss_opCfCityList'));
							$(".omListEditCity .city").html('');
							for (var k=0; k<omListEditCityObj.length; k++){
								if ($(".omListEditCity .prov :selected").val() == omListEditCityObj[k].province){
									$(".omListEditCity .city").append('<option value="'+omListEditCityObj[k].id+'" data-travelPriceEnabled="'+ omListEditCityObj[k].travelPriceEnabled +'">'+omListEditCityObj[k].city+'</option>');
								}
							}
							$(".omListEditCity .city option").each(function(){
								if ($(this).html() == getOpCfCityCity(data.root.cityOptionId)){
									$(this).attr("selected","selected");

									if ($(this).attr("data-travelPriceEnabled") == 'false'){
										$(".omListEditTravelPrice_show").hide(0);
									}
								}
							})
						}
					})
				}
				if (data.root.designOptionId){//有无设计
					$(".mdOm_design").html(getOpIsDesignTitle(data.root.designOptionId));
				}
				if (data.root.licenseOptionId){//有无许可证要求
					$(".mdOm_license").html(getOpIsLicenseTitle(data.root.licenseOptionId));
				}
				if (data.root.legalOptionIds){//法律法规文件
					$(".mdOm_legal").html('');
					for(var i=0; i<data.root.legalOptionIds.length; i++){
						$(".mdOm_legal").append('<p>'+getOpcfLawTitle(data.root.legalOptionIds[i])+'</p>');
					}
				}
				if (data.root.authOptionId){//认证机构选择
					$(".mdOm_auth").html(getOpCfOrgTitle(data.root.authOptionId));
				}
				if (data.root.invoiceOptionId){//发票需要
					$(".mdOm_invoice").html(getOpCfInvoiceTitle(data.root.invoiceOptionId));
				}
				if (data.root.operateOptionId){//配合度
					$(".mdOm_operate").html(getOpCfCooperationTitle(data.root.operateOptionId));
				}
				if (data.root.visitOptionId){//需上门洽谈
					$(".mdOm_visit").html(getOpVisitTitle(data.root.visitOptionId));
				}

				trueToYes($(".mdOm_travelPrice"), data.root.travelPriceIncluded);
				popupCheck_Init($(".omListEditTravelPrice"), data.root.travelPriceIncluded);

				var cityOption = data.root.cityOption || {}
				if (!cityOption.travelPriceEnabled){
					$(".mdOm_travelPrice-row").hide(0);
				}

				$(".mdOm_notes").html(filterSS(data.root.notes));
				$(".mdOm_comment").html(filterSS(data.root.evaluationComment));

				// $(".mdOm_score").html(filterS(data.root.evaluationScore));

				if (data.root.commScore !== undefined){
					var res = data.root || {};
					var mdOmScoreHtml = '沟通 ' + (res.commScore || 0) + ' 专业 ' + (res.expertScore || 0) + ' 仪态 ' + (res.mannerScore || 0) + ' 进度 ' + (res.progressScore || 0) + ' 文件 ' + (res.fileScore || 0);
					$(".mdOm_score").html(mdOmScoreHtml);
				}


			//订单详情修改赋值
				popupCheck_Init($(".omListEditProject"), data.root.projectIds);
				popupCheck_Init($(".omListEditPerson"), data.root.personOptionId);
				popupCheck_Init($(".omListEditTime"), data.root.timeOptionId);
				$("#omListEditDescription").val(filterS(data.root.description));
				popupCheck_Init($(".omListEditDesign"), data.root.designOptionId);
				popupCheck_Init($(".omListEditLicense"), data.root.licenseOptionId);
				popupCheck_Init($(".omListEditLegal"), data.root.legalOptionIds);
				popupCheck_Init($(".omListEditAuth"), data.root.authOptionId);
				popupCheck_Init($(".omListEditInvoice"), data.root.invoiceOptionId);
				popupCheck_Init($(".omListEditOperate"), data.root.operateOptionId);
				popupCheck_Init($(".omListEditVisit"), data.root.visitOptionId);
				$("#omListEditNotes").val(filterS(data.root.notes));
				$("#addOrderEvaluate_score").val(filterS(data.root.evaluationScore));
				$("#addOrderEvaluate_comment").val(filterS(data.root.evaluationComment));


				checkFuzhi($(".omListEdit_state"), data.root.state);

			} else { errorType(data); }
		})
	}

// 系统设置 总数
var opSymSettingListHomeFn = function(){
	bugAjax({
		type : 'get',
		url : 'settings/get'
	},function(data){
		console.log(data.root,data);
		if (data.success) {
			var res = data.root || {};
			var opSymSetting_table = $(".opSymSetting_table");
			opSymSetting_table.find(".companyFullname .value2").html(filterS(res.companyName));
			opSymSetting_table.find(".companyEnname .value2").html(filterS(res.englishName));
			opSymSetting_table.find(".companyBrief .value2").html(filterS(res.briefName));
			
			opSymSetting_table.find(".companyIntro .value2").html(filterSS(res.introduction));
			opSymSetting_table.find(".companyIntro .value2").attr("data-value", filterS(res.introduction) );
			opSymSetting_table.find(".companyAddress .value2").html(filterSS(res.companyAddress));
			opSymSetting_table.find(".companyAddress .value2").attr("data-value", filterS(res.companyAddress));

			opSymSetting_table.find(".companyContact .value2").html(filterS(res.contact));
			opSymSetting_table.find(".companyContactPhone .value2").html(filterS(res.contactPhone));
			opSymSetting_table.find(".companyContactEmail .value2").html(filterS(res.email));
			opSymSetting_table.find(".companyBusinessPhone .value2").html(filterS(res.businessPhone));

			opSymSetting_table.find(".companyBankAccount .value2").html(filterS(res.bankAccount));
			opSymSetting_table.find(".companyBankName .value2").html(filterS(res.bankName));
			opSymSetting_table.find(".companyTaxCode .value2").html(filterS(res.taxCode));
			opSymSetting_table.find(".companyTaxCodePhone .value2").html(filterS(res.bankPhone));
			opSymSetting_table.find(".companyQQ .value2").html(filterS(res.companyQQ));
			opSymSetting_table.find(".companyWeixinCodeUrl .value2").html(filterS(res.weixinCodeUrl));


		// $(".opSymSetting_table >tbody >tr").each(function(){tableTrKeepBg(this);})
		} else { 
			errorType(data); 
		}
	})
}















