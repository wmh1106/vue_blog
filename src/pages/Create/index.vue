<template>
  <div class="articleContent">
    <el-form ref="form">
      <el-form-item label="文章标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="文章简介">
        <el-input v-model="description"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input v-model="content" type="textarea"></el-input>
      </el-form-item>

      <el-form-item label="显示在首页">
        <el-switch></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { createBlog } from '@/api/blog.js'

export default {
  data () {
    return {
      title: '',
      content: '',
      description: '',
      atIndex: false
    }
  },
  methods: {

    onSubmit (event) {
      const option = {
        title: this.title,
        content: this.content,
        description: this.description,
        atIndex: true
      }
      createBlog(option).then(res => {
        console.log(res.content)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.articleContent{
  width: 1000px;
  margin: 0 auto;
}
</style>
