// 二次封装axios
import axios from 'axios'

// 利用axios里面的create方法，创建一个axios实例
const requests = axios.create({
  // 配置路径
  baseURL:'/api',
  // 请求超时的时间是5s
  timeout:5000
})
// 请求拦截器
requests.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
})

// Add a response interceptor
requests.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default requests