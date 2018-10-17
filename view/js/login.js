var login = (function(){
    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            this.event();
        },
        event: function() {
            var _this = this;
            // 提交按钮
            this.$loginBtn.onclick = function() {

                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        console.log(data);
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                };
                sendAjax('http://localhost:30/project/php/login.php', params);
            }
        },
        loginSuccess: function(data) {
            if(data.code == 200) {
                document.cookie = "token=" + data.data.token;
                document.cookie = "user-id=" + data.data.id;

                location.href = 'manager.html';
            } else {
                alert(data.msg);
            }
        }
    }

}());






//form

$(function() {

    //页面切换初始化
    $(".number2").click(function () {
        $(".mainForm1").show();
        $(".mainForm2").hide();
        $(".error").hide();
        $(".normalInput").removeClass("errorC");
        $(".normalInput").removeClass("checkedN");
        $(".mainForm input").val("");
    });
    $(".number1").click(function () {
        $(".mainForm2").show();
        $(".mainForm1").hide();
        $(".error").hide();
        $(".normalInput").removeClass("errorC");
        $(".normalInput").removeClass("checkedN");
        $(".mainForm input").val("");
    });


    //mainform1
    //密码是否可见(mainform1)
    $(".pwdBtnShow").click(function () {
        if ($(".pwdBtnShow").attr("isshow") == "false") {
            $(".pwdBtnShow i").css("background-position", "-60px -93px");
            $(".password").hide();
            $(".password1").val($(".password").val());
            $(".password1").show();
            $(".pwdBtnShow").attr("isshow", "true");
        }
        else {
            $(".pwdBtnShow i").css("background-position", "-30px -93px");
            $(".password1").hide();
            $(".password").val($(".password1").val());
            $(".password").show();
            $(".pwdBtnShow").attr("isshow", "false");
        }

    });

    //手机号栏失去焦点
    $(".phone").blur(function () {
        reg = /^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

        if ($(".phone").val() == "") {
            $(".phone").parent().addClass("errorC");
            $(".error1").html("请输入手机号");
            $(".error1").css("display", "block");
        }
        else if ($(".phone").val().length < 11) {
            $(".phone").parent().addClass("errorC");
            $(".error1").html("手机号长度有误！");
            $(".error1").css("display", "block");
        }
        else if (!reg.test($(".phone").val())) {
            $(".phone").parent().addClass("errorC");
            $(".error1").html("逗我呢吧，你确定这是你的手机号!!");
            $(".error1").css("display", "block");
        }
        else {
            $(".phone").parent().addClass("checkedN");
        }
    });

    //验证码栏失去焦点
    $(".kapkey").blur(function () {
        reg = /^.*[\u4e00-\u9fa5]+.*$/;
        if ($(".kapkey").val() == "") {
            $(".kapkey").parent().addClass("errorC");
            $(".error2").html("请填写验证码");
            $(".error2").css("display", "block");
        }
        else if ($(".kapkey").val().length < 6) {
            $(".kapkey").parent().addClass("errorC");
            $(".error2").html("验证码长度有误！");
            $(".error2").css("display", "block");
        }
        else if (reg.test($(".kapkey").val())) {
            $(".kapkey").parent().addClass("errorC");
            $(".error2").html("验证码里无中文！");
            $(".error2").css("display", "block");
        }
        else {
            $(".kapkey").parent().addClass("checkedN");
        }
    });

    //密码栏失去焦点(mainform1)
    $(".password,.password1").blur(function () {
        reg1 = /^.*[\d]+.*$/;
        reg2 = /^.*[A-Za-z]+.*$/;
        reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码
        if ($(".pwdBtnShow").attr("isshow") == "false") {
            var Pval = $(".password").val();
        }
        else {
            var Pval = $(".password1").val();
        }

        if (Pval == "") {
            $(".password").parent().addClass("errorC");
            $(".error3").html("请填写密码");
            $(".error3").css("display", "block");
        }
        else if (Pval.length > 16 || Pval.length < 8) {
            $(".password").parent().addClass("errorC");
            $(".error3").html("密码应为8-16个字符，区分大小写");
            $(".error3").css("display", "block");
        }
        else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)) )) {
            $(".password").parent().addClass("errorC");
            $(".error3").html("需至少包含数字、字母和符号中的两种类型");
            $(".error3").css("display", "block");
        }
        else {
            $(".password").parent().addClass("checkedN");
        }
    });

    //手机号栏获得焦点
    $(".phone").focus(function () {
        $(".phone").parent().removeClass("errorC");
        $(".phone").parent().removeClass("checkedN");
        $(".error1").hide();
        $("#mz_Float").css("top", "232px");
        $("#mz_Float").find(".bRadius2").html("输入11位手机号码，可用于登录和找回密码");
    });

    //密码栏获得焦点(mainform1)
    $(".password,.password1").focus(function () {
        $(".password").parent().removeClass("errorC");
        $(this).parent().removeClass("checkedN");
        $(".error3").hide();
        if ($(".error1").css("display") == "block" && $(".error2").css("display") == "block") {
            $("#mz_Float").css("top", "436px");
        }
        else if ($(".error1").css("display") == "block" || $(".error2").css("display") == "block") {
            $("#mz_Float").css("top", "406px");
        }
        else {
            $("#mz_Float").css("top", "376px");
        }

        $("#mz_Float").find(".bRadius2").html("长度为8-16个字符，区分大小写，至少包含两种类型");
    });


    //mainform1end


    //mainForm2
    //密码是否可见(mainform2)
    $(".pwdBtnShowN").click(function () {
        if ($(".pwdBtnShowN").attr("isshow") == "false") {
            $(".pwdBtnShowN i").css("background-position", "-60px -93px");
            $(".passwordN").hide();
            $(".password1N").val($(".passwordN").val());
            $(".password1N").show();
            $(".pwdBtnShowN").attr("isshow", "true");
        }
        else {
            $(".pwdBtnShowN i").css("background-position", "-30px -93px");
            $(".password1N").hide();
            $(".passwordN").val($(".password1N").val());
            $(".passwordN").show();
            $(".pwdBtnShowN").attr("isshow", "false");
        }

    });


    //账户名栏获得焦点
    $(".username").focus(function () {
        $(".username").parent().removeClass("errorC");
        $(".username").parent().removeClass("checkedN");
        $(".error1").hide();
        $("#mz_Float").css("top", "232px");
        $("#mz_Float").find(".bRadius2").html("长度为4-32个字符支持数字、字母、下划线");
    });
    //密码栏获得焦点(mainform2)
    $(".passwordN,.password1N").focus(function () {
        $(".passwordN").parent().removeClass("errorC");
        $(this).parent().removeClass("checkedN");
        $(".error3").hide();
        if ($(".error1").css("display") == "block") {
            $("#mz_Float").css("top", "334px");
        }
        else {
            $("#mz_Float").css("top", "304px");
        }

        $("#mz_Float").find(".bRadius2").html("长度为8-16个字符，区分大小写，至少包含两种类型");
    });

    // 账户名栏失去焦点
    $(".username").blur(function () {
        reg = /^[a-zA-Z][0-9a-zA-Z_]{2,30}[0-9a-zA-Z]$/;//验证手机正则(输入前7位至11位)

        if ($(".username").val() == "") {
            $(".username").parent().addClass("errorC");
            $(".error1").html("请输入账户名");
            $(".error1").css("display", "block");
        }
        else if ($(".username").val().length >36  || $(".username").val().length < 4) {
            $(".username").parent().addClass("errorC");
            $(".error1").html("账户名长度有误！");
            $(".error1").css("display", "block");
        }
        else {
            $(".username").parent().addClass("checkedN");
        }
    });
});





