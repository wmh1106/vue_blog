<template>
  <header class="myHeader" :class="{'login': login}">

    <template v-if="login">
        <h2><router-link to="/">LET'S SHARE</router-link></h2>
        <div class="">
          <el-button><router-link to="/create">创建博客</router-link></el-button>
          <div class="avatar"><img :src="userInfo ? userInfo.avatar : ''" alt=""></div>
          <ul class="setting">
            <li>我的博客</li>
            <li @click="onLogout">退出登录</li>
          </ul>
        </div>
    </template>

    <template v-if="!login">
      <h2><router-link to="/">LET'S SHARE</router-link></h2>
      <span class="introduction">精品博客汇聚</span>
      <div class="buttonWrap">
        <router-link to="/login"><el-button>登录</el-button></router-link>
        <router-link to="/register"><el-button>注册</el-button></router-link>
      </div>
    </template>
  </header>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters('auth', ['userInfo', 'isLogin']),

    login () {
      return this.isLogin
    }
  },

  methods: {
    ...mapActions('auth', ['actionLogout', 'actionGetInfo']),

    onLogout () {
      this.actionLogout().then(res => {
        this.$router.push('/login')
      })
    }
  },
  created () {
    this.actionGetInfo()
  }
}
</script>

<style lang="scss" scoped>
.myHeader{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top:80px;
  padding-bottom:30px;
  background: url('../assets/img/cover.jpg') no-repeat center bottom;
  background-size: cover;
  color: #fff;
  h2{
    font-size: 50px;
  }
  .introduction{
    padding:20px 0 0;
  }
  .buttonWrap{
    padding-top:60px;
  }
}

.myHeader.login{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 1000px;
  height: 55px;
  padding:0 50px;
  > div{
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 30px;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background: #fff;
    margin-left: 20px;
  }
  .setting{
    position: absolute;
    right: 0;
    top:47px;
    background: #f8f8f8;
    color: #666;
    border-radius: 5px;
    line-height: 30px;
    li{
      padding:5px 15px;
      border-bottom: 1px solid #ddd;
      :nth-last-child(1){
        border:none;
      }
    }
  }
}
</style>
