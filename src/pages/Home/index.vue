<template>
  <div class="homeWrap">
     <ul class="homeList">
      <li>
        <div class="headImg">
          <img src="" alt="">
        </div>
        <div class="artic">
          <h3>前端异步大揭秘 </h3>
          <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
          <p>xxx 于<span>3天前</span> 发布</p>
        </div>
      </li>

      <li>
        <div class="headImg">
          <img src="" alt="">
        </div>
        <div class="artic">
          <h3>前端异步大揭秘 </h3>
          <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
          <p>xxx 于<span>3天前</span> 发布</p>
        </div>
      </li>
      <li>
        <div class="headImg">
          <img src="" alt="">
        </div>
        <div class="artic">
          <h3>前端异步大揭秘 </h3>
          <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
          <p>xxx 于<span>3天前</span> 发布</p>
        </div>
      </li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<style lang="scss" scoped>
.homeWrap{
width: 1000px;
  margin: 50px auto;
}
.homeList {
  padding-bottom:50px;
  li {
    display: flex;
    padding: 30px 0;
    .headImg {
      flex-shrink: 1;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #ddd;
      margin-right: 20px;
    }
    .artic {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: 16px;
        color: #666;
      }
      p {
        font-size: 13px;
        color: #999;
        line-height: 1.4;
      }
      .settingWrap {
        font-size: 12px;
        color: #409eff;
      }
    }
  }
}
</style>
