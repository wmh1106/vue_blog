const validateName = (rule, value, callback) => {
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

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码长度6到16个字符'))
  } else {
    callback()
  }
}

export {
  validateName, validatePass
}
