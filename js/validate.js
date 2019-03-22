
	// var phoneReg = new RegExp(/\d+-?/);
	// var phoneReg = new RegExp(/[0-9-]/);
	// var emailReg = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	// var emailReg = new RegExp(/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$ /);
	// var emailReg = new RegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

    var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // var pwdReg = /^(?!\D+$)(?![^a-z]+$)[a-zA-Z\d]{6,20}$/;
    var pwdReg =  /^\w{6,20}$/;
    var ipReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    var nonnegativeIntegerReg = /(^[1-9]+\d*$)|(^0$)/; //非负整数
    var nonnegativeRealNumberReg = /^\d+(\.{0,1}\d+){0,1}$/; //非负实数
//正整数
        // var patrn = /^\d+$/;
        var zhengzhengshu = /^[0-9]*[1-9][0-9]*$/;
    
    var validatePwd = function (value) {
        return pwdReg.test(value.trim());
    };
    //验证邮箱
        var validateEmail = function(value){
            return emailReg.test(value.trim());
        };
    // 验证非负整数
        var validateNInteger = function (value) {
            return nonnegativeIntegerReg.test(value);
        };
    // 验证非负实数
        var validateNRealNum = function (value) {
            return nonnegativeRealNumberReg.test(value);
        };
    //校验手机号码：必须以数字开头，除数字外，可含有“-”
        // var phoneReg = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
        var phoneReg = /^1\d{10}$|^\d{4}-\d{7}$|^\d{3}-\d{8}$/;


$(function(){
	$(document).on("blur","#userName",function(){
    	var userNameInput = $(this).val();
    	if ( userNameInput.trim() != '' ) {
    		// if ( !validateEmail(userNameInput) ) {
    		// 	$(this).parent().siblings('span.inputTips').html('<i class="fa fa-times-circle"></i> 邮箱格式错误');
    		// 	return false;
    		// } else {
    		// 	$(this).parent().siblings('span.inputTips').html('');
    		// }
            $(this).parent().siblings('span.inputTips').html('');
    	} else{
    		$(this).parent().siblings('span.inputTips').html('<i class="fa fa-times-circle"></i> 用户名不能为空');
    	}
    })
    $(document).on("blur","#pwd",function(){
    	var pwdInput = $(this).val();
    	if ( pwdInput.trim() != '' ) {
            // if ( !validatePwd(pwdInput) ) {
            //     $(this).parent().siblings('span.inputTips').html('<i class="fa fa-times-circle"></i> 密码必须6-20个字符');
            //     return false;
            // } else {
            //     $(this).parent().siblings('span.inputTips').html('');
            // }
            $(this).parent().siblings('span.inputTips').html('');
    	} else{
    		$(this).parent().siblings('span.inputTips').html('<i class="fa fa-times-circle"></i> 密码不能为空');
    	}
    })
})