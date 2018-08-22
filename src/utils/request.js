import axios from 'axios'
import {
  Message
} from 'element-ui'

// 全局的 axios 默认值
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
// axios 的 withCredentials 表示跨域请求时是否需要使用凭证
// withCredentials: true 接口的跨域请求，携带 cookie，并验证
axios.defaults.withCredentials = true

const request = (url, type = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }

    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }

    axios(option).then(res => {
      if (res.data.status === 'ok') {
        return resolve(res.data)
      } else {
        Message.error(res.data.msg)
        return reject(res.data)
      }
    }).catch(error => {
      Message.error('axios报错')
      return reject(error)
    })
  })
}

export default request
