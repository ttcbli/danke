<template>
    <div>
        <div id="login">
            <div class="container">
                <div class="top">
                    <img src="image/login/login.png" alt="">
                    <span>欢迎您登录或注册</span>
                </div>
                <div class="body">
                    <h4 class="text-center mb-0">手机注册</h4>
                    <input type="text" class="w-100 mt-3" v-model="phone" placeholder="请输入手机号">
                    <input type="text" class="w-100 mt-3 " v-model="upwd" placeholder="输入密码">
                    <input type="text" class="w-50 mt-3 mb-2" v-model="syyzm" placeholder="输入验证码">
                    <button class="w-50 py-0" @click="add">{{yzm}}</button>                
                    <input type="checkbox" id="xyi" v-model="xyi"><label for="xyi">我已阅读并同意《用户使用条款》《隐私保护政策》</label>
                    <button class="w-100 mt-4" @click="registered">登录</button>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            yzm:"点击获取验证码",
            xyi:true,
            phone:"",
            upwd:"",
            syyzm:"",
        }
    },
    methods: {
        add(){
            var num="";
            for(var i=0;i<6;i++){
                num+=Math.floor(Math.random()*10);
            }
            this.yzm=num;
        },
        registered(){
            if(!this.xyi){
                alert("协议不得为空");
                return;
            }
            if(!this.syyzm){
                alert("验证码不得为空");
                return;
            }
            if(this.phone==""||this.upwd==""){
                alert("用户名或密码不得为空");
                return;
            }
            if(this.syyzm!==this.yzm){
                alert('验证码不正确');
                this.add();
            }

            let reg = /^1[3,4,5,7,8]\d{9}$/;
            if(!reg.test(this.phone)){
                console.log("手机号错误");
                return;
            }
            let reg1 = /^[a-zA-Z0-9]{6}$/i;
            if(!reg1.test(this.upwd)){
                console.log("密码错误");
                return;
            }
            console.log(1);
            // var url="";
            // var obj={phone:this.phone,upwd:this.upwd};
            // this.axios.get(url,{params:obj}).then(res=>{
            //     console.log(res);
            // })
        }
    },
}
</script>
<style scoped>
    #login{
        background-image: url('../../public/image/login/loginbg.png');  
        padding-top:48px;
        padding-bottom:178px;
    }
    #login .top img{
        border-right:1px solid #ededed;
        padding-right:15px;
    }
    #login .top span{
        font-family: 微软雅黑;
        font-size: 20px;
        color:#fff;
        vertical-align: middle;
        padding-left:15px;        
    }

    #login .body{
        width: 380px;
        height: 354px;
        background-color: #fff;
        margin:0 auto;
        margin-top:140px;
        padding: 25px;
    }
    #login .body h4{
        border-bottom: 1px solid #f3f3f3;
        padding-bottom: 8px;
    }
    #login .body label{
        font-family: 微软雅黑;
        font-size: 13px;
        vertical-align:middle;
    }
    #login .body button{
        font-family: 微软雅黑;
        font-size: 20px;
        color:#fff;
        border:none;
        background-color: #3dbdc6;
        height:50px;
    }
    #login .body input:nth-child(2),#login .body input:nth-child(3),#login .body input:nth-child(4){
        height:38px;
        border:1px solid #cdcdcd;
        padding-left:30px;
        background-repeat: no-repeat;
        background-size: 25px ;
        background-position-y: 5px;
    }
    #login .body input:nth-child(2){
        background-image: url('../../public/image/login/phone.png');
    }
    #login .body input:nth-child(3){
        background-image: url('../../public/image/login/mima.png');
    }
    #login .body input:nth-child(4){
        background-image: url('../../public/image/login/yzm.png');
    }
    #login .body button:nth-child(5){
        height: 38px;
        line-height: 38px;
        vertical-align: middle;
        margin-top: -2px;
    }
</style>