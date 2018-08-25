<template>
  <div class="articleBox">
    <div class="userBox">
      <img class="headImg" :src="userInfo.avatar" alt="">
      <div class="userInfo">
        <p> {{userInfo.username}} </p>
        <p> 简介 </p>
      </div>
    </div>
    <ul class="warpList">
      <li v-for="item of listData" :key="item.id">
        <div class="time" time="item.createdAt">
          <span class="day">20</span>
          <span class="mouth">5月</span>
          <span class="year">2018</span>
        </div>
        <div class="artic">
          <h3>{{item.title}}</h3>
          <p>{{item.description}}</p>
          <div class="settingWrap">
            <router-link :to="`/edit/${item.id}`">编辑</router-link>
            <span @click="onDelete(item.id)">删除</span>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination
      @current-change="onChangePage"
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getBlogsByUserId, deleteBlog } from '@/api/blog.js'

export default {
  data () {
    return {
      listData: [],
      page: 1,
      total: 0,
      totalPage: 1
    }
  },
  computed: {
    ...mapState('auth', ['userInfo'])
  },

  methods: {
    onDelete (blogId) {
      deleteBlog({ blogId }).then(res => {
        if (res.status === 'ok') {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.listData = this.listData.filter(item => {
            return item.id !== blogId
          })
        }
      })
    },
    onChangePage (currentPage) {
      getBlogsByUserId(this.userInfo.id, {
        page: currentPage,
        atIndex: true
      }).then(res => {
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
  mounted () {
    getBlogsByUserId(this.userInfo.id, { page: 1, atIndex: true }).then(res => {
      this.listData = res.data
      this.page = res.page
      this.total = res.total
      this.totalPage = res.totalPage
    })
  }
}
</script>

<style lang="scss" scoped src="./my.scss"></style>
