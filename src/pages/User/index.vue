<template>
  <div class="articleBox">
    <div class="userBox">
      <img class="headImg" src="" alt="">
      <div class="userInfo">
        <p> 用户名 </p>
        <p> 简介 </p>
      </div>
    </div>
    <ul class="warpList">
      <li>
        <div class="time">
          <span class="day">20</span>
          <span class="mouth">5月</span>
          <span class="year">2018</span>
        </div>
        <div class="artic">
          <h3>前端异步大揭秘</h3>
          <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
        </div>
      </li>

      <li>
        <div class="time">
          <span class="day">20</span>
          <span class="mouth">5月</span>
          <span class="year">2018</span>
        </div>
        <div class="artic">
          <h3>前端异步大揭秘</h3>
          <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>

        </div>
      </li>
      <li>
        <div class="time">
          <span class="day">20</span>
          <span class="mouth">5月</span>
          <span class="year">2018</span>
        </div>
        <div class="artic">
          <h3>前端异步大揭秘</h3>
          <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>

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
  .articleBox {
    width: 1000px;
    margin-left:auto;
    margin-right:auto;
    .userBox{
      display: flex;
      align-items: center;
      height: 100px;
      border-bottom: 1px solid #f2f2f2;
      .headImg{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
      }
      .userInfo{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .warpList{
      li{
        display: flex;
        padding:30px 0;
        .time{
          background: #409EFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          margin-right: 20px;
          span{
            padding-bottom:3px;
            color: #fff;
            text-align: center;
          }
          .day{
            font-size: 22px;
          }
          .year,.mouth{
            font-size: 13px;
          }
        }
        .artic{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h3{
            font-size: 16px;
            color: #666;
          }
          p{
            font-size: 13px;
            color: #999;
            line-height: 1.4;
          }
          .settingWrap{
            font-size: 12px;
            color: #409EFF;
          }
        }
      }
    }
  }
</style>
