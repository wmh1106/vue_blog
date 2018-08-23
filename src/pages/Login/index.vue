<template>
  <div class="login">
    <el-form ref="form" label-width="80px">
      <el-form-item label="账号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input></el-input>
      </el-form-item>

      <!-- <el-form-item label="">
        <el-switch></el-switch>
      </el-form-item> -->

      <el-form-item>
        <el-button type="primary">立即登录</el-button>
      </el-form-item>
    </el-form>
    <p class="info"><span> 没有账户？</span><a href="###">注册新账户</a></p>
  </div>
</template>

<style lang="scss" scoped>
.login{
  width: 500px;
  margin: 100px auto 50px;
  .info{
    text-align: center;
  }
}
</style>
