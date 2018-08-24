<template>
  <div class="login">
    <el-form ref="userInfo" label-width="80px" status-icon :model="userInfo" :rules="rulesLogin">
      <el-form-item label="账号" prop="name">
        <el-input v-model="userInfo.name" ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userInfo.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onRegister('userInfo')">立即注册</el-button>
      </el-form-item>
    </el-form>
    <p class="info">
      <span>已有账户？</span>
      <router-link to="/login">立即登录</router-link>
    </p>
  </div>
</template>

<script>

import {register} from '@/api/auth.js'
import {validateName, validatePass} from './rule.js'
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

    onRegister (formName) {
      const option = {username: this.userInfo.name, password: this.userInfo.password}
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(option).then(res => {
            return res.status === 'ok' ? res.data : new Error(res.msg)
          }).then(res => {
            this.$router.push('/')
            this.actionGetInfo()
          }).catch(error => {
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 500px;
  margin: 100px auto 50px;
  .info{
    text-align: center;
  }
}
</style>
