<template>
    <div>
        <header>
            <div class="container py-3">
                <div class="row">
                    <!-- //header的left -->
                    <div class="col-md-8 col-sm-8">
                        <div class="row">
                            <div class="col-md-3 col-sm-3">
                                <!-- //logo标志 -->
                                <img src="image/header/logo.png" alt="" class="w-100">
                            </div>
                            <div class="col-md-9 col-sm-9">
                                <!-- //导航条 -->
                                <ul class="nav">
                                    <!-- //地址 -->
                                    <li>
                                        <select name="" id="">
                                            <option value="">北京</option>
                                            <option value="">深圳市</option>
                                            <option value="">上海市</option>
                                            <option value="">杭州市</option>
                                            <option value="">天津市</option>
                                            <option value="">武汉市</option>
                                            <option value="">南京市</option>
                                            <option value="">广州市</option>
                                            <option value="">成都市</option>
                                            <option value="">苏州市</option>
                                            <option value="">无锡市</option>
                                            <option value="">西安市</option>
                                        </select>
                                    </li>
                                    <li><a href="">首页</a></li>
                                    <li><a href="">找房</a></li>
                                    <li><a href="">合租</a></li>
                                    <li><a href="">整租</a></li>
                                    <li><a href="">月租</a></li>
                                    <li><a href="">业主</a></li>
                                    <li><a href="">关于</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- //header的right -->
                    <div class="col-md-4 col-sm-4">
                        <div class="row">
                            <div class="col-md-8 col-sm-8"></div>
                            <div class="col-md-3 col-sm-3">
                                <button class="dl">登录</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    header{
        background-color:#fff;
    }
    .nav{
        margin-top:0.5rem;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between
    }
    .nav a,.nav select{
        text-decoration: none;
        font-family: 微软雅黑;
        font-size: 1rem;
        color:#666;
    }
    .nav a:hover{
        color:red;
    }
    /* .nav li:nth-child(2) a{
        color:red;
    } */
    .dl{
        width: 100%;
        height: 30px;
        background-color:#fff;
        border:2px solid #3dbcc6;
        border-radius: 5px;
        font-family: 微软雅黑;
        font-size: 0.9rem;
        color:#3dbcc6;
        font-weight: bold;
        margin-top:0.3rem;
    }
    @media (max-width: 992px) and (min-width:768px){
        .nav{
            margin-top:0.2rem;
        }
        .dl{
            width: 45px;
        }
    }
</style>