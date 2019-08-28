<template lang="">
    <div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-2 px-0">
                        <ul class="pl-0">
                            <li><a href="">用户帮助</a></li>
                            <li><a href="">入住指南</a></li>
                            <li><a href="">生活常识</a></li>
                            <li><a href="">租房问题</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 px-0">
                        <ul class="pl-0">
                            <li><a href="">商务合作</a></li>
                            <li><a href="">商务合作</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 px-0">
                        <ul class="pl-0">
                            <li><a href="">公司信息</a></li>
                            <li><a href="">关于蛋壳</a></li>
                            <li><a href="">联系蛋壳</a></li>
                            <li><a href="">加入蛋壳</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 px-0">
                        <ul class="pl-0">
                            <li><a href="">客服热线</a></li>
                            <li><a href="">4001-551-551</a></li>
                            <li><a href="">工作日 09:00-21:00</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="footer2">
                        <img src="image/header/logofff.png" alt="">
                        <div class="ml-4">
                            <p class="mb-0">© 2019 蛋壳公寓 沪ICP备18043153号-1</p>
                            <p class="mb-0">京公网安备 11010102003786号</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    footer{
        background-color:#212121;
        padding:1.4rem 0 1.4rem 0;
    }
    ul{
        list-style: none;
    }
    ul li{
        margin-bottom: 0.3rem;
    }
    ul li:first-child{
        margin-bottom: 0.7rem;        
    }
    ul li a{
        font-family: 微软雅黑;
        font-size: 17px;
        color:#e6e6e6;
    }
    ul li:first-child a{
        font-size: 20px;
        color:#7da0ae;
    }
    .row:first-child{
        border-bottom: 1px dashed #505a5a;
    }
    .row:last-child{
        margin-top:1.4rem;
    }
    .footer2{
        display: flex;
        flex-wrap:nowrap;
        justify-content: space-between ;
        /* align-items: baseline; */
    }
    .footer2 p{
        font-family: 微软雅黑;
        font-size: 12px;
        color:#e6e6e6;
    }
</style>