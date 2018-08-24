import {getInfo, logout} from '@/api/auth'

// 登录信息：存用户信息、登录的状态
const state = {
  userInfo: {},
  isLogin: false
}

const getters = {
  userInfo: state => state.userInfo,
  isLogin: state => state.isLogin
}

const mutations = {

  mutationGetInfo (state, option) {
    state.userInfo = option.data
    state.isLogin = option.isLogin
  },

  mutationLogout (state) {
    state.isLogin = false
  }
}
const actions = {
  actionGetInfo (store) {
    getInfo().then(res => {
      if (res.status === 'ok') {
        store.commit('mutationGetInfo', res)
      }
    })
  },
  actionLogout (store) {
    return logout().then(res => {
      if (res.status === 'ok') {
        store.commit('mutationLogout')
      }
    }).then(() => true)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
