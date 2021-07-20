// 请求模块
import axios from 'axios'

// 接口的基准路径
// 第一种写法
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/'
// 第二种写法
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 请求拦截器

// 响应拦截器

export default request
