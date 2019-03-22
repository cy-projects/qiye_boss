$(function(){
//认证项目  增加
	$(document).on("click",".opCfProjectAdd",function(){
		loadPage2("popup.html", "#opCfProjectAddForm", function(element){
			popupAdd("增加认证项目", element.outerHTML, function(){
				popupCheck_Init($(".opCfProjectAddTravelPrice"), false);
				popupCheck_click($(".opCfProjectAddTravelPrice"));
			});
		})
	})
//认证项目  修改
	$(document).on("click",".mdOpCfProjectEditBtn",function(){
		loadPage2("popup.html", "#opCfProjectEditForm", function(element){
			popupEdit("编辑认证项目", element.outerHTML, function(){
				popupCheck_click($(".opCfProjectEditTravelPrice"));

				opCfProjectDetailFn();
			});
		})
	})
//认证项目  定价
	$(document).on("click",".mdOpCfProjectSetPriceBtn",function(){
		loadPage2("popup.html", "#opCfProjectSetpForm", function(element){
			popupEdit("项目定价", element.outerHTML, function(){
				var cfPerson = JSON.parse(bugStorage.getItem('boss_opCfPeoNumList'));
				$(".opCfProjectSetp_person").html('<h4>企业认证人数</h4>')
				for (var i=0; i<cfPerson.length; i++){
					$(".opCfProjectSetp_person").append(
						'<div class="col-sm-12">\
							<label class="col-sm-2">'+cfPerson[i].title+'</label>\
							<div class="col-sm-9">\
								<input type="text" placeholder="请输入价格" value="'+cfPerson[i].price+'" data-id="'+cfPerson[i].id+'">\
								<span>元</span>\
							</div>\
						</div>')
				}
				var cfTime = JSON.parse(bugStorage.getItem('boss_opCfCycleList'));
				$(".opCfProjectSetp_time").html('<h4>获证时间周期</h4>')
				for (var i=0; i<cfTime.length; i++){
					$(".opCfProjectSetp_time").append(
						'<div class="col-sm-12">\
							<label class="col-sm-2">'+cfTime[i].title+'</label>\
							<div class="col-sm-9">\
								<input type="text" placeholder="请输入价格" value="'+cfTime[i].price+'" data-id="'+cfTime[i].id+'" data-dis="false" data-value="'+cfTime[i].price+'">\
								<span>元</span>\
								<input type="checkbox" />\
								<strong>禁用</strong>\
							</div>\
						</div>')
				}
				opCfProjectDetailFn();
				projectSetp_click($(".opCfProjectSetp_time >div"))
			});
		})
	})
//企业认证人数  增加
	$(document).on("click",".opCfPeoNumAdd",function(){
		loadPage2("popup.html", "#opCfPeoNumAddForm", function(element){
			popupAdd("增加企业认证人数", element.outerHTML);
		})
	})
//企业认证人数  修改
	$(document).on("click",".mdOpCfPeoNumEditBtn",function(){
		loadPage2("popup.html", "#opCfPeoNumEditForm", function(element){
			popupEdit("编辑企业认证人数", element.outerHTML, opCfPeoNumDetailFn);
		})
	})
//认证机构  增加
	$(document).on("click",".opCfOrgAdd",function(){
		loadPage2("popup.html", "#opCfOrgAddForm", function(element){
			popupAdd("增加认证机构", element.outerHTML);
		})
	})
//认证机构  修改
	$(document).on("click",".mdOpCfOrgEditBtn",function(){
		loadPage2("popup.html", "#opCfOrgEditForm", function(element){
			popupEdit("编辑认证机构", element.outerHTML, opCfOrgDetailFn);
		})
	})
//有无设计  增加
	$(document).on("click",".opIsDesignAdd",function(){
		loadPage2("popup.html", "#opIsDesignAddForm", function(element){
			popupAdd("增加设计", element.outerHTML);
		})
	})
//有无设计  修改
	$(document).on("click",".mdOpIsDesignEditBtn",function(){
		loadPage2("popup.html", "#opIsDesignEditForm", function(element){
			popupEdit("编辑设计", element.outerHTML, opIsDesignDetailFn);
		})
	})
//获证时间周期  增加
	$(document).on("click",".opCfCycleAdd",function(){
		loadPage2("popup.html", "#opCfCycleAddForm", function(element){
			popupAdd("增加获证时间周期", element.outerHTML);
		})
	})
//获证时间周期  修改
	$(document).on("click",".mdOpCfCycleEditBtn",function(){
		loadPage2("popup.html", "#opCfCycleEditForm", function(element){
			popupEdit("编辑获证时间周期", element.outerHTML, opCfCycleDetailFn);
		})
	})
//法律法规文件  增加
	$(document).on("click",".opcfLawAdd",function(){
		loadPage2("popup.html", "#opcfLawAddForm", function(element){
			popupAdd("增加法律法规文件", element.outerHTML);
		})
	})
//法律法规文件  修改
	$(document).on("click",".mdOpcfLawEditBtn",function(){
		loadPage2("popup.html", "#opcfLawEditForm", function(element){
			popupEdit("编辑法律法规文件", element.outerHTML, opcfLawDetailFn);
		})
	})
//有无许可证要求  增加
	$(document).on("click",".opIsLicenseAdd",function(){
		loadPage2("popup.html", "#opIsLicenseAddForm", function(element){
			popupAdd("增加许可证要求", element.outerHTML);
		})
	})
//有无许可证要求  修改
	$(document).on("click",".mdOpIsLicenseEditBtn",function(){
		loadPage2("popup.html", "#opIsLicenseEditForm", function(element){
			popupEdit("编辑许可证要求", element.outerHTML, opIsLicenseDetailFn);
		})
	})
//城市选择  增加
	$(document).on("click",".opCfCityAdd",function(){
		loadPage2("popup.html", "#opCfCityAddForm", function(element){
			popupAdd("增加城市选择", element.outerHTML, function(){
				popupCheck_Init($(".opCfCityAddTravelPrice"), false);
				popupCheck_click($(".opCfCityAddTravelPrice"));
			});
		})
	})
//城市选择  修改
	$(document).on("click",".mdOpCfCityEditBtn",function(){
		loadPage2("popup.html", "#opCfCityEditForm", function(element){
			popupEdit("编辑城市选择", element.outerHTML, function(){
				popupCheck_click($(".opCfCityEditTravelPrice"));
				opCfCityDetailFn();
			});
		})
	})
//发票需求  增加
	$(document).on("click",".opCfInvoiceAdd",function(){
		loadPage2("popup.html", "#opCfInvoiceAddForm", function(element){
			popupAdd("增加发票需求", element.outerHTML);
		})
	})
//发票需求  修改
	$(document).on("click",".mdOpCfInvoiceEditBtn",function(){
		loadPage2("popup.html", "#opCfInvoiceEditForm", function(element){
			popupEdit("编辑发票需求", element.outerHTML, opCfInvoiceDetailFn);
		})
	})
//配合度  增加
	$(document).on("click",".opCfCooperationAdd",function(){
		loadPage2("popup.html", "#opCfCooperationAddForm", function(element){
			popupAdd("增加配合度要求", element.outerHTML);
		})
	})
//配合度  修改
	$(document).on("click",".mdOpCfCooperationEditBtn",function(){
		loadPage2("popup.html", "#opCfCooperationEditForm", function(element){
			popupEdit("编辑配合度要求", element.outerHTML, opCfCooperationDetailFn);
		})
	})
//需上门洽谈  增加
	$(document).on("click",".opVisitAdd",function(){
		loadPage2("popup.html", "#opVisitAddForm", function(element){
			popupAdd("增加上门洽谈要求", element.outerHTML);
		})
	})
//需上门洽谈  修改
	$(document).on("click",".mdOpVisitEditBtn",function(){
		loadPage2("popup.html", "#opVisitEditForm", function(element){
			popupEdit("编辑上门洽谈要求", element.outerHTML, opVisitDetailFn);
		})
	})

//参数说明  增加
	$(document).on("click",".opDescriptionAdd",function(){
		loadPage2("popup.html", "#opDescriptionAddForm", function(element){
			popupAdd("增加参数说明", element.outerHTML);
		})
	})
//参数说明  修改
	$(document).on("click",".mdOpDescriptionEditBtn",function(){
		loadPage2("popup.html", "#opDescriptionEditForm", function(element){
			popupEdit("编辑参数说明", element.outerHTML, opDescriptionDetailFn);
		})
	})
//订单设置  修改
	$(document).on("click",".opSettingDelTd",function(){
		var _this = $(this);
		loadPage2("popup.html", "#opSettingEditForm", function(element){
			popupEdit("设置订单参数", element.outerHTML, function(){
				$(".opSettingEditPercentLabel").html(_this.attr("data-name"));
				$(".opSettingEditPercentLabel").attr("data-value",_this.parents("tr").attr("data-value"));
				$("#opSettingEditPercent").val(_this.attr("data-value"));
			});
		})
	})
//订单列表  修改
	$(document).on("click",".mdOmEditBtn",function(){
		loadPage2("popup.html", "#omListEditForm", function(element){
			popupEdit("编辑订单参数", element.outerHTML, function(){
				//认证项目
					var omListEditProjectList = JSON.parse(bugStorage.getItem('boss_opCfProjectList'));
					for (var i=0; i<omListEditProjectList.length; i++){
						$(".omListEditProject >ul").append('<li>\
																<input type="checkbox" name="projectIds" id="omListEditProjectItem'+i+'" value='+filterS(omListEditProjectList[i].id)+'>\
																<label for="omListEditProjectItem'+i+'">'+filterS(omListEditProjectList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditProject"));
				//企业认证人数
					var omListEditPersonList = JSON.parse(bugStorage.getItem('boss_opCfPeoNumList'));
					for (var i=0; i<omListEditPersonList.length; i++){
						$(".omListEditPerson >ul").append('<li>\
																<input type="radio" name="personOptionId" id="omListEditPersonItem'+i+'" value='+filterS(omListEditPersonList[i].id)+'>\
																<label for="omListEditPersonItem'+i+'">'+filterS(omListEditPersonList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditPerson"));
				//获证时间周期
					var omListEditTimeList = JSON.parse(bugStorage.getItem('boss_opCfCycleList'));
					for (var i=0; i<omListEditTimeList.length; i++){
						$(".omListEditTime >ul").append('<li>\
															<input type="radio" name="timeOptionId" id="omListEditTimeItem'+i+'" value='+filterS(omListEditTimeList[i].id)+'>\
															<label for="omListEditTimeItem'+i+'">'+filterS(omListEditTimeList[i].title)+'</label>\
														</li>');
					}
					popupCheck_click($(".omListEditTime"));
				//城市选择
					var omListEditCityObj = JSON.parse(bugStorage.getItem('boss_opCfCityList'));
					$(".omListEditCity select").html('');
					var provinceObjGet = [];
					for (var i=0; i<omListEditCityObj.length; i++){
						provinceObjGet.push(omListEditCityObj[i].province);
					}
					var provinceObj = unique(provinceObjGet);
					for (var j=0; j<provinceObj.length; j++){
						$(".omListEditCity .prov").append('<option value="'+provinceObj[j]+'">'+provinceObj[j]+'</option>')
					}
					$(".omListEditCity .city").html('');
					for (var k=0; k<omListEditCityObj.length; k++){
						if ($(".omListEditCity .prov :selected").val() == omListEditCityObj[k].province){
							$(".omListEditCity .city").append('<option value="'+omListEditCityObj[k].id+'" >'+omListEditCityObj[k].city+'</option>');
						}
					}

					$(".omListEditCity .prov").change(function(){
						var provIndex = this.selectedIndex;
						var provVal = $(this).val();
						$(".omListEditCity .city").html('');
						for (var k=0; k<omListEditCityObj.length; k++){
							if (provVal == omListEditCityObj[k].province){
								$(".omListEditCity .city").append('<option value="'+omListEditCityObj[k].id+'" data-travelPriceEnabled="'+ omListEditCityObj[k].travelPriceEnabled +'">'+omListEditCityObj[k].city+'</option>');
							}
						}
						fake();
					})
					$(".omListEditCity .city").change(function(){
						fake();
					})
					function fake(){
						if ($(".omListEditCity .city :selected").attr("data-travelPriceEnabled") == 'false'){
							$(".omListEditTravelPrice_show").hide(0);
						} else {
							$(".omListEditTravelPrice_show").show(0);
						}
					}
					
				//有无设计
					var omListEditDesignList = JSON.parse(bugStorage.getItem('boss_opIsDesignList'));
					for (var i=0; i<omListEditDesignList.length; i++){
						$(".omListEditDesign >ul").append('<li class="fl pd22">\
																<input type="radio" name="designOptionId" id="omListEditDesignItem'+i+'" value='+filterS(omListEditDesignList[i].id)+'>\
																<label for="omListEditDesignItem'+i+'">'+filterS(omListEditDesignList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditDesign"));
				//有无许可证要求
					var omListEditLicenseList = JSON.parse(bugStorage.getItem('boss_opIsLicenseList'));
					for (var i=0; i<omListEditLicenseList.length; i++){
						$(".omListEditLicense >ul").append('<li class="fl pd22">\
																<input type="radio" name="licenseOptionId" id="omListEditLicenseItem'+i+'" value='+filterS(omListEditLicenseList[i].id)+'>\
																<label for="omListEditLicenseItem'+i+'">'+filterS(omListEditLicenseList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditLicense"));
				//法律法规文件
					var omListEditLegalList = JSON.parse(bugStorage.getItem('boss_opcfLawList'));
					for (var i=0; i<omListEditLegalList.length; i++){
						$(".omListEditLegal >ul").append('<li>\
																<input type="checkbox" name="legalOptionIds" id="omListEditLegalItem'+i+'" value='+filterS(omListEditLegalList[i].id)+'>\
																<label for="omListEditLegalItem'+i+'">'+filterS(omListEditLegalList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditLegal"));
				//认证机构选择
					var omListEditAuthList = JSON.parse(bugStorage.getItem('boss_opCfOrgList'));
					for (var i=0; i<omListEditAuthList.length; i++){
						$(".omListEditAuth >ul").append('<li class="fl pd22">\
																<input type="radio" name="authOptionId" id="omListEditAuthItem'+i+'" value='+filterS(omListEditAuthList[i].id)+'>\
																<label for="omListEditAuthItem'+i+'">'+filterS(omListEditAuthList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditAuth"));
				//发票需要
					var omListEditInvoiceList = JSON.parse(bugStorage.getItem('boss_opCfInvoiceList'));
					for (var i=0; i<omListEditInvoiceList.length; i++){
						$(".omListEditInvoice >ul").append('<li class="fl pd22">\
																<input type="radio" name="invoiceOptionId" id="omListEditInvoiceItem'+i+'" value='+filterS(omListEditInvoiceList[i].id)+'>\
																<label for="omListEditInvoiceItem'+i+'">'+filterS(omListEditInvoiceList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditInvoice"));
				//配合度
					var omListEditOperateList = JSON.parse(bugStorage.getItem('boss_opCfCooperationList'));
					for (var i=0; i<omListEditOperateList.length; i++){
						$(".omListEditOperate >ul").append('<li class="">\
																<input type="radio" name="operateOptionId" id="omListEditOperateItem'+i+'" value='+filterS(omListEditOperateList[i].id)+'>\
																<label for="omListEditOperateItem'+i+'">'+filterS(omListEditOperateList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditOperate"));
				//配合度
					var omListEditVisitList = JSON.parse(bugStorage.getItem('boss_opVisitList'));
					for (var i=0; i<omListEditVisitList.length; i++){
						$(".omListEditVisit >ul").append('<li class="fl pd22">\
																<input type="radio" name="visitOptionId" id="omListEditVisitItem'+i+'" value='+filterS(omListEditVisitList[i].id)+'>\
																<label for="omListEditVisitItem'+i+'">'+filterS(omListEditVisitList[i].title)+'</label>\
															</li>');
					}
					popupCheck_click($(".omListEditVisit"));

					popupCheck_click($(".omListEditTravelPrice"));

				omListDetailFn();
			});
		})
	})
//订单列表  设置状态
	$(document).on("click",".mdOmSetStateBtn",function(){
		loadPage2("popup.html", "#omListSetStateForm", function(element){
			popupEdit("设置状态", element.outerHTML, function(){
				omListDetailFn();
				checkPick($("#omListSetStateForm"));
			});
		})
	})
// 订单列表 评价录入
$(document).on("click",".mdOmEvaluateBtn",function(){
	loadPage2("popup.html", "#omListEvaluateForm", function(element){
		popupEdit("服务评价", element.outerHTML, function(){
			
			omListDetailFn();

		});
	})
})


//用户列表  增加
	$(document).on("click",".userAdd",function(){
		loadPage2("popup.html", "#userAddForm", function(element){
			popupAdd("增加用户", element.outerHTML);
		})
	})
//用户列表  修改
	$(document).on("click",".userD_editBtn",function(){
		loadPage2("popup.html", "#userEditForm", function(element){
			popupEdit("编辑用户信息", element.outerHTML, userDetailFn);
		})
	})
//用户列表  修改密码
	$(document).on("click",".userD_pwdEditBtn",function(){
		loadPage2("popup.html", "#userPwdEditForm", function(element){
			popupEdit("修改用户密码", element.outerHTML, userDetailFn);
		})
	})



//系统设置  增加
	$(document).on("click",".opSymSettingAdd",function(){
		loadPage2("popup.html", "#opSymSettingAddForm", function(element){
			popupEdit("设置", element.outerHTML, function(){
				var opSymSetting_table = $(".opSymSetting_table");
				$("#opSymSettingAdd_companyFullname").val( opSymSetting_table.find('.companyFullname .value2').html() )
				$("#opSymSettingAdd_companyEnname").val( opSymSetting_table.find('.companyEnname .value2').html() )
				$("#opSymSettingAdd_companyBrief").val( opSymSetting_table.find('.companyBrief .value2').html() )
				$("#opSymSettingAdd_companyIntro").val( opSymSetting_table.find('.companyIntro .value2').attr("data-value") )
				$("#opSymSettingAdd_companyAddress").val( opSymSetting_table.find('.companyAddress .value2').attr("data-value") );


				$("#opSymSettingAdd_companyContact").val( opSymSetting_table.find('.companyContact .value2').html() )
				$("#opSymSettingAdd_companyContactPhone").val( opSymSetting_table.find('.companyContactPhone .value2').html() )
				$("#opSymSettingAdd_companyContactEmail").val( opSymSetting_table.find('.companyContactEmail .value2').html() )
				$("#opSymSettingAdd_companyBusinessPhone").val( opSymSetting_table.find('.companyBusinessPhone .value2').html() )
				$("#opSymSettingAdd_companyBankAccount").val( opSymSetting_table.find('.companyBankAccount .value2').html() )
				$("#opSymSettingAdd_companyBankName").val( opSymSetting_table.find('.companyBankName .value2').html() )
				$("#opSymSettingAdd_companyTaxCode").val( opSymSetting_table.find('.companyTaxCode .value2').html() )
				$("#opSymSettingAdd_companyTaxCodePhone").val( opSymSetting_table.find('.companyTaxCodePhone .value2').html() )
				$("#opSymSettingAdd_companyQQ").val( opSymSetting_table.find('.companyQQ .value2').html() )
				$("#opSymSettingAdd_companyWeixinCodeUrl").val( opSymSetting_table.find('.companyWeixinCodeUrl .value2').html() )
			});
		})
	})




})

//封装layer-confirm确认框的相似参数
	var confirmObj ={
		title : '提示',
		move : false,
		success: function(layero, index){
			$(layero).find(".layui-layer-setwin a").removeClass("layui-layer-ico").addClass("fa fa-remove");
			$(layero).find(".layui-layer-setwin").attr("title","关闭");
		}
	}
// layer回调相似
	var layerCallback =function(layero){
		layero.find(".layui-layer-setwin a").removeClass("layui-layer-ico").addClass("fa fa-remove");
		layero.find(".layui-layer-setwin").attr("title","关闭");
		layero.find(".layui-layer-content").css({height: 'auto'});
		layero.find(".cancelBtn").click(function(){
			layero.remove();
			$(".layui-layer-shade").last().remove();
		})
		slimScrollFn();
	}

//增加弹出层
	var popupAdd =function (title, ele, fn){
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-plus-circle'></i><strong>" + title + "</strong></span>",
	        type: 1,
	        area:  '600px',
	        // shadeClose: true,
	        content: ele,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0,
	        success: function(layero, index){
				layerCallback(layero);
				if (fn) { fn();  }
			}
	    });
	}
//编辑弹出层
	var popupEdit =function (title, ele, fn){
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-edit'></i><strong>" + title + "</strong></span>",
	        type: 1,
	        area: '600px',
	        // shadeClose: true,
	        content: ele,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0,
	        success: function(layero, index){
				layerCallback(layero);
				if (fn) { fn(); }
			}
	    });
	}
//绑定弹出层
	var popupBind =function ( a , b){
		b.find("input[type=text]").val('');
		b.find("input[type=password]").val('');
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-legal'></i><strong>" + a + "</strong></span>",
	        type: 1,
	        area: '700px',
	        shadeClose: true,
	        content: b,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0,
	        success: function(layero, index){
				layerCallback(layero);
			}
	    });
		inputTextBorderColor();
	}
//上传照片
	var popupUploadPhoto =function ( b ){
		$(".upload-fileImg").html('<div class="default tcenter"><span class="default-img"><i class="fa fa-picture-o fa-4x"></i><i class="fa fa-plus fa-2x plus"></i></span></div>');
	    layer.open({
	    	title: "<span class='layer_title'><i class='fa fa-plus-circle'></i><strong>Upload photo</span></span>",
	        type: 1,
	        area: '340px',
	        shadeClose: true,
	        content : b,
	        offset: '60px',
	        shade:  [0.5, '#000000'],
	        shift: 0,
	        success: function(layero, index){
				layerCallback(layero);
			}
	    });
	    inputTextBorderColor();
	}
