<template>
  <div class="register">
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
        <el-button type="primary">立即注册</el-button>
      </el-form-item>
    </el-form>
    <p class="info"><span>已有账户？</span><a href="###">直接登录</a></p>
  </div>
</template>

<style lang="scss" scoped>
.register{
  width: 500px;
  margin: 100px auto 50px;
  .info{
    text-align: center;
  }
}
</style>
