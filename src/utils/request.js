// 引入 axios
import axios from 'axios'

// 创建 一个 axios 实列对象
const instance = axios.create({
  // 基准路径
  baseURL: 'http://localhost:8080',
  // 超时时间的设置 ms
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 暴露这个实列
export default instance
