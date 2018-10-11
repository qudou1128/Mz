var register = (function(){

    return {
        init: function(ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$registerBtn = this.$ele['register-btn'];
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp =this.$ele['password'];
            // this.event();
        },
        event: function() {
            var _this = this;
            // 提交按钮
            this.$registerBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.register(data);
                    }
                }
                sendAjax('http://localhost:30/project/php/register.php', params);
            },
                // 判断用户名称是否存在
                this.$usernameInp. addEventListener('change', function(){
                    var params = {
                        method: 'post',
                        data: {
                            username: _this.$usernameInp.value
                        },
                        success: function(data) {
                            data = JSON.parse(data);
                            _this.checkUsername(data);
                        }
                    }
                    sendAjax('http://localhost:30/project/php/register.php', params);
                }, false);
        },
        checkUsername: function(data) {
            if(data.code == 200) {
                this.$usernameInp.className = 'inp success';
                this.$registerBtn.disabled = '';
            } else {
                alert(data.msg);
                this.$usernameInp.className = 'inp error';
                this.$loginBtn.disabled = 'true';
            }
        },
        register: function(data) {
            if(data.code == 200) {
                //   注册成功
            } else {

            }
        }
    }

}())