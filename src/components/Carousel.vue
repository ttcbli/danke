<template>
<section>
  <div id="demo" class="carousel" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
      <!--1.轮播图片-->
    <div class="carousel-inner" :class="ulClass" :style="ulStyle">
      <div v-for="(img,i) of lists" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
          <img :src="img.image" :style="{height:'529px',width:'100%'}"/>
      </div>
    </div>
    <!--2.左右箭头-->
    <a href="javascript:;" @click="move(1)" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
    </a>
    <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    
  </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      innerWidth:window.innerWidth,
      innerHeight:window.innerHeight,
      ulClass:{ hasTrans:true },
      i:0,
      imgs:[
        {
          src:"/images/carousel_item/carouselImg1.jpg",
          title:"美国一号公路自驾游",
          to:"javascript:;"
        },
        { 
          src:"/images/carousel_item/carouselImg2.jpg",
          title:"打卡照片里的奇妙家",
          to:"javascript:;"
        },
        { 
          src:"/images/carousel_item/carouselImg3.jpg",
          title:"领取精品房源专属券",
          to:"javascript:;"
        },
      ],
      canClick:true,
      timer:null,
      lists:[{"title":"\u690b\u9e1f\u8ba1\u5212\u7b2c\u56db\u5b63","sub_title":"","image":"https:\/\/public.danke.com.cn\/public-20190611-FukBrHQZybLA9l7HTOXJLLXNWjmB","url":"https:\/\/www.danke.com\/zhuanti\/starling-plan-2019-index"},{"title":"\u7ea6\u60e08\u6708 \u6700\u9ad8\u4f18\u60e04000\u5143","sub_title":"","image":"https:\/\/public.danke.com.cn\/public-20190731-FuexfJcbNbdfyoLMVDqC1nlZ346C","url":"https:\/\/www.danke.com\/zhuanti\/20190801Augest"},{"title":"\u86cb\u751f\u8ba1\u5212","sub_title":"","image":"https:\/\/public.danke.com.cn\/public-20190630-FiQT_m6Bvyihc7g1jSXcOg-dJTAV","url":"https:\/\/www.danke.com\/zhuanti\/living\/index"},{"title":"\u86cb\u58f3\u516c\u5bd3\u4f01\u4f18\u4eab","sub_title":"","image":"https:\/\/public.danke.com.cn\/public-20190606-Fpm6K8iqfa4NXrAOEzQpWDoG73W2","url":"https:\/\/www.danke.com\/huodong\/201905qiyouxiang"},{"title":"\u4fdd\u6301\u6c89\u9ed8","sub_title":"","image":"https:\/\/public.danke.com.cn\/public-20190816-Fgfgyjgy6uhJMzO3kzIhd3iW5wDL","url":"https:\/\/www.danke.com\/zhuanti\/20190801Augest"}],
    }
  },
  created(){
    window.addEventListener("resize",()=>{
      this.innerWidth=window.innerWidth;
      this.innerHeight=window.innerHeight;
    })
    // setTimeout(function(){   
        this.start();
    // },100)
  },
  methods:{
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },6000)
    },
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){
          this.ulClass.hasTrans=false;
          setTimeout(()=>{
            this.i=this.imgs.length;
            setTimeout(()=>{
              this.ulClass.hasTrans=true;
              this.i+=i;
              setTimeout(()=>{
                this.canClick=true;
              },20)
            },5)
          },5)
        }else if(i==1&&this.i==this.lists.length-1){
          this.i+=i;
          setTimeout(()=>{
            this.ulClass.hasTrans=false;
            setTimeout(()=>{
              this.i=0;
              setTimeout(()=>{
                this.ulClass.hasTrans=true;
                setTimeout(()=>{
                  this.canClick=true;
                })
              },5)
            },5)
          },20)
        }else{
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },30)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },300)
      }
    }
  },
  computed:{
    ulStyle(){
      var width=this.innerWidth*(this.lists.length+1)+"px";
      var marginLeft=-this.i*this.innerWidth+"px";  
      return { width, marginLeft }
    }
  }
}
</script>
<style scoped>
/* 大屏样式 */
@media (min-width:992px){
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    margin: 0px 135px;
    padding: 24px;
  }

}
/* 中屏样式 */
@media(min-width:768px) and (max-width:991px){
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    padding: 24px;
    margin: 0px 135px;
  }
    
}
/* 小屏样式 */
@media (max-width:767px){
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    margin: 0px 135px;
    padding: 24px;
  }
}

.carousel-inner,.carousel{
  overflow: hidden;
}
  section>.carousel{
    height: 100%;
    object-fit: cover;
  }
  section>.carousel:after{
    content:"";
    display:block;
    clear:both;
  }
   section>.carousel>.carousel-inner.hasTrans{
     transition:all .2s linear;
   }
  section>.carousel>.carousel-inner>.carousel-item{
    display:block;
    float:left;
  }
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    position: absolute;
    padding: 0px;
    top: 20%;
    /* z-index: 999; */
  }
  section>.carousel .cLeft div{
    font-weight: 600 !important;
    color: white !important;
    font-size: 32px !important;
    line-height: 34px !important;

  }
  section .carousel .cRight {
    position: absolute;
    margin:0 135px;
    top:30%;
    border: #f00;
  }
  section .carousel .cRight .heji{
    width: 110px;
    border: 2px solid #fff;
    background: transparent;
    text-align: center;
    color: #fff;
    padding:10px 12px;
    font-size: 16px;
    line-height: 26px;
    border-radius: 4px;
  }
  


  /* 重写指示符的样式 */
  .carousel-indicators{
    position: absolute;
    top:50%;
    margin: 0 135px;
    justify-content: left;
    list-style: none;
  }
  .carousel-indicators li{
    width:60px;height:2px;
    background-color:#aaa;
    margin-left:6px;
    margin-right:6px;
    border-radius: 10%;
    top:60px;
    float: left;
  }
   
  .carousel-indicators li div{
    width:0px;height:2px;
    background-color:#fff;
    margin-right:6px;
    border-radius: 10%;
    top:60px;
    float: left;
  }
 .carousel-indicators li div.active{
    
    transition: all 7s;
    width: 60px;
  }

  /* .carousel-indicators>li:hover, .carousel-indicators>li.active{
    transform:scale(1.3)
  } */
  
  /*重写左右箭头的样式*/
  .carousel-control-prev,
  .carousel-control-next{
    position: absolute;
    top: 0;
    display: flex;
    width:60px;height:529px;
    background-color:transparent;
    border-radius:0.25rem;
    /* text-align: center; */
    padding: 250px 20px;
  }
  .carousel-control-prev{
    left:0;
  }
  section .carousel-control-next{
    right: 0;
  }
  .carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: transparent no-repeat center center;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

</style>