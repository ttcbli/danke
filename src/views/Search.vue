<template>
  <div class="container">
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="javascript:;">蛋壳公寓</a>
      </li>
      <li class="breadcrumb-item">
        <a href="javascript:;">北京租房</a>
      </li>
    </ul>
    <div id="ss">
      <div class="ss-search">
        <input type="text" placeholder="请输入区域、地铁、小区名" class="ss-input">
        <button class="ss-btn">搜索</button>
        <button class="ss-a">地图找房</button>
      </div>
      <div class="ss-list">
        <a href="javascript:;">现房</a>
        <a href="javascript:;">一居室</a>
        <a href="javascript:;">回龙观</a>
        <a href="javascript:;">双井</a>
        <a href="javascript:;">天通苑</a>
        <a href="javascript:;">青年路</a>
        <a href="javascript:;">望京</a>
        <a href="javascript:;">所有房源</a>
      </div>
      <div class="filter-options">
        <ul>
          <li>位置:</li>
          <li><a href="javascript"></a> 区域</li>
          <li><a href="javascript">地铁</a></li>
        </ul>
        <ul>
          <li>大区:</li>
          <li><a href="javascript">不限</a></li>
          <li>
            <a href="javascript">东城区</a>
            <div class="sub-option-list">
              <a href="javascript:;">北新桥</a>
              <a href="javascript:;">磁器口</a>
              <a href="javascript:;">崇文门</a>
              <a href="javascript:;">东四</a>
              <a href="javascript:;">广渠门内</a>
              <a href="javascript:;">广渠门外</a>
              <a href="javascript:;">安定门</a>
              <a href="javascript:;">北京站</a>
              <a href="javascript:;">东单</a>
              <a href="javascript:;">东四十条</a>
              <a href="javascript:;">和平里北街</a>
              <a href="javascript:;">景泰</a>
              <a href="javascript:;">永定门外</a>
              <a href="javascript:;">天坛东门</a>
              <a href="javascript:;">桥湾</a>
              <a href="javascript:;">前门</a>
              <a href="javascript:;">雍和宫</a>
              <a href="javascript:;">安德里北街</a>
              <a href="javascript:;">天桥</a>
            </div>
          </li>
          <li><a href="javascript">西城区</a></li>
          <li><a href="javascript">朝阳区</a></li>
          <li><a href="javascript">海淀区</a></li>
          <li><a href="javascript">丰台区</a></li>
          <li><a href="javascript">石景山区</a></li>
          <li><a href="javascript">通州区</a></li>
          <li><a href="javascript">昌平区</a></li>
          <li><a href="javascript">大兴区</a></li>
          <li><a href="javascript">顺义区</a></li>
          <li><a href="javascript">房山区</a></li>
          <li><a href="javascript">门头沟区</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:function(){
    return{

    }
  }
}
</script>
<style scoped>
  ul{
    list-style:none;
    margin:0;
    padding:0;
  }
  a{
    color:#333;
  }
  a:hover{
    text-decoration:none;
  }
  button{
    font-family:微软雅黑
  }
  .container{
    padding:0;
  }
  .breadcrumb{
    background:transparent;
    margin:2rem 0 1rem;
    padding:0;
  }
  .breadcrumb-item a{
    font-size:0.8rem;
    color:#999;
  }
  .breadcrumb-item a:hover{
    text-decoration:none;
  }
  #ss{
    background:#f0f0f0;
    border:0.08rem solid #f0f0f0;
  }
  #ss .ss-search{
    padding-top:1.5rem;
    padding-left:1rem;
  }
  #ss .ss-input{
    width:44rem;
    height:3rem;
    padding-left:2rem;
    border-top-left-radius:0.3rem;
    border-bottom-left-radius:0.3rem;
    border:none;
    outline:none;
    font-size:0.8rem;
    color:#999;
  }
  #ss .ss-btn{
    width:6rem;
    height:3rem;
    border-top-right-radius:0.3rem;
    border-bottom-right-radius:0.3rem;
    border:none;
    background:#00a4ac;
    color:#fff;
  }
  #ss .ss-a{
    width:7rem;
    height:3rem;
    margin-left:1rem;
    border-radius:0.3rem;
    border:none;
    background:#00a4ac;
    color:#fff;
  }
  #ss .ss-list{
    padding:1rem 0 1rem 2rem;
  }
  #ss .ss-list a{
    color:#888;
    font-size:0.8rem;
    margin-right:0.8rem;
  }
  #ss .ss-list a:hover{
    text-decoration:none;
    color:red;
  }
  #ss .filter-options{
    height:30rem;
    background:#fff;
    padding:1rem;
  }
  #ss .filter-options ul{
    display:flex;
  }
  #ss .filter-options li a{
    display:relative;
  }
  #ss li{
    font-size:0.7rem;
    margin-right:1.5rem;
  }
  #ss .sub-option-list{
    display:absolute;

    border:0.1rem solid #f0f0f0;
    top:1rem;
  }
</style>