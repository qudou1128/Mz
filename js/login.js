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


// /点击安扭出现
$("#btn").click(function(){
    if($('#tip-box').css('display') == 'none'){
        $('#tip-box').show();
    }else{
        $('#tip-box').hide();
    }
})

