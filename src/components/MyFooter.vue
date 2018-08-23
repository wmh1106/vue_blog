<template>
  <footer class="myFooter">
    <div>
      <h3>个人信息</h3>
      <ul>
        <li><strong>GitHub</strong> <span>https://github.com/wmh1106</span></li>
        <li><strong>微信</strong> <span>w406875886</span></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .myFooter{
    background: #f8f8f8;
    > div{
      width: 1000px;
      height: 200px;
      padding:50px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 18px;
      color: #999;
      h3{
        color: #333;
      }
      li{
        margin:10px;
        strong{
          display: inline-block;
          width: 80px;
        }
      }
    }
  }
</style>
