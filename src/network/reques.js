import axios from 'axios'

export function reques(config){
  const instance = axios.create({
    baseURL: "http://localhost:8080/api"
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res.data)
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}
