<template>
  <div class="homeWrap">
     <ul class="homeList">
      <router-link tag="li" :to="`/details/${item.id}`" v-for="item of listData.data" :key="item.id">
        <div class="headImg">
          <img :src="item.user.avatar" alt="">
        </div>
        <div class="artic">
          <h3>{{item.title}} </h3>
          <p>{{item.description}}</p>
          <p>{{item.user.username}} 于<span>3天前</span> 发布</p>
        </div>
      </router-link>
    </ul>
    <el-pagination
      layout="prev, pager, next"
      :page-size="10"
      :background="true"
      :total="listData.total"
      @current-change="onChangePage"
    >
    </el-pagination>
  </div>
</template>

<script>

import {getIndexBlogs} from '@/api/blog.js'

export default {
  name: 'Home',
  data () {
    return {
      listData: {}
    }
  },
  methods: {
    onChangePage (currentPage) {
      getIndexBlogs({ 'page': currentPage }).then(res => {
        console.log(res)
        this.listData = {
          data: res.data,
          page: res.page,
          total: res.total,
          totalPage: res.totalPage
        }
        document.documentElement.scrollTop = 0
      })
    }
  },
  created () {
    console.log()
    getIndexBlogs({page: 1}).then(res => {
      this.listData = {
        data: res.data,
        page: res.page,
        total: res.total,
        totalPage: res.totalPage
      }
    })
  }
}
</script>

<style lang="scss" scoped src="./home.scss"></style>
