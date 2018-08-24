import request from '@/utils/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

const register = ({username, password}) => {
  return request(URL.REGISTER, 'POST', { username, password })
}

const login = ({username, password}) => {
  return request(URL.LOGIN, 'POST', { username, password })
}

const logout = () => {
  return request(URL.LOGOUT)
}

const getInfo = () => {
  return request(URL.GET_INFO)
}

export {
  register, login, logout, getInfo
}
