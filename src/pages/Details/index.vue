<template>
  <div class="ditails">
    <div class="userBox">
      <img class="headImg" :src="detail.user.avatar" alt="">
      <div class="userInfo">
        <p> {{detail.user.username}} </p>
        <p> 简介 </p>
        <p class="time">创建于<span>x9</span>天前</p>
      </div>
    </div>
  </div>
</template>

<script>

import {getDetail} from '@/api/blog.js'

export default {
  data () {
    return {
      detail: {}
    }
  },
  created () {
    const blogId = this.$router.currentRoute.params.id
    getDetail({blogId: blogId}).then(res => {
      this.detail = res.data
    })
  }
}
</script>

<style lang="scss" scoped src="./details.scss"></style>
