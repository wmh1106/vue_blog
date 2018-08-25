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
        <el-switch v-model="atIndex"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSave">立即保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { updateBlog, getDetail } from '@/api/blog.js'

export default {
  data () {
    return {
      title: '',
      content: '',
      description: '',
      atIndex: true
    }
  },

  methods: {
    onSave (event) {
      const option = {
        title: this.title,
        content: this.content,
        description: this.description,
        atIndex: this.atIndex
      }
      const blogId = this.$router.currentRoute.params.id
      updateBlog({blogId}, option).then(res => {
        console.log(res)
        if (res.status === 'ok') {
          this.$message({
            message: '恭喜你，创建成功',
            type: 'success'
          })
          this.$router.push('/details/' + res.data.id)
        }
      })
    }
  },
  mounted () {
    const blogId = this.$router.currentRoute.params.id
    getDetail({ blogId }).then(res => {
      if (res.status === 'ok') {
        this.title = res.data.title
        this.content = res.data.content
        this.description = res.data.description
        this.atIndex = res.data.atIndex
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.articleContent{
  width: 1000px;
  margin: 0 auto;
}
</style>
