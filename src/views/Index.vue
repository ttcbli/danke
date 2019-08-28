 <template lang="">
    <div>
        <!-- header -->
        <my-header></my-header>
        <!-- 轮播 -->
        <carousel></carousel>
        <div class="container">
            <!-- 搜索 -->
            <div class="search py-4 pl-4">
                <div>
                    <button v-text="text1" @click="add"></button>
                    <div :style="`display:${ad}`">
                        <span @click="addspan">全部</span>
                        <span @click="addspan">合租</span>
                        <span @click="addspan">整租</span>
                    </div>
                    <input type="" name="" value="" placeholder="例如：回龙观、双井、通天苑、青年路">
                    <button>搜索</button>
                </div>
                <ul class="mb-0 mt-2">
                    <li>热门搜索：</li>
                    <li><a href="javascript:;">现房</a></li>
                    <li><a href="javascript:;">一居室</a></li>
                    <li><a href="javascript:;">回龙观</a></li>
                    <li><a href="javascript:;">双井</a></li>
                    <li><a href="javascript:;">天通苑</a></li>
                    <li><a href="javascript:;">青年路</a></li>
                    <li><a href="javascript:;">望京</a></li>
                    <li><a href="javascript:;">所有房源</a></li>
                </ul>
            </div>    
            <!-- 精品房源 -->
            <div id="housing">
                <div class="htop">
                    <div class="item1">
                        <strong>精选房源</strong>
                        <span>为你而选</span>
                        <p>蛋壳公寓致力于为租户创造高品质生活而努力</p>
                    </div>
                    <a href="javascript:;" class="item2">更多</a>
                </div>
                <div class="hbot">
                    <div class="item" v-for="(elem,i) of housing" :key="i">
                        <img :src="elem.img" alt="">
                        <p class="mb-0 mt-3 ml-2"><span v-text="elem.price"></span>元/月</p>
                        <p class="mb-0 ml-2" v-text="elem.title"></p>
                        <p class="mb-0 ml-2" v-text="elem.title1"></p>
                    </div>
                </div>
            </div>  
            <!-- 合租 -->
            <div id="rent">
                <div class="htop">
                    <div class="item1">
                        <strong>合租·样板间</strong>
                        <span>多种风格</span>
                        <p>复古和颓废艺术范的格调颇受大众欢迎</p>
                    </div>
                    <ul class="item2">
                        <li><a href="javascript:;" class="on">房间</a></li>
                        <li><a href="javascript:;">客厅</a></li>
                        <li><a href="javascript:;">卫生间</a></li>
                        <li><a href="javascript:;">厨房</a></li>
                    </ul>
                </div>
                <div class="hbot">
                    <div class="item">
                        <img src="" alt="">
                        <div>
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <!-- footer --> 
        <my-footer></my-footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text1:"全部",
            ad:"none",
            housing:[
                {img:"image/index/housing/01.jpg",price:"¥4900",title:"海户屯 马公庄 1室1厅",title1:"地铁 8号线南段 / 约43平米 / 独立阳台"},
                {img:"image/index/housing/02.jpg",price:"¥4900",title:"海户屯 马公庄 1室1厅",title1:"地铁 8号线南段 / 约43平米 / 独立阳台"},
                {img:"image/index/housing/03.jpg",price:"¥4900",title:"海户屯 马公庄 1室1厅",title1:"地铁 8号线南段 / 约43平米 / 独立阳台"},
                {img:"image/index/housing/04.jpg",price:"¥4900",title:"海户屯 马公庄 1室1厅",title1:"地铁 8号线南段 / 约43平米 / 独立阳台"},
                {img:"image/index/housing/05.jpg",price:"¥4900",title:"海户屯 马公庄 1室1厅",title1:"地铁 8号线南段 / 约43平米 / 独立阳台"},
                {img:"image/index/housing/06.jpg",price:"¥4900",title:"海户屯 马公庄 1室1厅",title1:"地铁 8号线南段 / 约43平米 / 独立阳台"},
            ]
        }
    },
    methods:{
        add(){
            if(this.ad==="none"){
                this.ad="block"
            }else{
                this.ad="none"
            }
        },
        addspan(e){
            this.ad="none";
            this.text1=e.target.innerHTML;
        }
    },
    created() {
        
    },
}
</script>
<style sorped>
.search{
    position: relative;
}
.search>div>div{
    position: absolute;
    width: 111px;
    border: 1px solid #ddd;
    z-index: 1;
}
.search>div>div span{
    display: block;
    width: 109px;
    height: 58px;
    line-height: 58px;
    text-align: center;
    border-right: 0;
    background-color: #fff; 
    font-family: 微软雅黑;
    font-size: 18px;
    color: #000;
}
.search>div button:first-child{
    width: 109px;
    height: 58px;
    border: 1px solid #ddd;
    border-right: 0;
    background-color: #fff; 
    font-family: 微软雅黑;
    font-size: 18px;
    color: #000;
    vertical-align: middle;
    outline: none;
    background-image: url("/image/index/xxia.png");
    background-repeat: no-repeat;
    background-position-x: 80px;
    background-position-y: 23px;
    background-size: 20px;
}
.search>div button:last-child{
    width: 200px;
    height: 58px;
    border: 1px solid #ddd;
    border-left: 0;
    background-color: #00c5b4; 
    font-family: 微软雅黑;
    font-size: 20px;
    color: #fff;
    vertical-align: middle;
    outline: none;
    background-image: url("/image/index/sosuo.png");
    background-repeat: no-repeat;
    background-position-x: 45px;
    background-position-y: 13px;
}
.search>div input{
    width: 490px;
    height: 58px;
    border: 0;
    border-top: 1px solid #ddd;
    border-bottom:1px solid #ddd;
    outline: none;
    padding:10px;
}

.search>ul{
    list-style: none;
    display: flex;
}
.search>ul li:first-child{
    font-family: 微软雅黑;
    font-size: 14px;
    color: #999999;
}
.search>ul li+li{
    margin-left: 10px;
}
.search>ul li+li a{
    font-family: 微软雅黑;
    font-size: 14px;
    color: #3dbcc6;
}
@media (max-width:992px) and (min-width:762px) {
    .search>div input{
        width: 50%;
        vertical-align: middle;
    }
}

/* housing */
.htop{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #efefef;
}
.htop .item2{
    font-family: 微软雅黑;
    font-size: 18px;
    color: #4d5355;
    outline: none;
}
.htop .item1{
    font-family: 微软雅黑;
}
.htop .item1 strong{
    font-size: 30px;
    color:#000;
}
.htop .item1 span{
    font-size: 30px;
    color:#4d5355;
}
.htop .item1 p{
    font-size: 14px;
    color:#8b8b8b;
}
/* housing */
/* hbot */
.hbot{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.hbot .item{
    margin-top: 15px;
    width: 32%;
}
.hbot .item img{
    width: 100%;
}
.hbot .item p{
    font-family: 微软雅黑;
    font-size: 14px;
    color: #a7a7a7;
}
.hbot .item p:nth-child(2) span{
    font-size: 24px;
    color: #ff7966;
}
.hbot .item p:nth-child(3){
    color:#000;
    font-weight: bold;
}
/* hbot */
/* rent */
#rent{
    margin-top:2rem;
}
#rent .htop{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #efefef;
}
#rent .htop .item1{
    font-family: 微软雅黑;
}
#rent .htop .item1 strong{
    font-size: 30px;
    color:#000;
}
#rent .htop .item1 span{
    font-size: 30px;
    color:#4d5355;
}
#rent .htop .item1 p{
    font-size: 14px;
    color:#8b8b8b;
}
#rent .htop .item2{
    list-style: none;
    display: flex;
}
#rent .htop .item2 li+li{
    margin-left: 1rem; 
}
#rent .htop .item2 a{
    font-family: 微软雅黑;
    font-size: 14px;
    color: #999;
    display: inline-block;
    /* width: 3rem; */
    border: 1px solid #3dbcc6;
    border-radius: 20px;
    padding: 3px 15px;
}
.on{
    background-color: #3dbcc6;
    color:#fff !important;
}

/* rent */
</style>