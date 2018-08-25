<template>
  <div class="ditails">
    <div class="userBox">
      <img class="headImg" :src="user.avatar" alt="">
      <div class="userInfo">
        <p> {{user.username}} </p>
        <p> 简介 </p>
        <p class="time">创建于<span>x9</span>天前</p>
      </div>
    </div>
    <div class="markdown-body" v-html="markdown">
    </div>
  </div>
</template>

<script>
import {getDetail} from '@/api/blog.js'
import marked from 'marked'

export default {
  data () {
    return {
      title: '',
      content: '',
      user: {},
      createdAt: ''
    }
  },
  created () {
    const blogId = this.$router.currentRoute.params.id
    getDetail({blogId: blogId}).then(res => {
      this.title = res.data.title
      this.content = res.data.content
      this.createdAt = res.data.createdAt
      this.user = res.data.user
    })
  },
  computed: {
    markdown () {
      return marked(this.content)
    }
  }
}
</script>

<style lang="scss" src="./details.scss"></style>
