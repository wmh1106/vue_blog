<template>
  <div class="login">
    <h2 class="pageTitle">登录账号</h2>
    <el-form ref="userInfo" label-width="80px" status-icon :model="userInfo" :rules="rulesLogin">
      <el-form-item label="账号" prop="name">
        <el-input v-model="userInfo.name" ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userInfo.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onLogin('userInfo')">立即登录</el-button>
      </el-form-item>
    </el-form>
    <p class="info">
      <span>没有账户？</span>
      <router-link to="/register">注册新账户</router-link>
    </p>
  </div>
</template>

<script>

import {validateName, validatePass} from './rule'

import {login} from '@/api/auth.js'

import {mapActions} from 'vuex'

export default {
  data () {
    return {
      userInfo: {
        password: '',
        name: ''
      },

      rulesLogin: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...mapActions('auth', ['actionGetInfo']),
    onLogin (formName) {
      const option = {username: this.userInfo.name, password: this.userInfo.password}
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(option).then(res => {
            if (res.status === 'ok') {
              this.$message({
                message: res.msg,
                type: 'success'
              })
              return res.data
            }
          }).then(res => {
            // 存状态、用户数据
            this.actionGetInfo()
            this.$router.push('/')
          }).catch(error => {
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 500px;
  margin: 100px auto 50px;
  .pageTitle{
    position: relative;
    top: -30px;
    padding: 10px 0;
    font-size: 30px;
    font-weight: blod;
    border-bottom:1px solid #f1f1f1;
  }
  .info{
    text-align: center;
  }
}
</style>
