<template>
  <div class="articleContent">
    <el-form ref="form">
      <el-form-item label="文章标题">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="文章简介">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea"></el-input>
      </el-form-item>

      <el-form-item label="显示在首页">
        <el-switch></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">立即保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.articleContent{
  width: 1000px;
  margin: 0 auto;
}

</style>
