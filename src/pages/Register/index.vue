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

export default {
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else if (value.length > 15 || value.length <= 0) {
        callback(new Error('用户名长度1到15个字符'))
      } else if (!/\w/.test(value)) {
        callback(new Error('只能是字母数字下划线中文'))
      } else {
        callback()
      }
    }

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error('密码长度6到16个字符'))
      } else {
        callback()
      }
    }

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
    onRegister (formName) {
      const option = {username: this.userInfo.name, password: this.userInfo.password}
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(option).then(res => {
            if (res.status === 'ok') {
              this.$message({
                message: res.msg,
                type: 'success'
              })
              return res.data
            } else {
              this.$message({
                message: res.msg,
                type: 'fail'
              })
              return new Error(res.msg)
            }
          }).then(res => {
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
