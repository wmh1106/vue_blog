<template>
  <header class="myHeader ">
    <!-- <template>
        <h2>LET'S SHARE</h2>
        <div>
          <el-button>创建博客</el-button>
          <div class="avatar"><img src="" alt=""></div>
          <ul class="seting">
            <li>我的博客</li>
            <li>退出登录</li>
          </ul>
        </div>
    </template> -->

    <template>
      <h2>LET'S SHARE</h2>
      <span class="introduction">精品博客汇聚</span>
      <div class="buttonWrap">
        <el-button>登录</el-button>
        <el-button>注册</el-button>
      </div>
    </template>
  </header>
</template>

<script>

export default {
  data () {
    return {
      a: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.myHeader{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top:80px;
  padding-bottom:30px;
  // height: 290px;
  background: url('../assets/img/cover.jpg') no-repeat center bottom;
  background-size: cover;
  color: #fff;
  h2{
    font-size: 50px;
  }
  .introduction{
    padding:20px 0 0;
  }
  .buttonWrap{
    padding-top:60px;
  }
}

.myHeader.login{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 1000px;
  height: 55px;
  padding:0 50px;
  > div{
    position: relative;
    display: flex;
    align-items: center;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    margin-left: 20px;
  }
  .seting{
    position: absolute;
    right: 0;
    top:100%;
    background: #f8f8f8;
    color: #666;
    border-radius: 5px;
    line-height: 30px;
    li{
      padding:5px 15px;border-bottom: 1px solid #ddd;
      :nth-last-child(1){
        border:none;
      }
    }
  }
}
</style>
