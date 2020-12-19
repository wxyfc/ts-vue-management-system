/* eslint-disable */
// @ts-nocheck
import { formData } from './utilsFunction'

/*
* Content-Type: application/json ： 请求体中的数据会以json字符串的形式发送到后端
* Content-Type: application/x-www-form-urlencoded：请求体中的数据会以普通表单形式（键值对）发送到后端
* Content-Type: multipart/form-data： 它会将请求体的数据处理为一条消息，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。
* */
interface CONFIG {
  url: string;
  data: object
}

const timeout: number = 10000

function ct (executor: Function) {
  return new axios.CancelToken(executor)
}

function interceptors (axios) {
// 添加请求拦截器
  axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    console.log(config)
    return config;
  }, (error) => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
  });

// 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
  });
}

export function get (config: CONFIG, cancel: Function) {
  const httpGet = axios.create({
    url: config.url,
    method: 'get',
    params: config.data,
    headers: [
      { 'token': '1111111111111' }
    ],
    cancelToken: ct(cancel),
    timeout
  })
  interceptors(httpGet)
  return httpGet
}

export function post (config: CONFIG, cancel: Function) {
  const httpPost = axios.create({
    url: config.url,
    method: 'post',
    data: config.data,
    headers: [
      { 'content-type': 'application/json' },
      { 'token': '1111111111111' }
    ],
    cancelToken: ct(cancel),
    timeout
  })
  interceptors(httpPost)
  return httpPost
}

export function form (config: CONFIG, cancel: Function) {
  let data = formData(config.data)
  const httpForm = axios.create({
    url: config.url,
    method: 'post',
    data,
    headers: [
      { 'content-type': 'application/x-www-form-urlencoded' },
      { 'token': '1111111111111' }
    ],
    cancelToken: ct(cancel),
    timeout
  })
  interceptors(httpForm)
  return httpForm
}


