import axios from 'axios'
import {
  getToken
} from '@/utils/storage'
// 创建axios实例
const fetchApi = axios.create({
  // baseURL: '',
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
})
// request拦截器
fetchApi.interceptors.request.use(config => {
  config.headers['token'] = getToken()
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
fetchApi.interceptors.response.use(response => {
  let { data } = response || {};
  return data
}, error => {
  var errCode = ''
  var errorMsg = '服务请求失败'
  try {
    errorMsg = error.response.data.msg
    errCode = error.response.data.code
  } catch (error) { }
  var msg = {
    code: errCode,
    msg: errorMsg
  }
  // return Promise.reject(error)
  return Promise.resolve(msg)

})

export default fetchApi
